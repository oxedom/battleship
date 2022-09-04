import './styles.css'
import { pubsub } from './pubsub';
import { stateObject } from './state';

export const dom = (function () {

    pubsub.subscribe('paintShip', paintCells)
    pubsub.subscribe('deleteShip', deleteShip)
    function paintCells(cellArr) {
        cellArr.forEach(cell => {
            document.querySelectorAll(`[index="${cell}"]`)[0].classList.add('cellected')
        });
    }

    function deleteShip(selectedShip) {
        document.getElementById(`ship_${selectedShip}`).style = 'display: none'
    }



    return {};
})();
