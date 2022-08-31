import { pubsub } from "../pubsub"
import { stateObject } from '../state'


console.log(stateObject);
export const gameboard = () => {
    let board = document.createElement('div')
    board.classList.add('gameboard')
    board.classList.add('red')
    for (let index = 0; index < 100; index++) {
        let cell = document.createElement('div')
        cell.classList.add('cell')
        board.append(cell)
        if (stateObject.getGameStage()) {
            cell.addEventListener('click', (e) => { pubsub.publish('cellClicked', e) })
            cell.setAttribute('id', index + 1)
        }
    }
    pubsub.publish('updateState', { playerBoardBuilt: true })
    return board


}