import './styles.css'
import { pubsub } from './pubsub';
import { stateObject } from './state';
import { recreateNode } from './libs';

export const dom = (function () {

    pubsub.subscribe('handleComputerAttack', handlePC)
    pubsub.subscribe('paintShip', paintCells)
    pubsub.subscribe('gameStart', gameStarted)
    pubsub.subscribe('handleAttack', handleAttack)


    function handlePC(objPara) {
        let cell = document.querySelector(`[index="${objPara.index}"]`)
        cell ? cell.classList.add('hit') : cell.classList.add('miss')
    }


    function handleAttack(objPara) {
        objPara.answer ? objPara.element.classList.add('hit') : objPara.element.classList.add('miss')
    }

    //PAINTS ARRAY OF CELLS
    function paintCells(cellArr) {

        cellArr.forEach(cell => {
            document.querySelectorAll(`[index="${cell}"]`)[0].classList.add('cellected')
        });
    }



    function gameStarted() {
        //REMOVE ALL EVENT LISTENRS FROM PLAYERBOARD
        document.querySelectorAll('.gameboard')[0].childNodes.forEach(cell => { recreateNode(cell) })
    }



    return {};
})();
