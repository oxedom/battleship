const PlayerFactory = () => {

    const attackEnemy = (enemyGameBoard, cord) => { enemyGameBoard.receiveAttack(cord) }


    return { attackEnemy }
}

module.exports = { PlayerFactory }