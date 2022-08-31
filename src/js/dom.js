import './styles.css'
import { pubsub } from './pubsub';


export const dom = (function () {
    'use strict';
    let state =
    {
        direction: 'row',
        selectedShip: undefined,
        playerBoardBuilt: false,
        gameStart: false

    }

    const content = document.getElementById('content')

    function main() {
        const main = document.createElement('main')
        main.classList.add('main')

        return main
    }

    function arena() {
        const arena = document.createElement('div')
        arena.classList.add('arena')
        return arena
    }


    const _createGameboard = () => {
        let board = document.createElement('div')
        board.classList.add('gameboard')
        board.classList.add('red')
        for (let index = 0; index < 100; index++) {
            let cell = document.createElement('div')
            cell.classList.add('cell')
            board.append(cell)
            if (!state.playerBoardBuilt) {
                cell.addEventListener('click', (e) => { pubsub.publish('cellClicked', e) })
                cell.setAttribute('id', index + 1)
            }
        }
        state.playerBoardBuilt = true
        return board


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


    const arsenal = () => {
        const container = document.createElement('div')
        container.setAttribute('id', 'arsenal')
        container.classList.add('arsenal')
        const ships = [ship(1), ship(2), ship(3), ship(4), ship(5)]
        ships.forEach(ship => {
            let shipLength = ship.attributes[1].value

            const p = document.createElement('p')
            p.innerText = shipLength
            p.classList.add('shipLength')
            ship.appendChild(p)
            ship.addEventListener('click', () => {
                ships.forEach(ship => ship.classList.remove('selected'))
                ship.classList.add('selected')
                pubsub.publish('selectedShip', ship.attributes[1].value)
            })
        })
        container.append(...ships)

        return container
    }

    pubsub.subscribe('selectedShip', setShip)
    pubsub.subscribe('cellClicked', handleCell)

    function setShip(shipLength) { state.selectedShip = shipLength }

    function handleCell(e) {
        //WILL ACTIVATE IF GAME STARTED IS FALSE AND THERE IS A SHIP SELECTED
        if (!state.gameStart && state.selectedShip) {
            let clickedCell = parseInt(e.target.id)

            let cellCords = []
            for (let index = 0; index < state.selectedShip; index++) {
                cellCords.push(clickedCell)
                clickedCell = clickedCell + 1
            }
            paintCells(cellCords, state.selectedShip)
        }
    }

    function paintCells(cellCords, amount) {
        const cells = document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('cellected'))
        cellCords.forEach(cell => document.getElementById(`${cell}`).classList.add('cellected'))

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
            ship.setAttribute('value', value)
            ship.setAttribute('draggable', true)
            return ship
        }
        else {
            return new Error('NO SUCH SHIP');
        }

    }


    function init() {


        let mainElement = main()
        let headerElement = header()
        let footerElement = footer()

        let playerGameboard = _createGameboard()
        let enemyGameboard = _createGameboard()

        let arsenalElement = arsenal()



        let arenaElement = arena()

        arenaElement.append(playerGameboard, enemyGameboard)



        mainElement.append(headerElement, arsenalElement, arenaElement, footerElement)
        content.append(mainElement)
        //ADD MOVES TO ARENA ELEMENT

    }

    return { init, main };
})();
