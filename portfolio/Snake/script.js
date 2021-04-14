let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');
let box = 32;
let snake = [];
snake [0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "rigth";

const makeBG = () => {
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

const makeSnake = () => {
  for (let i in snake){
    context.fillStyle = 'grey';
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

const startGame = () => {
  makeBG();
  makeSnake();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  
  if (direction == "rigth") snakeX += box;
  if (direction == "left") snakeX -= box;
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box;

  snake.pop();

  let newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead);
}

let game = setInterval(startGame, 100);