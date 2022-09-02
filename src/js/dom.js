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


    function paintCell(cellID) {

        let cell = document.getElementById(cellID)
            cell.classList.add('cellected')
   
        
        pubsub.publish('paintingComplete')
    }






    return {};
})();
