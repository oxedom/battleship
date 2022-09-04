import { pubsub } from "./pubsub"
import { checkLegalMove } from "./libs"
import { GameboardFactory } from "./factorys/gameboard"
import { PlayerFactory } from "./factorys/player"
import { ComputerPlayerFactory } from "./factorys/player"
import { getShipArray } from "./libs"

export const stateObject = (function () {

    let direction = 'column'
    let selectedShip = undefined
    let playerBoardBuilt = true
    let computerBoardBuilt = false
    let gameStart = false





    //PUBSUBS






    pubsub.subscribe('changeDirection', setDirection)
    pubsub.subscribe('selectedShip', setShip)

    function setShip(value) {
        console.log(value);
    }

    function setDirection() {
        if (direction == 'row') {
            return direction = 'column'
        }
        if (direction == 'column') {
            return direction = 'row'
        }
    }


    return {}

})()