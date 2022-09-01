import { PlayerFactory, ComputerPlayerFactory } from "./player"
import { GameboardFactory } from "./gameboard"
import { dom } from './dom'
import { header } from './comps/header'
import { footer } from './comps/footer'
import { container } from './comps/container'
import { gameboard } from "./comps/gameboardComp"
import { arsenal } from "./comps/arsenalComp"
import { arena } from "./comps/arenaContainer"
import { getShipArray } from "./libs"

export default (function () {

    function init() {


        let mainElement = container()
        let headerElement = header()
        let footerElement = footer()
        let playerGameboard = gameboard()
        let enemyGameboard = gameboard()
        let arsenalElement = arsenal()
        let arenaElement = arena()


        arenaElement.append(playerGameboard, enemyGameboard)
        mainElement.append(headerElement, arsenalElement, arenaElement, footerElement)
        document.getElementById('content').append(mainElement)
        //ADD MOVES TO ARENA ELEMENT

    }







    init()



})()