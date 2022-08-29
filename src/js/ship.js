const libs = require('./libs')

const ShipFactory = () => {

    let _shipCords = []
    const _hitCords = []
    const _setArray = (targetArr, valuesArr) => {
        valuesArr.forEach(value => {
            if (value > 100) { throw new Error('VALUE TOO BIG FOR GAMEBOARD') }
            targetArr.push(value)
        })
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
        let answer = false
        if (_shipCords.includes(cord)) {
            _hitCords.push(cord)
            answer = true
        }
        return answer
    }

    const isSunk = () => {

        return libs.compare(_hitCords.sort(), _shipCords.sort())
    }




    return { setCords, length, getCords, hitShip, clearCords, isSunk };
}

module.exports = { ShipFactory }