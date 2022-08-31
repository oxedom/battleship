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
        if (direction === 'row') { state.direction = 'column' }
        else { direction === ' column' }
    }

    const setShip = (length) => { selectedShip = length }

    return { getDirection, getSelectedShip, getplayerBoardBuilt, getGameStage, setDirection, setShip }
})()