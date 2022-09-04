const attackEnemy = (enemyGameBoard, cord) => {
  enemyGameBoard.receiveAttack(cord);
};

const PlayerFactory = () => {

  return { attackEnemy };
};

const ComputerPlayerFactory = () => {
  const computerAttack = (enemyGameBoard) => {
    let randomCord = Math.floor(Math.random() * 100) + 1;

    if (enemyGameBoard.getMissed().includes(randomCord)) {
      computerAttack(enemyGameBoard);
    }
    return randomCord
  };
  return { computerAttack };
};

module.exports = { PlayerFactory, ComputerPlayerFactory };
