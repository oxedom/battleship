import './styles.css'
import { pubsub } from './pubsub';
import { stateObject } from './state';

export const dom = (function () {




    pubsub.subscribe('selectedShip', setShip)
    pubsub.subscribe('cellClicked', handleCell)

    function setShip(shipLength) { stateObject.setShip(shipLength) }



    function handleCell(e) {
        let clickedCell = parseInt(e.target.id)
        let cellCords = []
        //WILL ACTIVATE IF GAME STARTED IS FALSE AND THERE IS A SHIP SELECTED
        if (!state.gameStart && state.selectedShip && state.direction == 'row') {


            for (let index = 0; index < state.selectedShip; index++) {
                cellCords.push(clickedCell)
                clickedCell = clickedCell + 1
            }
            paintCells(cellCords, state.selectedShip)
        }
        else if (!state.gameStart && state.selectedShip && state.direction == 'column') {
            for (let index = 0; index < state.selectedShip; index++) {
                cellCords.push(clickedCell)
                clickedCell = clickedCell + 10
            }
            paintCells(cellCords, state.selectedShip)
        }
    }

    function paintCells(cellCords) {

        const cells = document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('cellected'))
        cellCords.forEach(cell => document.getElementById(`${cell}`).classList.add('cellected'))

    }





    return { paintCells, handleCell, stateObject };
})();
