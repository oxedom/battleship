import { pubsub } from "../pubsub"


export const gameboard = () => {

    const board = document.createElement('div')
    board.classList.add('gameboard')
    let index = 1
    for (let i = 0; i < 10; i++) {

        for (let j = 0; j < 10; j++) {

            const cell = document.createElement('div')
            cell.setAttribute('index', index)
            cell.setAttribute('y', i + 1)
            cell.setAttribute('x', j + 1)
            index++
            cell.classList.add('cell')
            board.append(cell)
        }
    }




    return board
}

