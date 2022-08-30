const attackEnemy = (enemyGameBoard, cord) => {
  enemyGameBoard.receiveAttack(cord);
};

const PlayerFactory = () => {
  let turn = true;

  return { attackEnemy };
};

const ComputerPlayerFactory = () => {
  const computerAttack = (enemyGameBoard) => {
    let randomCord = Math.floor(Math.random() * 100) + 1;

    if (enemyGameBoard.getMissed().includes(randomCord)) {
      computerAttack(enemyGameBoard);
    }
  };
  return { computerAttack };
};

module.exports = { PlayerFactory, ComputerPlayerFactory };
