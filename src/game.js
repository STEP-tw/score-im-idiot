let Game = function() {
  this.snake = {};
  this.score = 0;
}
Game.prototype.addSnake = function(snake) {
  return this.snake = snake;
};

Game.prototype.getScore = function() {
  return this.score;
};

Game.prototype.updateScoreBy = function(value){
  return this.score+=value;
}
