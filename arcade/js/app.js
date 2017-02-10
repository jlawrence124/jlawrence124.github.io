//initiates the scoring system for the game
var score = 0;


// Enemies our player must avoid
var Enemy = function(beerX, beerY, beerSpeed) {

    //position and speed of the enemy objects
    this.x = beerX;
    this.y = beerY;
    this.speed = beerSpeed;

    //height and width of the enemy (beer) object
    this.height = 100;
    this.width = 50;

    this.sprite = 'images/beer.png';

};

Enemy.prototype.checkCollisions = function() {

    if (this.x < player.x + 47 &&
        this.x + this.width > player.x &&
        this.y < player.y + 130 &&
        this.height + this.y > player.y) {
    // collision detected
    // aka you lose
    player.x = 230;
    player.y = 400;
    console.log("Sorry, you lose.")
    console.log(this);
    }
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Multiplies movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 500) {
        this.x += this.speed * dt;
       } else {
       this.x = -180;
       //randomizes the speed of the beer to keep the game FRESH
       //get it, FRESH!?!
       //sorry.
       this.speed = Math.random() * (600 - 150) + 150;
   };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//this randomizes the speed of each of the initial new Enemy objects
getRandom = function() {
    return Math.random() * (600 - 150) + 150;
};


//defines the player class and it's starting position
var player = function(playerX, playerY){
    this.x = 230;
    this.y = 400;
    this.sprite = 'images/keyboard.png'
};

player.prototype.update = function(dt) {

};

//renders the player on the screen
player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

player.prototype.handleInput = function(inp) {
    //keeps the player from going off the left side of the canvas
    if (inp === "left" && this.x > 30) {
        this.x -= 100;
    }
    //keeps the player from going off the right side of the canvas
    if (inp === "right" && this.x < 400) {
        this.x += 100;
    }
    if (inp === 'up' && this.y > 80) {
        this.y -= 80;
    } else if (inp === 'up' && this.y <= 80) {
        //if you win
        this.y = 400;
        this.x = 230;
        console.log("YOU SCORED!");
        score += 1;
    }
    if (inp === 'down' && this.y < 380) {
        this.y += 80;
    }
    //logs the current position of the player
    console.log(player);
};



//create new instances of enemy class
var allEnemies = [new Enemy(-180, 270, getRandom()), new Enemy(-180, 190, getRandom()), new Enemy(-180, 110, getRandom())];

//create an instance of the player class
var player = new player(200,400);

console.log(allEnemies);
console.log(player);

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
