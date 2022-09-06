import { pubsub } from "./pubsub";
import { GameboardFactory } from "./factorys/gameboard";
import { getShipArray, checkLegalMove, recreateNode } from "./libs";
import { ComputerPlayerFactory, PlayerFactory } from "./factorys/player";

export const stateObject = (function () {
  let direction = "row";
  let selectedShip = undefined;

  let gameStart = false;
  let firstBuilt = false;
  let player = PlayerFactory();
  let computer = ComputerPlayerFactory();

  let playerGameboard = GameboardFactory();
  let computerGameboard = GameboardFactory();

  computerGameboard.placeRandom();

  //PUBSUBS

  pubsub.subscribe("placeShipClick", placeShipClick);
  pubsub.subscribe("paintShip", deleteShip);
  pubsub.subscribe("changeDirection", setDirection);
  pubsub.subscribe("selectedShip", setShip);
  pubsub.subscribe("built", setFirstBuilt);
  pubsub.subscribe("gameStart", handleStart);
  pubsub.subscribe("attackShip", handleAttackShip);
  pubsub.subscribe("handleComputerAttack", handleComputerAttack);
  // pubsub.subscribe('handleWin', handleWin)

  function handleComputerAttack(obj) {
    if (playerGameboard.sunkenShips()) {
      pubsub.publish("handleWin", "computer");
    }
  }

  function handleStart() {
    gameStart = true;
  }

  // DEBUGGER FUNCTION TO VISUALIZE COMPUTER SHIPS
  // computerGameboard.getShips().forEach(ship => {
  //     setTimeout(() => {
  //         ship.getCords().forEach(cord => {
  //             document.querySelector(`#content > main > div.arena > div:nth-child(2) > div:nth-child(${cord})`).classList.add('cellected')
  //         })

  //     }, 0);
  // })

  function deleteShip() {
    pubsub.publish("deleteShip", selectedShip);
    selectedShip = undefined;
  }

  function placeShipClick(e) {
    if (
      !gameStart &&
      selectedShip > 0 &&
      playerGameboard.getShips().length < 5
    ) {
      let x = parseInt(e.target.getAttribute("x"));
      let y = parseInt(e.target.getAttribute("y"));
      if (checkLegalMove(y, x, selectedShip, direction)) {
        let index = parseInt(e.target.getAttribute("index"));
        let shipArr = getShipArray(index, selectedShip, direction);
        if (!playerGameboard.canPlace(shipArr)) {
          return;
        }
        playerGameboard.placeShip(shipArr);
        pubsub.publish("paintShip", shipArr);
        if (playerGameboard.getShips().length === 5) {
          pubsub.publish("gameStart");
        }
      }
    }
  }

  function handleAttackShip(e) {
    if (gameStart) {
      attackShip(e);
    }
  }
  function attackShip(e) {
    player.attackEnemy(
      computerGameboard,
      parseInt(e.target.getAttribute("index"))
    )
      ? e.target.classList.add("hit")
      : e.target.classList.add("miss");
    recreateNode(e.target);

    if (computerGameboard.sunkenShips()) {
      pubsub.publish("handleWin", "player");
    }

    pubsub.publish(
      "handleComputerAttack",
      computer.computerAttack(playerGameboard)
    );
  }

  function setShip(value) {
    selectedShip = value;
  }

  function setDirection() {
    if (direction == "row") {
      return (direction = "column");
    }
    if (direction == "column") {
      return (direction = "row");
    }
  }

  function setFirstBuilt() {
    firstBuilt = true;
  }

  function getBuilt() {
    return firstBuilt;
  }

  return { getBuilt };
})();
