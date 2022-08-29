const { ShipFactory } = require('./ship')

const GameboardFactory = () => {

    let _ships = []
    let _missedHits = []
    const getShips = () => {
        return _ships
    }

    const placeShip = (cordsArr) => {

        const ship = ShipFactory()
        ship.setCords(cordsArr)
        _ships.push(ship)

    }

    const receiveAttack = (cord) => {
        let _wasHit = false
        //Cycles through all ships on a Players Gameboard
        _ships.forEach(ship => {
            //Get Coards returns an array of it's cords
            if (ship.hitShip(cord)) {
                _wasHit = true
            }
        })
        if (!_wasHit) {
            _missedHits.push(cord)
        }
        return _wasHit
    }

    const getMissed = () => {
        return _missedHits
    }

    const sunkenShips = () => {
        return _ships.every(ship => {
            ship.isSunk()
        })
    }



    return { placeShip, getShips, receiveAttack, getMissed, sunkenShips }

}

module.exports = { GameboardFactory }