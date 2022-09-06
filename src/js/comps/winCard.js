import { pubsub } from "../pubsub";

export const winCard = function () {
  pubsub.subscribe("handleWin", handleWinDom);

  function handleWinDom(winner) {
    const btn = document.createElement("button");
    btn.innerText = "REMATCH";
    const div = document.createElement("div");
    const card = document.createElement("div");
    card.classList.add("card");
    const h2 = document.createElement("h2");
    h2.innerText = `The Winner is ${winner}`;
    card.append(h2);
    div.append(card);
    div.classList.add("overlay");
    card.append(btn);
    btn.classList.add("rematchBtn");
    document.querySelector("#content").append(div);
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      location.reload();
    });
  }

  return;
};
