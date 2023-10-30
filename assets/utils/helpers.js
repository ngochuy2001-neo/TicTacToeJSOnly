export const renderGameMap = (gameMap) => {
  let gameElement = [];
  gameMap.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      gameElement.push(`<div class="gameBox">${col}</div>`)
    })
  })
  return gameElement;
}