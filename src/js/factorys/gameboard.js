const { ShipFactory } = require("./ship");
const { indexToXY, checkLegalMove } = require('../libs'
)

const GameboardFactory = () => {
  let _ships = [];
  let _missedHits = [];
  let _hits = []

  const getAllhits = () => {
    let allHits = [..._missedHits, ..._hits].sort()

    return allHits
  }

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
    if (_missedHits.includes(cord)) { return }
    let _wasHit = false;
    //Cycles through all ships on a Players Gameboard
    _ships.forEach((ship) => {
      //Get Coards returns an array of it's cords
      if (ship.hitShip(cord)) {
        _wasHit = true;
        _hits.push(cord)
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

  const getRandom = () => {
    let gotRandom = false
    let cord = undefined
    while (!gotRandom) {
      cord = Math.floor(Math.random() * 100) + 1;
      if (!getAllhits().includes(cord)) { gotRandom = true }
    }
    return cord
  }

  const getRandomPlacement = () => {
    let gotRandom = false
    let cord = undefined
    while (!gotRandom) {
      cord = Math.floor(Math.random() * 100) + 1;
      if (!_ships.includes(cord)) { gotRandom = true }
    }
    return cord
  }




  const randomAttack = () => {
    let cord = getRandom()
    let answer = receiveAttack(cord)
    return { answer: answer, index: cord }
  }


  const createRandom = (times) => {
    let cord = undefined
    let arr = []
    let sit = undefined
    cord = getRandomPlacement()
    let parsedCord = indexToXY(cord)
    if (parsedCord.x > 10) { sit = true }

    for (let index = 0; index < times; index++) {

      arr.push(cord)
      sit ? cord-- : cord++

    }

    let parsedIndex = indexToXY(arr[0])

    if (!checkLegalMove(parsedIndex.y, parsedIndex.x, times, 'row')) { return createRandom(times) }
    return arr
  }


  const placeRandom = (length) => {

    arr1 = [99]
    arr2 = [2, 3]
    arr3 = [5, 6, 7]
    arr4 = [30, 40, 50, 60]
    arr5 = [72, 73, 74, 75, 76]

    let arr6 = createRandom(1)
    let arr7 = createRandom(2)
    let arr8 = createRandom(3)
    let arr9 = createRandom(4)
    let arr10 = createRandom(5)
    console.log(arr6, arr7, arr8, arr9, arr10);

    placeShip(arr6)
    placeShip(arr7)
    placeShip(arr8)
    placeShip(arr9)
    placeShip(arr10)

  }

  return { placeShip, getShips, receiveAttack, getMissed, sunkenShips, canPlace, placeRandom, randomAttack };
}

module.exports = { GameboardFactory };
