import { pubsub } from "./pubsub"
import { checkLegalMove } from "./libs"
import { GameboardFactory } from "./gameboard"
import { PlayerFactory } from "./player"
import { ComputerPlayerFactory } from "./player"
import { getShipArray } from "./libs"
export const stateObject = (function () {

    let direction = 'column'
    let selectedShip = undefined
    let playerBoardBuilt = true
    let computerBoardBuilt = false
    let gameStart = false

    const p1 = PlayerFactory(g)
    const p1Gameboard = GameboardFactory()

    const pComputer = ComputerPlayerFactory()


    const getDirection = () => { return direction }
    const getSelectedShip = () => { return selectedShip }
    const getplayerBoardBuilt = () => { return playerBoardBuilt }
    const getGameStage = () => { return gameStart }

    const setDirection = () => {
        console.log('SET DIRECTION FIRED');
        if (direction == 'row') {
            return direction = 'column'
        }
        if (direction == 'column') {
            return direction = 'row'
        }
    }


    const setComputerBoard = () => computerBoardBuilt = true
    const setPlayerboard = () => playerBoardBuilt = true
    const setShip = (length) => { selectedShip = length }


    function handleCell(event) {
        if (selectedShip == undefined) { return }

        let cellID = event.target.getAttribute('id')
        let row = event.target.getAttribute('row')
        let column = event.target.getAttribute('column')
        let legal = checkLegalMove(row, column, getSelectedShip(), getDirection())


        if (legal && !gameStart) {

            pubsub.publish('shipMemory', {
                cellID: parseInt(cellID),
                direction: stateObject.getDirection(),
                length: stateObject.getSelectedShip()
            })
            //DOM Minipulation
            pubsub.publish('paintCells', cellID)

        }

        if (ships.length === 0) {
            pubsub.publish('startGame')
        }
    }

    function startGame() {
        let r = pComputer.computerAttack(p1Gameboard)
        console.log(r);
        let attacked = document.getElementById(r)
        attacked.classList.add('miss')
        //NEED TO ADD EVENT LISTENRS TO PUBSUB ON ENEMY BATTLE BOARD
        //NEED TO PLACE 5 RANDOM SHIPS FOR ENEMY IN MEMORY
        //NEED TO REACT TO ATTACKS BY ADDING CLASSES TO WHAT HAS BEEN HIT AND MISSED
        //NEED TO CHECK IF SUNK AFTER EACH TURN
        // NEED TO PREVENT OVERLAPPING
    }


    function createPlayerShip(data) {
        let cellIndex = data.cellID
        let direction = data.direction
        let shipLength = data.length

        let arr = getShipArray(cellIndex, shipLength, direction)
        p1Gameboard.placeShip(arr)
        ships = ships.filter(ship => { return shipLength != ship })

    }

    pubsub.subscribe('startGame', startGame)
    //PUBSUBS

    pubsub.subscribe('cellClicked', handleCell)
    pubsub.subscribe('selectedShip', setShip)
    pubsub.subscribe('changeDirection', setDirection)
    pubsub.subscribe('playerBoardInit', setPlayerboard)
    pubsub.subscribe('removedShip', setShip)
    pubsub.subscribe('shipMemory', createPlayerShip)

    return {
        getDirection, getSelectedShip,
        getplayerBoardBuilt, getGameStage,
        setDirection, setShip, setPlayerboard, setComputerBoard
    }
})()