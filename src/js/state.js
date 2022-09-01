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
        if (direction === 'row') { direction = 'column' }
        if (direction === 'column') { direction = 'row' }
    }
    const setComputerBoard = () => computerBoardBuilt = true
    const setPlayerboard = () => playerBoardBuilt = true
    const setShip = (length) => { selectedShip = length }


    function handleCell(event) {
        if (selectedShip == undefined) { return }
        let row = event.target.getAttribute('row')
        let column = event.target.getAttribute('column')
        let legal = checkLegalMove(row, column, getSelectedShip(), getDirection())
        console.log(row, column, getSelectedShip(), getDirection());
        alert(legal)
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