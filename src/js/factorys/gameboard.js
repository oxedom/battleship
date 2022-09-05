const { ShipFactory } = require("./ship");

const GameboardFactory = () => {
  let _ships = [];
  let _missedHits = [];

  const getShips = () => {
    return _ships;
  };

  const placeShip = (cordsArr) => {
    if (!canPlace(cordsArr)) { return }
    const ship = ShipFactory();
    ship.setLength(cordsArr.length)
    ship.setCords(cordsArr);
    _ships.push(ship);
  };

  const canPlace = (cordsArr) => {

    let answer = true
    let allCords = []
    _ships.forEach(ship => {
      allCords.push(ship.getCords())
    })
    allCords = allCords.flat()

    cordsArr.forEach(cord => {
      if (allCords.includes(cord)) {
        answer = false
      }
    })
    return answer
  }

  const receiveAttack = (cord) => {
    let _wasHit = false;
    //Cycles through all ships on a Players Gameboard
    _ships.forEach((ship) => {
      //Get Coards returns an array of it's cords
      if (ship.hitShip(cord)) {
        _wasHit = true;
      }
    });
    if (!_wasHit) {
      _missedHits.push(cord);
    }
    return _wasHit;
  };

  const getMissed = () => {
    return _missedHits;
  };

  const sunkenShips = () => {
    let arr = [];
    let answer = undefined;
    _ships.forEach((ship) => arr.push(ship.isSunk()));
    if (arr.includes(false)) {
      answer = false;
    } else {
      answer = true;
    }
    return answer;
  };

  const randomAttack = () => {
    let gotRandom = false
    let cord = undefined
    while (!gotRandom) {
      cord = Math.floor(Math.random() * 100) + 1;
      if (!_missedHits.includes(cord)) { gotRandom = true }
    }
    let answer = receiveAttack(cord)

    return { answer: answer, index: cord }
  }


  const placeRandom = (length) => {

    arr1 = [99]
    arr2 = [2, 3]
    arr3 = [5, 6, 7]
    arr4 = [30, 40, 50, 60]
    arr5 = [72, 73, 74, 75, 76]

    placeShip(arr1)
    placeShip(arr2)
    placeShip(arr3)
    placeShip(arr4)
    placeShip(arr5)

  }

  return { placeShip, getShips, receiveAttack, getMissed, sunkenShips, canPlace, placeRandom, randomAttack };
}

module.exports = { GameboardFactory };
