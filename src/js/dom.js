import './styles.css'
import { pubsub } from './pubsub';
import { stateObject } from './state';

export const dom = (function () {

    pubsub.subscribe('paintCells', paintCells)

    function paintCells(cellID) {
        let cell = document.getElementById(cellID)
        cell.classList.add('cellected')
        console.log(stateObject.getDirection());
        if (stateObject.getDirection() === 'row') {
            let shipLength = stateObject.getSelectedShip()
            for (let index = 1; index < shipLength; index++) {
                cell = cell.nextElementSibling
                cell.classList.add('cellected')
            }
        }
        else {
            console.log(stateObject.getDirection());
            let shipLength = stateObject.getSelectedShip()
            let tempCellID = cellID
            for (let index = 1; index < shipLength; index++) {
                tempCellID + 10
                cell = document.getElementById(tempCellID)
                cell.classList.add('cellected')
            }


        }
    }


    function cleanCells(cellCords) { document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('cellected')) }





    return {};
})();
