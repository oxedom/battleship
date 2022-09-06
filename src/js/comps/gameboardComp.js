import { pubsub } from "../pubsub";
import { stateObject } from "../state";
export const gameboard = () => {
  const board = document.createElement("div");
  board.classList.add("gameboard");
  let index = 1;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.setAttribute("index", index);
      cell.setAttribute("y", i + 1);
      cell.setAttribute("x", j + 1);
      if (!stateObject.getBuilt()) {
        cell.addEventListener("click", (e) =>
          pubsub.publish("placeShipClick", e)
        );
        cell.classList.add("blue");
      } else {
        cell.addEventListener("click", (e) => pubsub.publish("attackShip", e));
        cell.classList.add("red");
      }
      index++;
      cell.classList.add("cell");
      board.append(cell);
    }
  }

  pubsub.publish("built", undefined);

  return board;
};
