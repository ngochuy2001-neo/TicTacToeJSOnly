const DEFAULT_GAME_MAP = [["U","U","U"],["U","U","U"],["U","U","U"]]
let currentGameMap = [["U","U","U"],["U","U","U"],["U","U","U"]]
let turn = false;
let alreadyWin = false;

const handleTurnClick = (event) => {
    if(turn){
      currentGameMap[event.target.dataset.row][event.target.dataset.col] = "O";
    } else{
      currentGameMap[event.target.dataset.row][event.target.dataset.col] = "X";
    }
    bodyBoardGame.innerHTML = renderGameMap(currentGameMap);
    turn = !turn;
}

const renderGameMap = (gameMap) => {
  let gameElement = []
  gameMap.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if(col == "U"){
        gameElement.push(`<div onclick="${alreadyWin? "": "handleTurnClick(event)"}" data-row="${rowIndex}" data-col="${colIndex}" class="gameBox"></div>`)
      } else {
        gameElement.push(`<div onclick="handleTurnClick(event)" data-row="${rowIndex}" data-col="${colIndex}" style="${col == "X"? "color: red": "color: blue"}" class="gameBox">${col}</div>`)
      }
    })
  })
  return gameElement.join('')
}

const bodyBoardGame = document.getElementById("bodyBoardGame");

bodyBoardGame.innerHTML = renderGameMap(DEFAULT_GAME_MAP);

const gameBoxes = document.getElementsByClassName("gameBox");


