import './styles.css'
import { pubsub } from './pubsub';
import { stateObject } from './state';

export const dom = (function () {


    pubsub.subscribe('cellClicked', handleCell)


    function handleCell(cell) { alert(cell.target.id) }

    function cleanCells(cellCords) { document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('cellected')) }





    return { handleCell };
})();
