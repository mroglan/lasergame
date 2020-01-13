let canvas, ctx, w, h;

let ball1 = {
  x: 100,
  y:100,
  radius: 30,
  color:'blue',
  speedX:2,
  speedY:1
}

let ball2 = {
  x: 60,
  y:130,
  radius: 55, 
  color:'purple',
  speedX:3,
  speedY:1
}

let ball3 = {
  x: 200,
  y:250,
  radius: 15,
  color:'green',
  speedX:3,
  speedY:5
}

let player = {
  x:10,
  y:10,
  width:20,
  height:20,
  color:'red'
}

window.onload = init;

function init() {
	canvas = document.querySelector('#canvas');
	
	w = canvas.width;
	h = canvas.height;
	
	ctx = canvas.getContext('2d');
	
	mainLoop();
}

function mainLoop() {
	
	ctx.clearRect(0, 0, w, h);
	
	createPlayer(player);
	createBall(ball1);
	createBall(ball2);
	createBall(ball3);
	
	moveBall(ball1);
	moveBall(ball2);
	moveBall(ball3);
	
	requestAnimationFrame(mainLoop);
}

function createPlayer(p) {
	ctx.save();
	
	ctx.translate(p.x, p.y);
	
	ctx.fillStyle = p.color;
	
	ctx.fillRect(0, 0, p.width, p.height);
	
	ctx.restore();
}

function createBall(b) {
	ctx.save();
	
	ctx.translate(b.x, b.y);
	
	ctx.fillStyle = b.color;
	
	ctx.beginPath();
	ctx.arc(0, 0, b.radius, 0, 2*Math.PI)
	ctx.fill();
	
	ctx.restore();
}

function moveBall(b) {
	b.x += b.speedX;
	b.y += b.speedY;
	
	onCollision(b);
}

function onCollision(b) {
	if(b.x + b.radius > w) {
		b.speedX = -b.speedX;
		
		b.x = w - b.radius;
	}
	
	if(b.x - b.radius < 0) {
		b.speedX = -b.speedX
		
		b.x = b.radius;
	}
	
	if(b.y + b.radius > h) {
		b.speedY = -b.speedY;
		
		b.y = h - b.radius;
	}
	
	if(b.y - b.radius < 0) {
		b.speedY = -b.speedY;
		
		b.y = b.radius;
	}
}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	