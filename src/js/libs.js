
const compare = function (arr1, arr2) {
    if (!arr1 && arr2)

        return false;
    // compare lengths - can save a lot of time 
    if (arr1.length != arr2.length)
        return false;

    for (var i = 0, l = arr1.length; i < l; i++) {

        if (arr1[i] != arr2[i]) {
            // console.log('Sorry');
            return false;
        }
    }
    return true;
}

module.exports = { compare }
