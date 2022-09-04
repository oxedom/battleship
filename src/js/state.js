import { pubsub } from "./pubsub"
import { GameboardFactory } from "./factorys/gameboard"
import { getShipArray, checkLegalMove } from './libs'
import { ComputerPlayerFactory, PlayerFactory } from "./factorys/player"

export const stateObject = (function () {

    let direction = 'row'
    let selectedShip = undefined

    let gameStart = false
    let firstBuilt = false
    let player = PlayerFactory()
    let computer = ComputerPlayerFactory()

    let playerGameboard = GameboardFactory()
    let computerGameboard = GameboardFactory()

    computerGameboard.placeRandom()
    //PUBSUBS

    pubsub.subscribe('placeShipClick', placeShipClick)
    pubsub.subscribe('paintShip', deleteShip)
    pubsub.subscribe('changeDirection', setDirection)
    pubsub.subscribe('selectedShip', setShip)
    pubsub.subscribe('built', setFirstBuilt)
    pubsub.subscribe('AttackShip', handleAttackClick)
    function deleteShip() {
        pubsub.publish('deleteShip', selectedShip)
        selectedShip = undefined
    }

    function placeShipClick(e) {

        if (!gameStart && selectedShip > 0 && playerGameboard.getShips().length < 5) {
            let x = parseInt(e.target.getAttribute('x'))
            let y = parseInt(e.target.getAttribute('y'))
            if (checkLegalMove(y, x, selectedShip, direction)) {
                let index = parseInt(e.target.getAttribute('index'))
                let shipArr = getShipArray(index, selectedShip, direction)
                if (!playerGameboard.canPlace(shipArr)) { return }
                playerGameboard.placeShip(shipArr)
                pubsub.publish('paintShip', shipArr)
                if (playerGameboard.getShips().length === 5) {
                    alert('GAME STARTED')
                    gameStart = true
                }
            }
        }
    }


    function handleAttackClick(e) {
        if (gameStart) {
            attackShip(e)
            computer.computerAttack(playerGameboard)
            console.log(computer.computerAttack(playerGameboard));
        }
    }
    function attackShip(e) {
        player.attackEnemy(computerGameboard, parseInt(e.target.getAttribute('index')))
        console.log(player.attackEnemy(computerGameboard, parseInt(e.target.getAttribute('index'))));
    }


    function setShip(value) {
        selectedShip = value
    }

    function setDirection() {
        if (direction == 'row') {
            return direction = 'column'
        }
        if (direction == 'column') {
            return direction = 'row'
        }
    }

    function setFirstBuilt() {
        firstBuilt = true
    }

    function getBuilt() {
        return firstBuilt
    }

    return { getBuilt }

})()