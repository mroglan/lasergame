let canvas, ctx, w, h;
let moveUp = false;
let obstacleCreation;
let newObstacle;
let obstacleArray = [];
let willAnimate = true;
let numberOfJumps = 0;
let speed = 2;
let timing = 2000;
let sound = document.querySelector("#sound");

class Obstacle {
	
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	
	move() {
		ctx.save();
		
		this.x -= speed;
		
		ctx.fillStyle = 'green';
		ctx.fillRect(this.x, this.y, this.width, this.height);
		
		ctx.restore();

	}
	
	
	testCollision() {
		
		if((this.x == player.x + player.radius || this.x + this.width > player.x - player.radius) && this.x + this.width < player.x + player.radius) {
			if(this.y < player.y + player.radius) {
				if(this.y + this.height > player.y - player.radius) {
					willAnimate = false;
				}
			}
		}
	}
		
}

let player = {
	x: 200,
	y: 100,
	radius: 35,
	fallSpeed: 1.5,
	upSpeed: -80
}

function init() {
	
	if(ctx) {
		ctx.clearRect(0, 0, w, h);
	}
	
	canvas = document.querySelector("#canvas");
	ctx = canvas.getContext('2d');
	w = canvas.width;
	h = canvas.height;
	
	obstacleCreation = setInterval(createObstacle, timing);
	
	mainLoop();
}

function createPlayer(x, y, radius) {
	ctx.save();
	
	ctx.translate(x, y);
	
	let pattern1 = ctx.createRadialGradient(0, 0, radius/5, 0, 0, radius);
	pattern1.addColorStop(0, "red");
	pattern1.addColorStop(.5, "green");
	pattern1.addColorStop(1, "blue");
	
	ctx.fillStyle = pattern1;
	
	ctx.beginPath();
	ctx.arc(0, 0, radius, 0, 2 * Math.PI);
	ctx.fill();
	
	ctx.restore();
}

function mainLoop() {
	if(willAnimate) {
		ctx.clearRect(0, 0, w, h);
	
		createPlayer(player.x, player.y, player.radius);
	
		canvas.addEventListener('keyup', function(e) {
			if(e.keyCode == 32) {
				moveUp = true;
				sound.play();
			}
		});
	
		movePlayer();
	
		obstacleArray.forEach(function(obj) {
			obj.move();
			obj.testCollision();
		});
	
		requestAnimationFrame(mainLoop);
	}
	
	else {
		ctx.save();
		ctx.clearRect(0,0,w,h);
		ctx.font = "100px Arial";
		ctx.textAlign = 'center';
		ctx.fillText("GAME OVER", w/2, h/2);
		ctx.font = "50px Arial";
		ctx.fillText("Number of Jumps: " + numberOfJumps, w/2, h/2 + 100);
		ctx.restore();
	}
}

function movePlayer() {
	
	if(moveUp) {
		player.y += player.upSpeed;
		numberOfJumps++;
	}
	else {
		player.y += player.fallSpeed;
	}
	moveUp = false;
	
	testCollisionWithWalls();
}

function createObstacle() {
	
	let y = Math.round(Math.random()*400);
	let height = Math.round(Math.random()*100)
	let width = Math.round(Math.random()*100);
	
	if(obstacleArray.length % 5 == 0) {
		speed += 2;
		timing = 2000 * (2/speed);
		player.fallSpeed += .5;
		console.log(player.fallSpeed);
	}
	
	newObstacle = new Obstacle(1000, y, width, height);
	obstacleArray.push(newObstacle);
}

function testCollisionWithWalls() {
	
	if(player.y - player.radius <= 0)
		willAnimate = false;
	if(player.y + player.radius >= h)
		willAnimate = false;
}
