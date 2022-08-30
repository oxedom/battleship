import './styles.css'
import { pubsub } from './pubsub';
export default (function () {
    'use strict';
    const content = document.getElementById('content')


    const arena = () => {
        const arena = document.createElement('div')
        arena.classList.add('arena')


        return arena
    }

    const createGameboard = () => {
        let board = document.createElement('div')
        board.classList.add('gameboard')

        for (let index = 0; index < 100; index++) {

            let cell = document.createElement('div')
            cell.setAttribute('id', index + 1)
            cell.classList.add('cell'),
                cell.addEventListener('click', (e) => { pubsub.publish("cellClicked", e) })
            board.append(cell)
        }
        return board


    }

    function changeCell(cell, boolean) {
        if (boolean) {
            cell.classList.add('hit')
        }
        else {
            cell.classList.add('miss')
        }
    }


    function init() {
        let arenaElement = arena()
        let gameboardOne = createGameboard()
        let gameboardTwo = createGameboard()
        arenaElement.append(gameboardOne, gameboardTwo)
        return arenaElement
    }

    pubsub.subscribe('cellClicked', changeCell)


    content.append(init())







})();
