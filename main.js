const gameBoard = document.getElementById("game-board");
let snake = [{ x: 10, y: 10 }];

function displaySnake() {
  gameBoard.innerHTML = "";
  
  snake.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}
displaySnake();
