const libs = require('./libs')

const ShipFactory = () => {

    let _shipCords = []
    const _hitCords = []
    const _setArray = (targetArr, valuesArr) => {
        valuesArr.forEach(value => {
            if (value > 100) { throw new Error('VALUE TOO BIG FOR GAMEBOARD') }
            else {
                targetArr.push(value)
            }
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
        let answer = _shipCords.includes(cord)
        if (answer) {
            _hitCords.push(cord)
        }
        return answer
    }

    const isSunk = () => {

        return libs.compare(_hitCords.sort(), _shipCords.sort())
    }




    return { setCords, length, getCords, hitShip, clearCords, isSunk };
}

module.exports = { ShipFactory }