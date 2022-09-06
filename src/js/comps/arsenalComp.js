import { pubsub } from "../pubsub";

export const arsenal = () => {
  pubsub.subscribe("deleteShip", deleteShip);
  pubsub.subscribe("gameStart", deleteFlip);
  // pubsub.subscribe('changeDirection', toogleFlip)

  function deleteFlip() {
    document.querySelector("#arsenal > button").style = "display: none";
  }

  function deleteShip(selectedShip) {
    document.getElementById(`ship_${selectedShip}`).style = "display: none";
  }

  function toogleFlip() {
    let ships = document.querySelectorAll(".ship");
    ships.forEach((ship) => {
      if (ship.classList.contains("flip")) {
        ship.classList.remove("flip");
      } else {
        ship.classList.add("flip");
      }
    });
  }

  function ship(value) {
    let ship = undefined;
    if (6 > value > 0) {
      ship = document.createElement("span");
      ship.classList.add("ship");
      let shipLeter = undefined;
      switch (value) {
        case 1:
          shipLeter = "a";
          break;
        case 2:
          shipLeter = "b";
          break;
        case 3:
          shipLeter = "c";
          break;
        case 4:
          shipLeter = "d";
          break;
        case 5:
          shipLeter = "e";
          break;
      }

      ship.innerText = shipLeter;
      ship.setAttribute("value", value);
      ship.setAttribute("id", `ship_${value}`);
      return ship;
    } else {
      return new Error("NO SUCH SHIP");
    }
  }

  const button = document.createElement("button");
  button.value = "CHANGE DIRECTION";
  button.classList.add("flip-btn");
  button.innerText = "FLIP";
  button.addEventListener("click", (e) => {
    pubsub.publish("changeDirection");
    toogleFlip();
  });

  const container = document.createElement("div");
  container.setAttribute("id", "arsenal");
  container.classList.add("arsenal");
  const ships = [ship(1), ship(2), ship(3), ship(4), ship(5)];
  ships.forEach((ship) => {
    let shipLength = ship.attributes[1].value;
    ship.setAttribute("draggable", true);
    const p = document.createElement("p");
    p.innerText = shipLength;
    p.classList.add("shipLength");
    const div = document.createElement("div");
    div.append(ship, p);
    ship.appendChild(p);
    ship.addEventListener("dragstart", (e) => {
      e.target.classList.add("dragging");
      ships.forEach((ship) => ship.classList.remove("selected"));
      pubsub.publish("selectedShip", ship.attributes[1].value);
      ship.classList.add("selected");
    });
    ship.addEventListener("dragend", (e) => {
      e.target.classList.remove("dragging");
    });

    ship.addEventListener("click", () => {
      ships.forEach((ship) => ship.classList.remove("selected"));
      ship.classList.add("selected");
      pubsub.publish("selectedShip", ship.attributes[1].value);
    });
  });
  container.append(...ships, button);

  return container;
};
