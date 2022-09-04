import './styles.css'
import { pubsub } from './pubsub';
import { stateObject } from './state';

export const dom = (function () {

    pubsub.subscribe('paintCells', paintCell)
    pubsub.subscribe('paintingComplete', pantingComplete)

    function pantingComplete() {
        let shipToRemove = document.getElementById(`ship_${stateObject.getSelectedShip()}`)
        shipToRemove.style = "display: none"
        pubsub.publish('removedShip', undefined)
    }


    function paintCells(cellID) {

        let cell = document.getElementById(cellID)

        let shipLength = stateObject.getSelectedShip()

        if (cell.classList.contains('cellected')) { return }
        if (stateObject.getDirection() === 'row') {

            cell.classList.add('cellected')


            pubsub.publish('paintingComplete')
        }
    }






    return {};
})();
