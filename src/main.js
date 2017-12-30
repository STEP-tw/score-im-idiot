let game=undefined;
let food=undefined;
let numberOfRows=60;
let numberOfCols=120;


let animator=undefined;

const updateScoreDisplay=function() {
  let display=document.getElementById('display');
  let score=game.getScore();
  display.innerText=`Score: ${score}`;
}
const animateSnake=function() {
  let details=game.move();
  paintBody(details.oldHead);
  unpaintSnake(details.oldTail);
  paintHead(details.head);
  if(game.hasSnakeEatenFood()) {
    game.grow();
    game.createFood();
    game.updateScoreBy(10);
    updateScoreDisplay();
    drawFood(game.getFood());
  }
}

const changeSnakeDirection=function(event) {
  switch (event.code) {
    case "KeyA":
      snake.turnLeft();
      break;
    case "KeyD":
      snake.turnRight();
      break;
    case "KeyC":
      snake.grow();
      break;
    default:
  }
}

const addKeyListener=function() {
  let grid=document.getElementById("keys");
  grid.onkeyup=changeSnakeDirection;
  grid.focus();
}

const createSnake=function() {
  let tail=new Position(12,10,"east");
  let body=[];
  body.push(tail);
  body.push(tail.next());
  let head=tail.next().next();
  snake=game.addSnake(new Snake(head,body));
}

const createGame=function() {
  let topLeft=new Position(0,0,"east");
  let bottomRight=new Position(numberOfCols,numberOfRows,"east");
  game=new Game(topLeft,bottomRight);
}

const createFood=function(numberOfRows,numberOfCols) {
  food=generateRandomPosition(numberOfCols,numberOfRows);
}

const startGame=function() {
  createGame();
 createSnake();
 updateScoreDisplay();
 drawGrids(numberOfRows,numberOfCols);
 drawSnake(game.getSnake());
 game.createFood();
 drawFood(game.getFood());
 addKeyListener();
 animator=setInterval(animateSnake,140);
}

window.onload=startGame;
