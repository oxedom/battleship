const libs = require("./libs");

const ShipFactory = () => {

  let _shipCords = [];
  let _hitCords = [];
  let shipLength = 100;

  const _setArray = (targetArr, valuesArr) => {
    if (valuesArr.length != shipLength) { return Error(`${cordsArr.length} is not equal to ${shipLength}}`) }
    valuesArr.forEach((value) => {
      if (value > 100) {
        return new Error("VALUE TOO BIG FOR GAMEBOARD");
      } else {
        targetArr.push(value);
      }
    });
  };


  const getLength = () => {
    return shipLength;
  };

  const setLength = (para) => {
    shipLength = para
    return shipLength
  }

  const setCords = (cordsArr) => {
    _setArray(_shipCords, cordsArr);
  };

  const clearCords = () => {
    _shipCords = [];
  };

  const getCords = () => {
    return _shipCords;
  };
  const hitShip = (cord) => {
    let answer = _shipCords.includes(cord);
    if (answer) {
      _hitCords.push(cord);
    }
    return answer;
  };

  const isSunk = () => {
    return libs.compare(_hitCords.sort(), _shipCords.sort());
  };

  return { setCords, getCords, hitShip, clearCords, isSunk, setLength, getLength };
};

module.exports = { ShipFactory };
