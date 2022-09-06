import { PlayerFactory, ComputerPlayerFactory } from "./factorys/player"
import { GameboardFactory } from "./factorys/gameboard"
import { dom } from './dom'
import { header } from './comps/header'
import { footer } from './comps/footer'
import { container } from './comps/container'
import { gameboard } from "./comps/gameboardComp"
import { arsenal } from "./comps/arsenalComp"
import { arena } from "./comps/arenaContainer"
import { winCard } from "./comps/winCard"
import { getShipArray } from "./libs"

export default (function () {

    function init() {


        let mainElement = container()
        let headerElement = header()
        let footerElement = footer()
        let playerGameboardElement = gameboard()
        let winCardElement = winCard()
        let enemyGameboardElement = gameboard()
        let arsenalElement = arsenal()
        let arenaElement = arena()


        arenaElement.append(playerGameboardElement, enemyGameboardElement)
        mainElement.append(headerElement, arsenalElement, arenaElement, footerElement)
        document.getElementById('content').append(mainElement)
        //ADD MOVES TO ARENA ELEMENT

    }







    init()



})()