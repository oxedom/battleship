import { pubsub } from "../pubsub"

export const arsenal = () => {


    function ship(value) {
        let ship = undefined
        if (6 > value > 0) {
            ship = document.createElement('span')
            ship.classList.add('ship')
            let shipLeter = undefined
            switch (value) {
                case 1:
                    shipLeter = 'a'
                    break;
                case 2:
                    shipLeter = 'b'
                    break;
                case 3:
                    shipLeter = 'c'
                    break;
                case 4:
                    shipLeter = 'd'
                    break;
                case 5:
                    shipLeter = 'e'
                    break;
            }

            ship.innerText = shipLeter
            ship.setAttribute('value', value)
            ship.setAttribute('draggable', true)
            return ship
        }
        else {
            return new Error('NO SUCH SHIP');
        }

    }

    const button = document.createElement('button')
    button.value = 'CHANGE DIRECTION'
    button.classList.add('flip-btn')
    button.innerText = 'FLIP'
    button.addEventListener('click', (e) => { pubsub.publish('changeDirection') })


    const container = document.createElement('div')
    container.setAttribute('id', 'arsenal')
    container.classList.add('arsenal')
    const ships = [ship(1), ship(2), ship(3), ship(4), ship(5)]
    ships.forEach(ship => {
        let shipLength = ship.attributes[1].value

        const p = document.createElement('p')
        p.innerText = shipLength
        p.classList.add('shipLength')
        ship.appendChild(p)
        ship.addEventListener('click', () => {
            ships.forEach(ship => ship.classList.remove('selected'))
            ship.classList.add('selected')
            pubsub.publish('selectedShip', ship.attributes[1].value)
        })
    })
    container.append(...ships, button)

    return container



}