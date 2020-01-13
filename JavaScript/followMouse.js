let canvas, ctx, w, h;
let mousePos = {x: 0, y: 0};
let monster = {
	x: 200,
	y: 200,
	width: 100,
	height: 100,
	v: 1
}

window.onload = function() {
	
	canvas = document.querySelector("#canvas");
	ctx = canvas.getContext('2d');
	w = canvas.width;
	h = canvas.height;
	
	canvas.addEventListener('mousemove', function(evt) {
		mousePos = getMousePos(evt);
		console.log(mousePos.x + ", " + mousePos.y);
	}, false);
	
	mainLoop();
}

function getMousePos(evt) {
	
	let rect = canvas.getBoundingClientRect();
	
	return {
		x: evt.clientX - rect.left, 
		y: evt.clientY - rect.top
	};
}

function mainLoop() {
	
	
	ctx.clearRect(0, 0, w, h);
	
	let dx = monster.x - mousePos.x;
    let dy = monster.y - mousePos.y;
    let angle = Math.atan2(dy, dx);
	
	monster.x -= monster.v*Math.cos(angle);
    monster.y -= monster.v*Math.sin(angle);
	
	drawRect(angle);
	
	requestAnimationFrame(mainLoop);
}

function drawRect(angle) {
	ctx.save();
	
	ctx.translate(monster.x, monster.y);
	ctx.rotate(angle);
	
	ctx.translate(-monster.width/2, -monster.height/2);
	ctx.fillRect(0, 0, monster.width, monster.height);
	
	ctx.restore();
}
