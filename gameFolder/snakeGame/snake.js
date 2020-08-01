function Snake() {
  this.x = 10;
  this.y = 10;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];

  var startGame = false;

  this.draw = function() {
    ctx.fillStyle = "#FFFFFF";
    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = function() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    this.tail[this.total - 1] = {x: this.x, y: this.y};

    if (startGame === true) {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    }

    if (this.x > canvas.width - 1) {
      this.total = 0;
      this.tail = [];
      this.x = 0;
    }

    if (this.y > canvas.height - 1) {
      this.total = 0;
      this.tail = [];
      this.y = 0;
    }

    if (this.x < 0) {
      this.total = 0;
      this.tail = [];
      this.x = canvas.width;
    }

    if (this.y < 0) {
      this.total = 0;
      this.tail = [];
      this.y = canvas.height;
    }
  }


  this.changeDirection = function(direction) {
    if (direction === 'Enter') {
      startGame = true;
    }
    switch(direction) {
      //Upward movement
      case 'Up':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case 'w':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case 'W':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;

      //Downward movement
      case 'Down':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case 's':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case 'S':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;

      //Leftward Movement
      case 'Left':
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case 'a':
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case 'A':
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;

      //Rightward Movement
      case 'Right':
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
      case 'd':
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
      case 'D':
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;

      //Pause button
      case 'p':
        if (!snakeGamePaused) {
          snakeGamePaused = true;
        }
        else {
          snakeGamePaused = false;
        }
    }
  }

  this.eat = function(fruit) {
    if (this.x === fruit.x && this.y === fruit.y) {
      this.total += 1;
      return true;
    }
      return false;
    }

  this.checkCollision = function() {
    for (var i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        this.total = 0;
        this.tail = [];
        }
      }
    }
}
