const stateObject = require('./state');

const compare = function (arr1, arr2) {
  let answer = true;
  // compare lengths - can save a lot of time
  if (arr1.length != arr2.length) {
    answer = false;
    return answer;
  } else {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        answer = false;
      }
    }
  }

  return answer;
};

const XYtoIndex = function (row, column) {
  let i = undefined
  i = column + 10 * (row - 1)

  return i
}



const checkLegalMove = (row, column, shipLength, direction) => {

  let answer = undefined

  shipLength = parseInt(shipLength)
  row = parseInt(row)
  column = parseInt(column)

  if (shipLength === 1) { return true }
  //ROW CASE
  if (direction === 'row') {
    if ((shipLength + column) > 11) {
      answer = false
    }
    else { answer = true }

  }
  //COLUMN CASE
  if (direction === 'column') {
    if ((shipLength + row) > 11) {
      answer = false
    }
    else { answer = true }
  }


  return answer
}

const getShipArray = (cellIndex, length, direction) => {
  let arr = []
  if (direction == 'row') {
    for (let index = 0; index < length; index++) {
      arr.push(cellIndex)
      cellIndex++
    }
  }
  if (direction == 'column') {
    for (let index = 0; index < length; index++) {
      arr.push(cellIndex)
      cellIndex = cellIndex + 10
    }
  }

  if (arr.includes(100)) { alert('ERORROROROROROROR') }

  return arr
}


module.exports = { compare, XYtoIndex, checkLegalMove, getShipArray };
