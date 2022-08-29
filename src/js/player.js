const PlayerFactory = () => {

    let turn = true
    const attackEnemy = (enemyGameBoard, cords) => {
        enemyGameBoard.receiveAttack(cords)
    }


    return { turn, attackEnemy }
}

module.exports = { PlayerFactory }