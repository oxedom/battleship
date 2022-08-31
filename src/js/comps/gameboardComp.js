import { pubsub } from "../pubsub"
import { stateObject } from '../state'


export const gameboard = () => {
    let board = document.createElement('div')
    board.classList.add('gameboard')
    board.classList.add('red')
    for (let index = 0; index < 10; index++) {

        const row = document.createElement('div')
        row.setAttribute('id', `row${index + 1}`)
        row.classList.add('row')

        for (let index = 0; index < 10; index++) {
            let cell = document.createElement('div')
            cell.classList.add('cell')
            row.append(cell)
            if (!stateObject.getplayerBoardBuilt()) {
                cell.addEventListener('click', (e) => { pubsub.publish('cellClicked', e) })
                cell.setAttribute('id', index + 1)
            }
            board.append(row)
        }


    }
    pubsub.publish('playerBoardInit')
    pubsub.publish('updatePlayerBoard')
    return board


}