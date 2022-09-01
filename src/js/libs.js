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
  if (shipLength == 1) { return true }


  return answer
}

module.exports = { compare, XYtoIndex, checkLegalMove };
