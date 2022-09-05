import './styles.css'
import { pubsub } from './pubsub';
import { stateObject } from './state';
import { recreateNode } from './libs';

export const dom = (function () {

    pubsub.subscribe('handleComputerAttack', handlePC)
    pubsub.subscribe('paintShip', paintCells)
    pubsub.subscribe('gameStart', gameStarted)
    pubsub.subscribe('deleteShip', deleteShip)
    pubsub.subscribe('handleAttack', handleAttack)


    function handlePC(objPara) {
        console.log('handlePC');
        if (objPara.answer) {
            document.querySelector(`#content > main > div.arena > div:nth-child(1) > div:nth-child(${objPara.index})`).classList.add('hit')
        }
        else {
            document.querySelector(`#content > main > div.arena > div:nth-child(1) > div:nth-child(${objPara.index})`).classList.add('miss')
        }
    }


    function handleAttack(objPara) {
        if (objPara.answer) {
            objPara.element.classList.add('hit')
        }
        else { objPara.element.classList.add('miss') }

    }
    function paintCells(cellArr) {

        cellArr.forEach(cell => {
            document.querySelectorAll(`[index="${cell}"]`)[0].classList.add('cellected')
        });
    }

    function deleteShip(selectedShip) {
        document.getElementById(`ship_${selectedShip}`).style = 'display: none'
    }

    function gameStarted() {
        deleteFlip()
        //REMOVE ALL EVENT LISTENRS FROM PLAYERBOARD
        document.querySelectorAll('.gameboard')[0].childNodes.forEach(cell => { recreateNode(cell) })
    }

    function deleteFlip() {
        document.querySelector("#arsenal > button").style = 'display: none'
    }

    return {};
})();
