// Task 1
function assign(object, arg1, arg2) {
  for (let key in arg1) {
    if (arg1.hasOwnProperty(key)) {
      object[key] = arg1[key];
    }
  }
  for (let key in arg2) {
    if (arg2.hasOwnProperty(key)) {
      object[key] = arg2[key];
    }
  }
  return object;
}

// var defaults = { a: 123, b: 777 };
// var options = { a: 456 };
// var configs = console.log(assign({}, defaults, options)); // {a: 456, b: 777}


// Task 2
function Bot({
  name,
  speed,
  x,
  y
}) {
  this.name = name;
  this.speed = speed;
  this.x = x;
  this.y = y;
  this.type = 'Bot';
  this.defaultSpeed = speed;
}

Bot.prototype.getSpeed = function() {
  return this.speed;
}

Bot.prototype.setSpeed = function(number) {
  this.speed = number;
}

Bot.prototype.getDefaultSpeed = function() {
  return this.defaultSpeed;
}
Bot.prototype.getCoordinates = function() {
  return {
    x: this.x,
    y: this.y
  };
}

Bot.prototype.setCoordinates = function(x, y) {
  this.x = x;
  this.y = y;
}

Bot.prototype.move = function(direction) {
  if (direction === 'up') {
    this.y += this.speed;
  } else if (direction === 'down') {
    this.y -= this.speed;
  } else if (direction === 'left') {
    this.x -= this.speed;
  } else if (direction === 'right') {
    this.x += this.speed;
  } else {
    console.log('You can`t change direction. Please, enter valid value(up, down, left or right).');
  }
}

Bot.prototype.showPosition = function() {
  console.log(`Hi, I am ${this.type} '${this.name}'. I am located at ${this.x}:${this.y}.`);
}

function Racebot(name, speed, x, y) {
  Bot.call(this, name, speed, x, y);
  this.type = 'Racebot';
  this.previousDirection = '';
}

Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;

Racebot.prototype.move = function(direction) {
  if (this.previousDirection === direction) {
    this.speed++;
  } else {
    this.speed = this.defaultSpeed;
  }
  this.previousDirection = direction;
  Bot.prototype.move.call(this, direction);
}

function Speedbot(name, speed, x, y) {
  Bot.call(this, name, speed, x, y);
  this.type = 'Speedbot';
}

Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;

Speedbot.prototype.prepareEngine = function() {
  this.speed += 2;
}

Speedbot.prototype.move = function(direction) {
  Bot.prototype.move.call(this, direction);
  if (this.speed !== this.defaultSpeed) {
    this.speed--;
  }
}

// // let Botty = new Bot({name: "Betty", speed: 2, x: 0, y: 1});
// // console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at 0:1.
// // Botty.move('up');
// // console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at 0:3.
// //  Botty.move('left');
// // Botty.move('down');
// // Botty.move('up');
// // Botty.move('up');
// // console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at -2:5.
// // Botty.move('up');
// // console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at -2:7.
// // Botty.move('up');
// // console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at -2:9.

// // let Zoom = new Racebot({name: "Lightning", speed: 2, x: 0, y: 1});
// // console.log(Zoom.showPosition()); // I am Racebot 'Lightning'. I am located at 0:1.
// // Zoom.move('up');
// // console.log(Zoom.showPosition()); // I am Racebot 'Lightning'. I am located at 0:3.
// // Zoom.move('left');
// // Zoom.move('down');
// // Zoom.move('up');
// // Zoom.move('up');
// // console.log(Zoom.showPosition()); // I am Racebot 'Lightning'. I am located at -2:6.
// // Zoom.move('up');
// // console.log(Zoom.showPosition()); // I am Racebot 'Lightning'. I am located at -2:10.
// // Zoom.move('up');
// // console.log(Zoom.showPosition()); // I am Racebot 'Lightning'. I am located at -2:15.

// // let Broom = new Speedbot({name: "Thunder", speed: 2, x: 0, y: 1});
// // console.log(Broom.showPosition()); // I am Speedbot 'Thunder'. I am located at 0:1.
// // Broom.move('up');
// // console.log(Broom.showPosition()); // I am Speedbot 'Thunder'. I am located at 0:3.
// // Broom.prepareEngine();
// // Broom.move('left');
// // Broom.move('down');
// // Broom.move('up');
// // Broom.move('up');
// // console.log(Broom.showPosition()); // I am Speedbot 'Thunder'. I am located at -4:4.
// // Broom.move('up');
// // console.log(Broom.showPosition()); // I am Speedbot 'Thunder'. I am located at -4:6.
// // Broom.move('up');
// // console.log(Broom.showPosition()); // I am Speedbot 'Thunder'. I am located at -4:8.