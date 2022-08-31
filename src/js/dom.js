import './styles.css'
import { pubsub } from './pubsub';

export const dom = (function () {
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


    const _createGameboard = () => {
        let board = document.createElement('div')
        board.classList.add('gameboard')

        for (let index = 0; index < 100; index++) {

            let cell = document.createElement('div')
            cell.addEventListener('dragover', () => {
                e.preventDefault()
                const draggable = document.querySelector('.dragging')
                console.log(draggable.id);
            })
            cell.classList.add('cell'),
                // cell.addEventListener('click', (e) => { pubsub.publish("cellClicked", e) })
                board.append(cell)
        }
        return board


    }

    const computerGameboard = () => {
        const gameboard = _createGameboard()
        gameboard.classList.add('blue')
        return gameboard
    }

    const playerGameboard = () => {
        let gameboard = _createGameboard()
        gameboard.classList.add('red')
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

    const arsenal = () => {
        const container = document.createElement('div')
        container.setAttribute('id', 'arsenal')
        container.classList.add('arsenal')

        const ships = [ship(1), ship(2), ship(3), ship(4), ship(5)]
        ships.forEach(ship => {

            ship.addEventListener('dragstart', (e) => {
                ship.classList.add('dragging')
                let shipLength = e.target.id
                console.log(shipLength);
            })

            ship.addEventListener('dragend', (e) => {
                ship.classList.remove('dragging')
            })



        })
        container.append(...ships)

        return container
    }


    function footer() {
        let footer = document.createElement('footer')
        footer.classList.add('footer')
        return footer
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
            ship.setAttribute('id', value)
            ship.setAttribute('value', value)
            ship.setAttribute('draggable', true)
            return ship
        }
        else {
            return new Error('NO SUCH SHIP');
        }

    }


    function card() {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')

        const h4 = document.createElement('h4')
        h4.innerText = 'Welcome to Battleship'
        // const shipsMenuEl = shipMenu()
        const button = document.createElement('button')
        button.innerText = 'rotate'
        cardElement.append(h4, button)

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
        let arsenalElement = arsenal()



        let footerElement = footer()
        arenaElement.append(gameboardOne)
        mainElement.append(headerElement, arenaElement, arsenalElement, footerElement)
        content.append(mainElement)
        //ADD MOVES TO ARENA ELEMENT

    }

    return { init, main };
})();
