import './styles.css'
import { pubsub } from './pubsub';
export default (function () {
    'use strict';
    const content = document.getElementById('content')


    const createGameboard = () => {
        let board = document.createElement('div')
        board.classList.add('gameboard')
        for (let index = 0; index < 100; index++) {

            let cell = document.createElement('div')
            cell.setAttribute('id', index + 1)
            cell.classList.add('cell')
            cell.addEventListener('click', (e) => {
                pubsub.publish("cellClicked")
            })
            board.append(cell)
        }
        return board


    }
    content.append(createGameboard())







})();
