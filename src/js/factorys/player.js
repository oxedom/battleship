const attackEnemy = (enemyGameBoard, cord) => {
  return enemyGameBoard.receiveAttack(cord);
};

const PlayerFactory = () => {

  return { attackEnemy };
};

const ComputerPlayerFactory = () => {

  const computerAttack = (enemyGameBoard) => {

    //Returns Boolean
    return enemyGameBoard.randomAttack()



  };
  return { computerAttack };
};

module.exports = { PlayerFactory, ComputerPlayerFactory };
