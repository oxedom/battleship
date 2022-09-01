import { pubsub } from "./pubsub"
import { checkLegalMove } from "./libs"
export const stateObject = (function () {


    let direction = 'column'
    let selectedShip = undefined
    let playerBoardBuilt = false
    let computerBoardBuilt = false
    let gameStart = false


    const getDirection = () => { return direction }
    const getSelectedShip = () => { return selectedShip }
    const getplayerBoardBuilt = () => { return playerBoardBuilt }
    const getGameStage = () => { return gameStart }

    const setDirection = () => {
        console.log('SET DIRECTION FIRED');
        console.log(direction);
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
        if (legal) {
            pubsub.publish('paintCells', cellID)

        }
    }



    //PUBSUBS
    pubsub.subscribe('cellClicked', handleCell)
    pubsub.subscribe('selectedShip', setShip)
    pubsub.subscribe('changeDirection', setDirection)
    pubsub.subscribe('playerBoardInit', setPlayerboard)

    return {
        getDirection, getSelectedShip,
        getplayerBoardBuilt, getGameStage,
        setDirection, setShip, setPlayerboard, setComputerBoard
    }
})()