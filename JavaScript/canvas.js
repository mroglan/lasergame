window.onload = init;

let canvas, ctx, w, h;
let xMonster = 10;
let yMonster = 10;
let xSpeed = 1;

function init() {
	
	canvas = document.querySelector("#canvas");
	
	w = canvas.width;
	h= canvas.height;
	
	ctx = canvas.getContext('2d');
	
	mainLoop();
}

function mainLoop() {
	ctx.clearRect(0, 0, w, h);
	
	drawMyMonster(xMonster, yMonster);
	
	xMonster += xSpeed;
	
	if((xMonster + 100 > w) || (xMonster < 0)) {
		xSpeed = -xSpeed;
	}
	
	requestAnimationFrame(mainLoop);
}
	

function drawMyMonster(x, y){
	ctx.save();
	
	ctx.translate(x,y);
	
	ctx.strokeRect(0, 0, 100, 100);
	
	ctx.fillRect(20, 20, 10, 10);
	ctx.fillRect(65, 20, 10, 10);
	
	ctx.strokeRect(45, 40, 10, 40);
	
	ctx.strokeRect(35, 84, 30, 10);
	
	ctx.fillRect(38, 84, 10, 10);
	ctx.fillRect(52, 84, 10, 10);
	
	ctx.restore();
}
	
	