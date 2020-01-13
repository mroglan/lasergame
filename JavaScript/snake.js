let canvas, ctx, w, h;
let snakeBlockHeight, snakeBlockWidth;
let headPos;
let snakeBodyArray = [];

function init() {
	canvas = document.querySelector("#canvas");
	ctx = canvas.getContext('2d');
	w = canvas.width;
	h = canvas.height;
	
	mainLoop();
}

class Snake {
	
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
}

function mainLoop() {
	
	ctx.clearRect(0, 0, w, h);
	
	snakeBlockWidth = 20;
	snakeBlockHeight = 20;
	
	canvas.addEventListener('mouseover', function(e) {
		headPos = getMousePos(e);
	});
	
	let snakeHead = new Snake(headPos.x, headPos.y, snakeBlockWidth, snakeBlockHeight);
}

function getMousePos(e) {
	
	let rect = canvas.getBoundingClientRect();
	return {
		x: e.clientX - rect.left,
		y: e.clientY - rect.top
	};
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	