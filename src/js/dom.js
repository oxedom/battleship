import './styles.css'
import { pubsub } from './pubsub';

export default (function () {
    'use strict';
    const content = document.getElementById('content')

    const main = () => {
        const main = document.createElement('main')
        main.classList.add('main')

        return main
    }

    const arena = () => {
        const arena = document.createElement('div')
        arena.classList.add('arena')




        return arena
    }

    function sidebar() {
        const sidebarElement = document.createElement('nav')
        sidebarElement.classList.add('sidebar')
        sidebarElement.innerText = 'asss'

        return sidebarElement
    }

    const _createGameboard = () => {
        let board = document.createElement('div')
        board.classList.add('gameboard')

        for (let index = 0; index < 100; index++) {

            let cell = document.createElement('div')

            cell.classList.add('cell'),
                // cell.addEventListener('click', (e) => { pubsub.publish("cellClicked", e) })
                board.append(cell)
        }
        return board


    }

    const computerGameboard = () => {
        return _createGameboard()
    }

    const playerGameboard = () => {
        let gameboard = _createGameboard()
        let i = 1
        gameboard.querySelectorAll('div').forEach(cell => {
            cell.setAttribute('id', i)
            i++
            cell.addEventListener('click', (e) => {
                let cellID = e.composedPath()[0].id
                pubsub.publish('cellClick', cellID)

            })
        })
        return gameboard
    }


    function footer() {
        let footer = document.createElement('footer')
        footer.classList.add('footer')
        return footer
    }
    function changeCell(cell, boolean) {
        if (boolean) {
            cell.classList.add('hit')
        }
        else {
            cell.classList.add('miss')
        }
    }

    function header() {
        const header = document.createElement('h1')
        header.classList.add('header')
        header.innerText = 'BATTLESHIP'

        return header
    }

    function ship(value) {
        let ship = undefined
        if (6 > value > 0) {
            ship = document.createElement('span')
            ship.classList.add('ship')
            let shipLeter = undefined
            switch (value) {
                case 1:
                    shipLeter = 'a'
                    break;
                case 2:
                    shipLeter = 'b'
                    break;
                case 3:
                    shipLeter = 'c'
                    break;
                case 4:
                    shipLeter = 'd'
                    break;
                case 5:
                    shipLeter = 'e'
                    break;
            }

            ship.innerText = shipLeter
            return ship
        }
        else {
            return new Error('NO SUCH SHIP');
        }

    }


    function card() {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')

        const h3 = document.createElement('h3')
        h3.innerText = 'Welcome to Battleship'
        const p = document.createElement('p')
        p.innerText = 'Enter your ships XY'
        const button = document.createElement('button')
        button.innerText = 'rotate'
        cardElement.append(h3, p, button)

        return cardElement
    }

    function welcome() {
        const overlay = document.createElement('div')

        overlay.classList.add('overlay')

        overlay.append(card())
        return overlay
    }





    function init() {


        let mainElement = main()
        let headerElement = header()
        let arenaElement = arena()
        let gameboardOne = playerGameboard();
        let gameboardTwo = computerGameboard();
        let footerElement = footer()
        arenaElement.append(gameboardOne, gameboardTwo)


        mainElement.append(headerElement, arenaElement, footerElement)

        return mainElement
    }

    pubsub.subscribe('cellClicked', changeCell)


    content.append(init())







})();
