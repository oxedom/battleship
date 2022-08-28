const shipFactory = () => {

    const _shipCords = []
    const _hitCords = []

    const length = () => { return _shipCords.length }
    const setCords = (arr) => {
        return arr.forEach(cord => { _shipCords.push(cord) })
    }

    const clearCords = () => {
        _hitCords = []
    }

    const getCords = () => {
        return _shipCords
    }
    const hitShip = (cord) => {
        let answer = undefined
        if (_shipCords.includes(cord)) {
            answer = true
        }
        return answer
    }

    return { setCords, length, getCords, hitShip, clearCords };
}

module.exports = { shipFactory }