let canvas, ctx, w, h;

let box = {
	x: 10,
	y: 10,
	width: 20,
	height: 20,
	color: 'red'
}

let ball = {
	x: 100,
	y: 100,
	radius: 15,
	color: 'green',
	speedX: 20,
	speedY: 10
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
	
	createBox(box);
	createBall(ball);
	
	moveBall(ball);
	
	requestAnimationFrame(mainLoop);
}

function createBox(b) {
	ctx.save();
	
	ctx.translate(b.x, b.y);
	
	ctx.fillStyle = b.color;
	ctx.fillRect(0, 0, b.width, b.height);
	
	ctx.restore();
}

function createBall(b) {
	ctx.save();
	
	ctx.translate(b.x, b.y);
	
	ctx.fillStyle = b.color;
	ctx.beginPath();
	ctx.arc(0, 0, b.radius, 0, 2 * Math.PI);
	ctx.fill();
	
	ctx.restore();
}

function moveBall(b) {
	b.x += b.speedX;
	b.y += b.speedY;
	
	testCollision(b);
}

function testCollision(b) {
	
	if((b.x + b.radius > w) || (b.x - b.radius < 0)) {
		b.speedX = -b.speedX;
	}
	if((b.y + b.radius > h) || (b.y - b.radius < 0)) {
		b.speedY = -b.speedY;
	}
}

	
	
	