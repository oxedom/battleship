import { pubsub } from "./pubsub"
import { GameboardFactory } from "./factorys/gameboard"
import { getShipArray, checkLegalMove } from './libs'

export const stateObject = (function () {

    let direction = 'row'
    let selectedShip = undefined

    let gameStart = false

    let playerGameboard = GameboardFactory()
    let computerGameboard = GameboardFactory()
    //PUBSUBS

    pubsub.subscribe('cellClick', handleClick)
    pubsub.subscribe('paintShip', deleteShip)
    pubsub.subscribe('changeDirection', setDirection)
    pubsub.subscribe('selectedShip', setShip)

    function deleteShip() {
        pubsub.publish('deleteShip', selectedShip)
        selectedShip = undefined
    }
    function handleClick(e) {

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

        if (gameStart) {

        }

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

    return {}

})()