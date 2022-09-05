const attackEnemy = (enemyGameBoard, cord) => {
  return enemyGameBoard.receiveAttack(cord);
};

const PlayerFactory = () => {

  return { attackEnemy };
};

const ComputerPlayerFactory = () => {

  const computerAttack = (enemyGameBoard) => {
    let answer = enemyGameBoard.randomAttack()
    console.log(answer);
    console.log('pepe');
    //Returns Boolean
    return answer



  };
  return { computerAttack };
};

module.exports = { PlayerFactory, ComputerPlayerFactory };
