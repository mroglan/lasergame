let canvas, ctx, w, h;
let activity = {};
let xDirection = 0;
let yDirection = 0;
let factorX = 500;
let factorY = 500;
let gamepad;
let useGamepad = true;
let oldTime = 0;
let delta;

function init() {
	console.log("hello");
	
	canvas = document.querySelector("#canvas");
	ctx = canvas.getContext('2d');
	w = canvas.width;
	h = canvas.height;
	
	addEventListener('keydown',  processKeyDown);
	addEventListener('keyup', processKeyUp);
	addEventListener('gamepadconnected', function(e) {
		gamepad = e.gamepad;
		let index = gamepad.index;
		let id = gamepad.id;
		let nbButtons = gamepad.buttons.length;
		let nbAxes = gamepad.axes.length;
		console.log("Gamepad No " + index + " is connected. It has " + nbButtons + " buttons and " + nbAxes + " axes.");
	});
	
	console.log(canvas.width);
	console.log(canvas.height);
	
	
	requestAnimationFrame(mainLoop);
}

function timer(currentTime) {
	let delta = currentTime - oldTime;
	oldTime = currentTime;
	return delta;
}

function calcDistanceToMove(delta, speed) {
	//console.log(speed * delta / 100);
	console.log(speed);
	return (speed * delta)/ 1000;
}

function mainLoop(time) {
	//console.log("mainLoop begun");
	
	delta = timer(time);
	//console.log(delta);
	factor2X = calcDistanceToMove(delta, factorX);
	factor2Y = calcDistanceToMove(delta, factorY);
	//console.log(delta + ", " + factorX + ", " + factorY);
	//console.log(factor2X + ", " + factor2Y);
		
	ctx.clearRect(0, 0, w, h);
	
	scangamepads();
	processMoves();
	
	createMonster();
	
	if(activity.left) {
		xDirection -= (factor2X);
		//console.log(factor2X);
	}
	if(activity.right) {
		xDirection += (factor2X);
	}
	if(activity.up) {
		yDirection -= (factor2Y);
	} 
	if(activity.down) {
		yDirection += (factor2Y);
	}
	
	requestAnimationFrame(mainLoop);
}

function createMonster() {
	ctx.save();
	ctx.translate(200, 200);

	ctx.fillStyle = 'red';

	ctx.fillRect(xDirection, yDirection, 100, 100);
	
	ctx.restore();
}

function processKeyDown(event) {
	
	useGamepad = false;
	
	
	if (event.keyCode === 37) {
        activity.left = true;
		//console.log("moving left");
		factorX = 500;
      } if (event.keyCode === 38) {
        activity.up = true;
		factorY = 500;
      } if (event.keyCode === 39) {
        activity.right = true;
		factorX = 500;
      } if (event.keyCode === 40) {
        activity.down = true;
		factorY = 500;
      } 
}

function processKeyUp(event) {
	
	useGamepad = true;
	
	if(event.keyCode === 37) {
		activity.left = false;
	} if(event.keyCode === 38) {
		activity.up = false;
	} if(event.keyCode === 39) {
		activity.right = false;
	} if(event.keyCode === 40) {
		activity.down = false;
	}
}

function processMoves() {
	
	if(useGamepad) {
	
		if(gamepad === undefined) 
		return;
		if(!gamepad.connected) 
		return;
	
	
		activity.right = activity.left = activity.down = activity.up = false;
	
		if(gamepad.axes[0] > 0) {
			activity.right = true;
			activity.left = false;
		}
		else {
			activity.right = false;
			activity.left = true;
		}
		if(gamepad.axes[1] > 0) {
			activity.down = true;
			activity.up = false;;
		}
		else {
			activity.down = false;
			activity.up = true;
		}
		if(gamepad.axes[0] < .1 && gamepad.axes[0] > -.1) {
			activity.right = false;
			activity.left = false;
		}
		if(gamepad.axes[1] < .1 && gamepad.axes[1] > -.1) {
			activity.up = false;
			activity.down = false;
		}
	
		factorX = 500 * Math.abs(gamepad.axes[0]);
		factorY = 500 * Math.abs(gamepad.axes[1]);
	}
}


function scangamepads() {
  var gamepads = navigator.getGamepads();
  
  for (var i = 0; i < gamepads.length; i++) {
    if(gamepads[i])
        gamepad = gamepads[i]; 
  }
}
