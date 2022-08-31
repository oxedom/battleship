import { pubsub } from "./pubsub"

export const stateObject = (function () {


    let direction = 'column'
    let selectedShip = undefined
    let playerBoardBuilt = false
    let gameStart = false


    const getDirection = () => { return direction }
    const getSelectedShip = () => { return selectedShip }
    const getplayerBoardBuilt = () => { return playerBoardBuilt }
    const getGameStage = () => { return gameStart }

    const setDirection = () => {
        if (direction === 'row') { direction = 'column' }
        if (direction === 'column') { direction = 'row' }

    }

    const setShip = (length) => { selectedShip = length }


    //PUBSUBS
    pubsub.subscribe('changeDirection', setDirection)


    return { getDirection, getSelectedShip, getplayerBoardBuilt, getGameStage, setDirection, setShip }
})()