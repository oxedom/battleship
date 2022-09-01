import './styles.css'
import { pubsub } from './pubsub';
import { stateObject } from './state';

export const dom = (function () {

    pubsub.subscribe('paintCells', paintCells)

    function paintCells(cellID) {




        let cell = document.getElementById(cellID)

        let shipLength = stateObject.getSelectedShip()

        if (cell.classList.contains('cellected')) { return }
        if (stateObject.getDirection() === 'row') {
            cell.classList.add('cellected')
            cell.setAttribute('marked', true)
            for (let index = 1; index < shipLength; index++) {
                cell = cell.nextElementSibling
                cell.classList.add('cellected')
            }
        }
        if (stateObject.getDirection() === 'column') {

            let tempCellID = parseInt(cellID)

            for (let index = 0; index < shipLength; index++) {
                console.log(tempCellID);
                let tempCell = document.getElementById(`${tempCellID}`)
                tempCell.classList.add('cellected')
                tempCellID = tempCellID + 10

            }


        }
    }


    function cleanCells(cellCords) { document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('cellected')) }





    return {};
})();
