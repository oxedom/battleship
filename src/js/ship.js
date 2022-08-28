const libs = require('./libs')

const ShipFactory = () => {

    let _shipCords = []
    const _hitCords = []
    const _setArray = (targetArr, valuesArr) => {
        valuesArr.forEach(value => { targetArr.push(value) })
    }
    const length = () => { return _shipCords.length }
    const setCords = (cordsArr) => { _setArray(_shipCords, cordsArr) }

    const clearCords = () => {
        _shipCords = []
    }

    const getCords = () => {
        return _shipCords
    }
    const hitShip = (cord) => {
        let answer = undefined
        if (_shipCords.includes(cord)) {
            answer = true
            _hitCords.push(cord)
        }

        else {
            answer = false
        }
        return answer
    }

    const isSunk = () => {
        return libs.compare(_hitCords, _shipCords)

    }




    return { setCords, length, getCords, hitShip, clearCords, isSunk };
}

module.exports = { ShipFactory }