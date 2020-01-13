let sound1, sound2, sound3, sound4, sound5, sound6, sound8;
let animation, animation2;
let canvas, ctx, w, h;
let gamepad;
let mainMenu = true;
let redBalloon, blueBalloon, greenBalloon, tiFighter, bomber, iShip, turret, deathStar, deathStar2;
let contactMade;
let testLaser;
let laserArray = [];
let laserIn;
let delta;
let oldTime = 0;
let incrementer = 0;
let menuImageArray = [];
let menuLasers;
let waveNum;
let imageObj2, imageObj3, imageObj4, imageObj5, imageObj6, imageObj7;
let player;
let playerInfo;
let loopArray = [];
let moveUp = true;
let moveDown = true;
let displayWaveTitle = true;
let playerLaserArray = [];
let enemyLaserArray = [];
let t = 0;
let t2 = 0;
let laserFired = 0;
let killCount = 0;
let killCount2 = 0;
let killCount3 = 0;
let enemyArray = [];
let eCount = 0;
let playerHealth = 50;
let interval1, interval2, interval3;
let newTime = 0;
let continueSpawn = true;
let animation3;
let freeze = false;
let activateShield = false;
let newTime2 = 0;
let newTime3 = 0;
let turretLaserArray = [];
let turret1;
let moveTurretUp = true;
let moveTurretDown = true;

class Turret {
	constructor(y) {
		this.y = y;
		this.x = 0;
		this.speed = 500;
	}
	
	drawTurret() {
		ctx.save();
		ctx.drawImage(turret, 0, 0, 50, 43, this.x, this.y, 50, 43);
		ctx.restore();
	}
	
	fireLaser() {
		let laser = new Laser({x: this.x + 50, y: this.y + 10}, 0, this.speed, 'red');
		turretLaserArray.push(laser);
	}
}

class Enemy { 

	constructor(type, speed, y, health) {
		this.type = type;
		this.speed = speed;
		this.y = y;
		this.x = w;
		this.health = health;
		this.shots = 0;
	}
	
	drawEnemy() {
		ctx.save();
		if(this.type === 'easy') {
			ctx.drawImage(redBalloon, 0, 0, 55, 80, this.x, this.y, 55, 80);
			ctx.translate(this.x, this.y);
			ctx.drawImage(imageObj4, 0, 0, 240, 210, 17.5, 30, 20, 20);
			ctx.textAlign = 'center';
			ctx.fillStyle = 'white';
			ctx.font = '20px Arial';
			ctx.fillText(this.health, 27.5, 50);
		}
		else if(this.type === 'medium') {
			ctx.drawImage(blueBalloon, 0, 0, 60, 80, this.x, this.y, 60, 80);
			ctx.translate(this.x, this.y);
			ctx.drawImage(imageObj4, 0, 0, 240, 210, 20, 30, 20, 20);
			ctx.textAlign = 'center';
			ctx.fillStyle = 'white';
			ctx.font = '20px Arial';
			ctx.fillText(this.health, 30, 50);
		}
		else if(this.type === 'moderate') {
			ctx.drawImage(greenBalloon, 0, 0, 80, 80, this.x, this.y, 80, 80);
			ctx.translate(this.x, this.y);
			ctx.drawImage(imageObj4, 0, 0, 240, 210, 30, 30, 20, 20);
			ctx.textAlign = 'center';
			ctx.fillStyle = 'white';
			ctx.font = '20px Arial';
			ctx.fillText(this.health, 40, 50);
		}
		else if(this.type === 'fighter1') {
			ctx.drawImage(tiFighter, 0, 0, 80, 80, this.x, this.y, 80, 80);
			ctx.translate(this.x, this.y);
			ctx.drawImage(imageObj4, 0, 0, 240, 210, 30, 30, 20, 20);
			ctx.textAlign = 'center';
			ctx.fillStyle = 'white';
			ctx.font = '20px Arial';
			ctx.fillText(this.health, 40, 50);
			
			if(this.x < w - 100 && this.shots < 1) {
				let laser = new Laser({x: this.x - 10, y: this.y + 30}, 0, -500, 'green');
				enemyLaserArray.push(laser);
				this.shots++;
			}
		}
		else if(this.type === 'bomber1') {
			ctx.drawImage(bomber, 0, 0, 80, 80, this.x, this.y, 80, 80);
			ctx.translate(this.x, this.y);
			ctx.drawImage(imageObj4, 0, 0, 240, 210, 30, 30, 20, 20);
			ctx.textAlign = 'center';
			ctx.fillStyle = 'white';
			ctx.font = '20px Arial';
			ctx.fillText(this.health, 40, 50);
			
			if(this.x < w - 100 && this.shots === 0) {
				let laser = new Laser({x: this.x - 10, y: this.y + 30}, 0, -700, 'green');
				enemyLaserArray.push(laser);
				this.shots++;
			}
			else if(this.x < w - 200 && this.shots === 1) {
				let laser = new Laser({x: this.x - 10, y: this.y + 30}, 0, -700, 'green');
				enemyLaserArray.push(laser);
				this.shots++;
			}
		}
		else if(this.type === 'fighter2') {
			ctx.drawImage(iShip, 0, 0, 248, 160, this.x, this.y, 248, 160);
			ctx.translate(this.x, this.y);
			ctx.drawImage(imageObj4, 0, 0, 240, 210, 114, 70, 20, 20);
			ctx.textAlign = 'center';
			ctx.fillStyle = 'white';
			ctx.font = '20px Arial';
			ctx.fillText(this.health, 128, 90);
		}
		else if(this.type === 'dStar') {
			ctx.drawImage(deathStar, 0, 0, 240, 240, this.x, this.y, 240, 240);
			ctx.translate(this.x, this.y);
			ctx.drawImage(imageObj4, 0, 0, 240, 210, 110, 110, 20, 20);
			ctx.textAlign = 'center';
			ctx.fillStyle = 'white';
			ctx.font = '20px Arial';
			ctx.fillText(this.health, 120, 130);
			
			if(this.x < w - 100 && this.x > w - 200) {
				let laser = new Laser({x: this.x - 73, y: this.y + 65}, 0, -700, 'green');
				enemyLaserArray.push(laser);
			}
		}
		else if(this.type === 'dStar2') {
			ctx.drawImage(deathStar2, 0, 0, 320, 320, this.x, this.y, 320, 320);
			ctx.translate(this.x, this.y);
			ctx.drawImage(imageObj4, 0, 0, 240, 210, 150, 150, 20, 20);
			ctx.textAlign = 'center';
			ctx.fillStyle = 'white';
			ctx.font = '20px Arial';
			ctx.fillText(this.health, 160, 170);
			
			if(this.x < w - 100 && this.x > w - 150 && this.shots < 1) {
				let enemy = new Enemy('fighter1', 100, this.y, 1);
				enemyArray.push(enemy);
				let enemy2 = new Enemy('fighter1', 100, this.y + 80, 1);
				enemyArray.push(enemy2);
				let enemy3 = new Enemy('fighter1', 100, this.y + 160, 1);
				enemyArray.push(enemy3);
				let enemy4 = new Enemy('fighter1', 100, this.y + 240, 1);
				enemyArray.push(enemy4);
				this.shots++;
			}
			else if(this.x < w - 200 && this.x > w - 250 && this.shots < 2) {
				let enemy = new Enemy('fighter1', 100, this.y, 1);
				enemyArray.push(enemy);
				let enemy2 = new Enemy('fighter1', 100, this.y + 80, 1);
				enemyArray.push(enemy2);
				let enemy3 = new Enemy('fighter1', 100, this.y + 160, 1);
				enemyArray.push(enemy3);
				let enemy4 = new Enemy('fighter1', 100, this.y + 240, 1);
				enemyArray.push(enemy4);
				this.shots++;
			}
			else if(this.x < w - 300 && this.x > w - 350 && this.shots < 3) {
				let enemy = new Enemy('fighter1', 100, this.y, 1);
				enemyArray.push(enemy);
				let enemy2 = new Enemy('fighter1', 100, this.y + 80, 1);
				enemyArray.push(enemy2);
				let enemy3 = new Enemy('fighter1', 100, this.y + 160, 1);
				enemyArray.push(enemy3);
				let enemy4 = new Enemy('fighter1', 100, this.y + 240, 1);
				enemyArray.push(enemy4);
				this.shots++;
			}
		}
		
		ctx.restore();
	}
	
	deathSpawn() {
		if(this.type === 'fighter2') {
			let enemy = new Enemy('fighter1', 100, this.y, 1);
			enemyArray.push(enemy);
			enemy.x = this.x + 50;
			let enemy2 = new Enemy('fighter1', 100, this.y + 80, 1);
			enemyArray.push(enemy2);
			enemy2.x = this.x + 50;
			//console.log("big boy ti's coming");
		}
		else if(this.type === 'dStar') {
			let enemy = new Enemy('fighter2', 75, this.y, 5);
			enemyArray.push(enemy);
			enemy.x = this.x + 50;
			let enemy2 = new Enemy('fighter1', 100, this.y + 160, 1);
			enemyArray.push(enemy2);
			enemy2.x = this.x + 50;
		}
		else if(this.type === 'dStar2') {
			sound8.play();
			for(let i = 0; i < enemyArray.length; i++) {
				let enemy = enemyArray[i];
				
				if(enemy.x > this.x - 300 && enemy.x < this.x + 620) {
					enemyArray.splice(i, 1);
				}
			}
		}
	}
	
	testForExit(index) {
		if(this.x < 0) {
			enemyArray.splice(index, 1);
			sound4.play();
			playerHealth -= this.health;
		}
	}
}

class Laser {
	
	constructor(origin, angle, speed, style) {
		this.angle = angle;
		this.origin = origin;
		this.speed = speed;
		this.style = style;
	}
	
	createLaser() {
		
		let laserRadius = 10;
		let laserWidth = 60;
		let laserHeight = 20;
		
		ctx.save();
		ctx.translate(this.origin.x, this.origin.y);
		ctx.rotate(this.angle);
		
		ctx.beginPath();
		
		ctx.moveTo(laserRadius, 0);
		ctx.arcTo(laserWidth, 0, laserWidth, laserRadius, laserRadius);
		ctx.arcTo(laserWidth, laserHeight, laserWidth - laserRadius, laserHeight, laserRadius);
		ctx.arcTo(0, laserHeight, 0, laserHeight - laserRadius, laserRadius);
		ctx.arcTo(0, 0, laserRadius, 0, laserRadius);
		
		ctx.strokeStyle = this.style;
		ctx.fillStyle = this.style;
		ctx.fill();
		
		ctx.closePath();
		ctx.restore();
		
		
	}
	
	testForExit() {
		
		if(this.origin.x + 60 < 0) {
			laserArray.splice(0, 1);
			//console.log("exit!");
		}
		if(this.origin.x > 1365) {
			laserArray.splice(0, 1);
			//console.log("exit!");
		}
	}
	
	testForPlayerLaserExit() {
		if(this.origin.x + 60 < 0) {
			playerLaserArray.splice(0, 1);
			//console.log("exit!");
		}
		if(this.origin.x > 1365) {
			playerLaserArray.splice(0, 1);
			//console.log("exit!");
		}
	}
	
	testForCollision() {
		ctx.save();
		
		for(let i = 0; i < enemyArray.length; i++) {
			let enemy = enemyArray[i];
			
			if(enemy.type === 'easy' || enemy.type === 'moderate' || enemy.type === 'medium' || enemy.type === 'fighter1' || enemy.type === 'bomber1') {
			if(this.origin.x + 50 >= enemy.x) {
				if(this.origin.y >= enemy.y - 15 && this.origin.y + 20 <= enemy.y + 80 + 15) {
					console.log('collision made');
					contactMade = true;
					enemy.health--;
					if(enemy.health === 0) {
						enemyArray.splice(i, 1);
					}
					killCount++;
					killCount2++;
					killCount3++;
				}
			}
			}
			else if(enemy.type === 'fighter2') {
				if(this.origin.x + 50 >= enemy.x) {
				if(this.origin.y >= enemy.y - 15 && this.origin.y + 20 <= enemy.y + 160 + 15) {
					console.log('collision made');
					contactMade = true;
					enemy.health--;
					if(enemy.health === 0) {
						enemy.deathSpawn();
						enemyArray.splice(i, 1);
						//console.log("big boy killed");
					}
					killCount++;
					killCount2++;
					killCount3++;
				}
				}
			}
			else if(enemy.type === 'dStar') {
				if(this.origin.x + 50 >= enemy.x) {
				if(this.origin.y >= enemy.y - 15 && this.origin.y + 20 <= enemy.y + 240 + 15) {
					console.log('collision made');
					contactMade = true;
					enemy.health--;
					if(enemy.health === 0) {
						enemy.deathSpawn();
						enemyArray.splice(i, 1);
						//console.log("big boy killed");
					}
					killCount++;
					killCount2++;
					killCount3++;
				}
				}
			}
			else if(enemy.type === 'dStar2') {
				if(this.origin.x + 50 >= enemy.x) {
				if(this.origin.y >= enemy.y - 15 && this.origin.y + 20 <= enemy.y + 320 + 15) {
					console.log('collision made');
					contactMade = true;
					enemy.health--;
					if(enemy.health === 0) {
						enemy.deathSpawn();
						enemyArray.splice(i, 1);
						//console.log("big boy killed");
					}
					killCount++;
					killCount2++;
					killCount3++;
				}
				}
			}
		}
		ctx.restore();
	}
	
	testForEnemyLaserExit(index) {
		if(this.origin.x < 0) {
			enemyLaserArray.splice(index, 1);
			//console.log("exit!");
		}
	}
	
	testForPlayerCollision(index) {
		if(this.origin.x < 225 && this.origin.y > playerInfo.y && this.origin.y + 20 < playerInfo.y + playerInfo.height) {
			enemyLaserArray.splice(index, 1);
			playerHealth--;
			sound4.play();
		}
	}
	
	testForTurretLaserExit(index) {
		if(this.origin.x > 1365) {
			turretLaserArray.splice(index, 1);
		}
	}
	
	testForTEnemyCollision(index) {
		ctx.save();
		
		for(let i = 0; i < enemyArray.length; i++) {
			let enemy = enemyArray[i];
			
			if(enemy.type === 'easy' || enemy.type === 'moderate' || enemy.type === 'medium' || enemy.type === 'fighter1' || enemy.type === 'bomber1') {
			if(this.origin.x + 50 >= enemy.x) {
				if(this.origin.y >= enemy.y - 15 && this.origin.y + 20 <= enemy.y + 80 + 15) {
					console.log('collision made');
					enemy.health--;
					if(enemy.health === 0) {
						enemyArray.splice(i, 1);
					}
					turretLaserArray.splice(index, 1);
				}
			}
			}
			else if(enemy.type === 'fighter2') {
				if(this.origin.x + 50 >= enemy.x) {
				if(this.origin.y >= enemy.y - 15 && this.origin.y + 20 <= enemy.y + 160 + 15) {
					enemy.health--;
					if(enemy.health === 0) {
						enemy.deathSpawn();
						enemyArray.splice(i, 1);
						//console.log("big boy killed");
					}
					turretLaserArray.splice(index, 1);
				}
				}
			}
			else if(enemy.type === 'dStar') {
				if(this.origin.x + 50 >= enemy.x) {
				if(this.origin.y >= enemy.y - 15 && this.origin.y + 20 <= enemy.y + 240 + 15) {
					enemy.health--;
					if(enemy.health === 0) {
						enemy.deathSpawn();
						enemyArray.splice(i, 1);
						//console.log("big boy killed");
					}
					turretLaserArray.splice(index, 1);
				}
				}
			}
			else if(enemy.type === 'dStar2') {
				if(this.origin.x + 50 >= enemy.x) {
				if(this.origin.y >= enemy.y - 15 && this.origin.y + 20 <= enemy.y + 320 + 15) {
					enemy.health--;
					if(enemy.health === 0) {
						enemy.deathSpawn();
						enemyArray.splice(i, 1);
						//console.log("big boy killed");
					}
					turretLaserArray.splice(index, 1);
				}
				}
			}
		}
		ctx.restore();
	}
}

class Shield {
	
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	drawShield() {
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(this.x + playerInfo.width + 50, this.y - playerInfo.height/3);
		ctx.quadraticCurveTo(330, this.y + playerInfo.height/2, this.x + playerInfo.width + 50, this.y + (4 * playerInfo.height/3));
		
		ctx.lineWidth = 10;
		ctx.strokeStyle = 'yellow';
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	}
	
	testCollision() {
		for(let i = 0; i < enemyLaserArray.length; i++) {
			let enemy = enemyLaserArray[i];
			if(enemy.origin.x <= 350 && enemy.origin.y > this.y - playerInfo.height/3 && enemy.origin.y < this.y + (4 * playerInfo.height/3)) {
				console.log("deleted");
				enemyLaserArray.splice(i, 1);
				sound6.play();
			}
		}
	}
}


window.onload = function() {
	
	canvas = document.querySelector("#canvas");
	ctx = canvas.getContext('2d');
	w = canvas.width;
	h = canvas.height;
	sound1 = document.querySelector("#audio1");
	sound2 = document.querySelector("#audio2");
	sound3 = document.querySelector("#audio3");
	sound4 = document.querySelector("#audio4");
	sound5 = document.querySelector("#audio5");
	sound6 = document.querySelector("#audio6");
	sound8 = document.querySelector("#audio8");
	
	turret1 = new Turret(245);
	
	addEventListener('gamepadconnected', function(e) {
		gamepad = e.gamepad;
		let index = gamepad.index;
		let id = gamepad.id;
		let nbButtons = gamepad.buttons.length;
		let nbAxes = gamepad.axes.length;
		console.log("Gamepad No " + index + " is connected. It has " + nbButtons + " buttons and " + nbAxes + " axes.");
	});
	addEventListener('gamepaddisconnected', function(e) {
		gamepad = undefined;
	});
	
	displayImage("media/xboxRT.png", 70, 70, w/4 + 10, 370); 
	displayImage("media/xboxLJ.png", 70, 70, w/4 + 10, 450);
	displayImage("media/xboxLT.png", 70, 70, 710, 370);
	displayImage("media/xboxMENU.png", 70, 70, 710, 450);
	
	redBalloon = new Image();
	redBalloon.src = 'media/vpdroid.png';
	
	blueBalloon = new Image();
	blueBalloon.src = 'media/stormTrooper.png';
	
	greenBalloon = new Image();
	greenBalloon.src = 'media/redTrooper.png';
	
	tiFighter = new Image();
	tiFighter.src = 'media/fighter.png';
	
	bomber = new Image();
	bomber.src = 'media/bomber.png';
	
	iShip = new Image();
	iShip.src = 'media/iShip.png';
	
	turret = new Image();
	turret.src = 'media/turret.png';
	
	deathStar = new Image();
	deathStar.src = 'media/deathStar.png';
	
	deathStar2 = new Image();
	deathStar2.src = 'media/DeathStar2.png';
	
	imageObj2 = new Image();
	imageObj2.src = 'media/xboxRT.png';
	
	imageObj3 = new Image();
	imageObj3.src = 'media/xboxLT.png';
	
	imageObj4 = new Image();
	imageObj4.src = 'media/heart.png';
	
	imageObj5 = new Image();
	imageObj5.src = 'media/xboxX.png';
	
	imageObj6 = new Image();
	imageObj6.src = 'media/xboxB.png';
	
	imageObj7 = new Image();
	imageObj7.src = 'media/xboxNav.png';
	
	requestAnimationFrame(loadMainMenu);
	loadMenuLasers();
	
	
	//////Not part of game only to help create Game...////
	let mousePos;
	
	addEventListener('mousemove', function(e) {
		mousePos = getMousePos(e);
		console.log(mousePos.x + ", " + mousePos.y);
	});
	
	function getMousePos(e) {
		
		
		return {
			x: e.clientX,
			y: e.clientY
		}
	}
	///////
};

function loadMenuLasers() {
	if(mainMenu) {
		menuLasers = setInterval(addMenuLaser, 500);
	}
}

function loadMainMenu(currentTime) {
	if(mainMenu) {
		
		delta = currentTime - oldTime;
		scanGamepads();
		
		ctx.save();
	
		ctx.clearRect(0, 0, w, h);
	
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, w, h);
	
		
		laserArray.forEach( function(laser) {
			//console.log(laserArray.length);
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForExit();
		});

		//ctx.lineWidth = 0;
		//ctx.strokeRect(w/3, 0, 2 * w/3, h);
		ctx.textAlign = 'center';
		ctx.font = '100px Impact';
		ctx.fillStyle = 'red';
		ctx.strokeStyle = 'yellow';
		
		ctx.fillText('Space Destoryer', w/2, h/4);
		ctx.strokeText('Space Destoryer', w/2, h/4);
		
		if(!gamepad) {
			ctx.save();
			ctx.font = '30px Verdana';
			ctx.fillStyle = 'white';
			ctx.strokeStyle = 'white';
		
			ctx.fillText('This game requires the connection of a controller to play.', w/2, h/2);
			//ctx.strokeText('This game requires the connection of a controller to play.', w/2, h/2);
			ctx.fillText('If you do not have one, please buy one.', w/2, h/2 + 40);
			//ctx.strokeText('If you do not have one, please buy one.', w/2, h/2 + 40);
			ctx.restore();
		}
		else if(gamepad) {
			ctx.save();
			ctx.font = '60px Verdana';
			ctx.fillStyle = 'green';
			
			ctx.fillText('Connection Success!', w/2, h/2 - 30);
			
			ctx.font = '50px Verdona';
			ctx.fillText('Press Y to Start', w/2, h/2 + 20);
			
			scanGamepads();
			displayRules();
		
			for(let i = 0; i < gamepad.buttons.length; i++) {
				let button = gamepad.buttons[i];
				if(button.pressed) {
					console.log(button.value);
					if(i === 3) {
						beginWave1();
					}
				}
			}
			
			ctx.restore();
		}
		
		ctx.restore();
		
		oldTime = currentTime;

		animation = requestAnimationFrame(loadMainMenu);
	}
}

function scanGamepads() {
	gamepads = navigator.getGamepads();
	
	for(let i = 0; i < gamepads.length; i++) {
		if(gamepads[i]) {
			gamepad = gamepads[i];
		}
	}
}

function calcDistanceToMove(delta, speed) {
	return speed * delta / 1000;
}

function displayRules() {
	ctx.save();
	
	ctx.lineJoin = 'round';
	ctx.lineWidth = 10;
	ctx.strokeStyle = '#287490';
	
	ctx.translate(w/4, 2 * h/3 - 50);
	let boxWidth = w/2;
	let boxHeight = h/4 + 50
	
	ctx.strokeRect(0, 0, boxWidth, boxHeight);
		
	ctx.restore();
	
	ctx.save();
	menuImageArray.forEach( function(image) {
		ctx.drawImage(image.imageObj, 0, 0, image.width, image.height, image.xCord, image.yCord, image.width, image.height);
		//console.log(image.xCord + ", " + image.yCord);
	});
	
	displayText("Shoot", w/4 + 90, 420);
	displayText("Move Up/Down", w/4 + 90, 500);
	displayText("Ability", 790, 420);
	displayText("Menu", 790, 500);

	ctx.restore();
}

function displayText(text, xCord, yCord) {
	ctx.save();
	
	ctx.textAlign = 'start';
	ctx.fillStyle = 'white';
	ctx.font = '30px Verdana';
	
	ctx.fillText(text, xCord, yCord);
	
	ctx.restore();
}

function displayImage(src, width, height, xCord, yCord) {
	//console.log("drawing Image");
	let imageObj = new Image();
	
	imageObj.src = src;
	//console.log(imageObj.src);
	imageObj.onload = function() {
		//console.log("image loaded");
		menuImageArray.push({imageObj,width, height, xCord, yCord});
		//console.log(xCord + ", " + yCord);
	};
}

function addMenuLaser() {
	let originX, originY, angle, speed;
	
	if(incrementer % 2 === 0) {
		originX = 0;
		speed = 500;
	}
	else {
		originX = 1350;
		speed = -500;
	}
	
	originY = Math.random() * 620;
	angle = 0;
	
	//console.log(originX + ", " + originY);
	
	let nextLaser = new Laser({x: originX, y: originY}, angle, speed, 'red');
	laserArray.push(nextLaser);
	
	incrementer++;
}

function beginWave1() {
	mainMenu = false;
	waveNum = 1;
	
	document.querySelector("#audio7").play();
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	let imageObj = new Image();
	imageObj.src = 'media/stars.png';
	
	imageObj.onload = function() {
		let pattern = ctx.createPattern(imageObj, 'repeat');
		ctx.fillStyle = pattern;
		
		ctx.fillRect(0, 0, w, h);
		
		saveImageToArray(imageObj, 1360, 1819, 0, 0);
		
		createPlayer();
	};
	
	clearInterval(menuLasers);
	cancelAnimationFrame(animation);
	
	spawnEnemies(1);
	
	ctx.restore();
}

function saveImageToArray(imageObj, width, height, x, y) {
	loopArray.push({imageObj, width, height, x, y});
	console.log(loopArray.length);
}

function createPlayer() {
	ctx.save();
	
	player = new Image();
	player.src = 'media/startrek.png';
	playerInfo = new Player('media/startrek.png', 50, 300, 200, 84);
	
	player.onload = function() {
		//console.log(playerInfo);
		//ctx.drawImage(player, 0, 0, playerInfo.width, playerInfo.height, playerInfo.x, playerInfo.y, playerInfo.width, playerInfo.height);
		playerInfo.displayPlayer(0);
		
		//saveImageToArray(player, playerInfo.width, playerInfo.height, playerInfo.x, playerInfo.y);
		
		oldTime = 0;
		laserFired = 0;
		
		if(waveNum === 1) {
			interval1 = setInterval(firePower, 1000);
			interval2 = setInterval(displayTitle, 1000);
			requestAnimationFrame(mainLoop1);
		}
	}
	
	ctx.restore();
}

function displayTitle() {
	if(displayWaveTitle) {
		displayWaveTitle = false;
	}
}

function firePower() {
	if(laserFired > 0) {
		laserFired--;
	}
}


class Player {
	
	constructor(src, x, y, width, height) {
		this.src = src;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	
	displayPlayer(speed) {
		this.y += speed;
		ctx.save();
		ctx.drawImage(player, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		ctx.restore();
	}
	
	checkForWallCollision() {
		if(this.y > 45 && this.y + this.height < 600) {
			moveUp = true;
			moveDown = true;
		}
		else if(this.y < 45) {
			moveUp = false;
			moveDown = true;
			//sound1.play();
		}
		else if(this.y + this.height > 600) {
			moveDown = false;
			moveUp = true;
			//sound1.play();
		}
		if(sound1.currentTime > .3) {
			sound1.currentTime = 0;
			sound1.pause();
		}
	}
	
}

function mainLoop1(currentTime) {
	if(waveNum === 1 && gamepad) {
	
		scanGamepads();
		delta = currentTime - oldTime;
		let incY = calcDistanceToMove(delta, 400);
	
		ctx.save();
		ctx.clearRect(0, 0, w, h);
	
		inputImages();
		ctx.drawImage(imageObj2, 0, 0, 70, 70, 320, 10, 40, 40);
		ctx.drawImage(imageObj3, 0, 0, 70, 70, 670, 10, 40, 40);
		ctx.drawImage(imageObj4, 0, 0, 240, 210, 250, 10, 40, 40);
		
		drawHealth();
	
		checkForPlayerMove(incY);
		
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let button = gamepad.buttons[i];
			if(button.pressed) {
				if(i === 7) {
					if(t > 15 && laserFired < 5) {
						let playerLaser = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
						playerLaserArray.push(playerLaser);
						sound2.play();
						t = 0;
						laserFired++;
					}
				}
				else if(i === 6 && killCount >= 5 && t > 15) {
					let playerLaserTop = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop);
					let playerLaserMid = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
					playerLaserArray.push(playerLaserMid);
					let playerLaserBottom = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom);
					sound3.play();
					killCount = 0;
					t = 0;
				}
			}
		}
		t++;
		
		if(sound2.currentTime > .1) {
			sound2.currentTime = 0;
			sound2.pause();
		}
		
		enemyArray.forEach( function(enemy1, index) {
			enemy1.drawEnemy();
			enemy1.x -= calcDistanceToMove(delta, enemy1.speed);
			enemy1.testForExit(index);
		});
		
		
		playerLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForPlayerLaserExit();
			laser.testForCollision();
			if(contactMade) {
				//console.log("disappear!");
				playerLaserArray.splice(index, 1);
			}
			contactMade = false;
		});
		
		createLaserBox();
		createAbilityCircle();
		
		
		if(displayWaveTitle) {
			displayWave('Wave 1');
		}
		
		if(enemyArray.length === 0 && eCount >= 10) {
			displayCompletedScreen(1);
		}
		if(playerHealth <= 0) {
			endScreen();
		}
	
		ctx.restore();
	
		oldTime = currentTime;
	}
	animation = requestAnimationFrame(mainLoop1);
}

function drawHealth() {
	ctx.save();
	
	ctx.fillStyle = 'black';
	ctx.font = '20px Arial';
	ctx.textAlign = 'center';
	
	ctx.fillText(playerHealth, 270, 35);
	
	ctx.restore();
}

function spawnEnemies(wave) {
	if(wave === 1 && waveNum === 1) {
		interval3 = setInterval(function() {
			if(eCount < 10 && waveNum ===1) {
			let randNum = Math.round(Math.random() * 5);
			let y;
			
			if(randNum === 0) y = 85;
			else if(randNum === 1) y = 165;
			else if(randNum === 2) y = 245;
			else if(randNum === 3) y = 325;
			else if(randNum === 4) y = 405;
			else if(randNum === 5) y = 485;
			
			/*else if(randNum === 6) y = 360;
			else if(randNum === 7) y = 410;
			else if(randNum === 8) y = 460;
			else if(randNum === 9) y = 510;*/
			
			if(waveNum === 1) {
				let enemy = new Enemy('easy', 100, y, 1);
				enemyArray.push(enemy);
			}
			eCount++;
			}
		}, 2000);
	}
	else if(wave === 2 && waveNum === 2) {
		interval3 = setInterval(function() {
			if(eCount < 30 && waveNum === 2) {
			let randNum = Math.round(Math.random() * 5);
			let y;
			
			if(randNum === 0) y = 85;
			else if(randNum === 1) y = 165;
			else if(randNum === 2) y = 245;
			else if(randNum === 3) y = 325;
			else if(randNum === 4) y = 405;
			else if(randNum === 5) y = 485;
			
			let randDif = Math.round(Math.random() * 2);
			
			if(randDif === 0) {
				let enemy = new Enemy('easy', 100, y, 1);
				enemyArray.push(enemy);
			}
			else if(randDif === 1) {
				let enemy = new Enemy('medium', 150, y, 2);
				enemyArray.push(enemy);
			}
			else if(randDif === 2) {
				let enemy = new Enemy('moderate', 200, y, 3);
				enemyArray.push(enemy);
			}
			eCount++;
			}
		}, 1500);
	}
	else if(wave === 3 && waveNum === 3) {
		interval3 = setInterval(function() {
			if(eCount < 30 && waveNum === 3) {
			
			let randQuantity = Math.round(Math.random() * 2);
					
			let take85 = false;
			let take165 = false;
			let take245 = false;
			let take325 = false;
			let take405 = false;
			let take485 = false;
				
			for(let i = 0; i <= randQuantity; i++) {
				let randNum = Math.round(Math.random() * 5);
				let randDif = Math.round(Math.random() * 2);
				let y = 0;
				
				if(randNum === 0 && !take85) {
					y = 85;
					take85 = true;
				}
				else if(randNum === 1 && !take165) {
					y = 165;
					take165 = true;
				}
				else if(randNum === 2 && !take245) {
					y = 245;
					take245 = true;
				}
				else if(randNum === 3 && !take325){ 
					y = 325;
					take325 = true;
				}
				else if(randNum === 4 && !take405){
					y = 405;
					take405 = true;
				}
				else if(randNum === 5 && !take485) {
					y = 485;
					take485 = true;
				}
				if(y !== 0) {
					if(randDif === 0) {
						let enemy = new Enemy('easy', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 1) {
						let enemy = new Enemy('medium', 150, y, 2);
						enemyArray.push(enemy);
					}
					else if(randDif === 2) {
						let enemy = new Enemy('moderate', 200, y, 3);
						enemyArray.push(enemy);
					}
				}
			}
			eCount++;
			}
		}, 1300);
	}
	else if(wave === 4 && waveNum === 4) {
		interval3 = setInterval(function() {
			if(eCount < 25 && waveNum === 4 && continueSpawn) {
			
			let randQuantity = Math.round(Math.random() * 1);
					
			let take85 = false;
			let take165 = false;
			let take245 = false;
			let take325 = false;
			let take405 = false;
			let take485 = false;
				
			for(let i = 0; i <= randQuantity; i++) {
				let randNum = Math.round(Math.random() * 5);
				let randDif = Math.round(Math.random() * 3);
				let y = 0;
				
				if(randNum === 0 && !take85) {
					y = 85;
					take85 = true;
				}
				else if(randNum === 1 && !take165) {
					y = 165;
					take165 = true;
				}
				else if(randNum === 2 && !take245) {
					y = 245;
					take245 = true;
				}
				else if(randNum === 3 && !take325){ 
					y = 325;
					take325 = true;
				}
				else if(randNum === 4 && !take405){
					y = 405;
					take405 = true;
				}
				else if(randNum === 5 && !take485) {
					y = 485;
					take485 = true;
				}
				if(y !== 0) {
					if(randDif === 0) {
						let enemy = new Enemy('easy', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 1) {
						let enemy = new Enemy('medium', 150, y, 2);
						enemyArray.push(enemy);
					}
					else if(randDif === 2) {
						let enemy = new Enemy('moderate', 200, y, 3);
						enemyArray.push(enemy);
					}
					else if(randDif === 3) {
						let enemy = new Enemy('fighter1', 100, y, 1);
						enemyArray.push(enemy);
					}
				}
			}
			eCount++;
			}
		}, 800);
	}
	else if(wave === 5 && waveNum === 5) {
		interval3 = setInterval(function() {
			if(eCount < 30 && waveNum === 5 && continueSpawn) {
			
			let randQuantity = Math.round(Math.random() * 1);
					
			let take85 = false;
			let take165 = false;
			let take245 = false;
			let take325 = false;
			let take405 = false;
			let take485 = false;
				
			for(let i = 0; i <= randQuantity; i++) {
				let randNum = Math.round(Math.random() * 5);
				let randDif = Math.round(Math.random() * 3);
				let y = 0;
				
				if(randNum === 0 && !take85) {
					y = 85;
					take85 = true;
				}
				else if(randNum === 1 && !take165) {
					y = 165;
					take165 = true;
				}
				else if(randNum === 2 && !take245) {
					y = 245;
					take245 = true;
				}
				else if(randNum === 3 && !take325){ 
					y = 325;
					take325 = true;
				}
				else if(randNum === 4 && !take405){
					y = 405;
					take405 = true;
				}
				else if(randNum === 5 && !take485) {
					y = 485;
					take485 = true;
				}
				if(y !== 0) {
					if(randDif === 0) {
						let enemy = new Enemy('easy', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 1) {
						let enemy = new Enemy('medium', 150, y, 2);
						enemyArray.push(enemy);
					}
					else if(randDif === 2) {
						let enemy = new Enemy('moderate', 200, y, 3);
						enemyArray.push(enemy);
					}
					else if(randDif === 3) {
						let enemy = new Enemy('fighter1', 100, y, 1);
						enemyArray.push(enemy);
					}
				}
			}
			eCount++;
			}
		}, 700);
	}
	else if(wave === 6 && waveNum === 6) {
		interval3 = setInterval(function() {
			if(eCount < 30 && waveNum === 6 && continueSpawn) {
			
			let randQuantity = Math.round(Math.random() * 2);
					
			let take85 = false;
			let take165 = false;
			let take245 = false;
			let take325 = false;
			let take405 = false;
			let take485 = false;
				
			for(let i = 0; i <= randQuantity; i++) {
				let randNum = Math.round(Math.random() * 5);
				let randDif = Math.round(Math.random() * 4);
				let y = 0;
				
				if(randNum === 0 && !take85) {
					y = 85;
					take85 = true;
				}
				else if(randNum === 1 && !take165) {
					y = 165;
					take165 = true;
				}
				else if(randNum === 2 && !take245) {
					y = 245;
					take245 = true;
				}
				else if(randNum === 3 && !take325){ 
					y = 325;
					take325 = true;
				}
				else if(randNum === 4 && !take405){
					y = 405;
					take405 = true;
				}
				else if(randNum === 5 && !take485) {
					y = 485;
					take485 = true;
				}
				if(y !== 0) {
					if(randDif === 0) {
						let enemy = new Enemy('easy', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 1) {
						let enemy = new Enemy('medium', 150, y, 2);
						enemyArray.push(enemy);
					}
					else if(randDif === 2) {
						let enemy = new Enemy('moderate', 200, y, 3);
						enemyArray.push(enemy);
					}
					else if(randDif === 3) {
						let enemy = new Enemy('fighter1', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 4) {
						let enemy = new Enemy('bomber1', 150, y, 2);
						enemyArray.push(enemy);
					}
				}
			}
			eCount++;
			}
		}, 700);
	}
	else if(wave === 7 && waveNum === 7) {
		interval3 = setInterval(function() {
			if(eCount < 30 && waveNum === 7 && continueSpawn) {
			
			let randQuantity = Math.round(Math.random() * 3);
					
			let take85 = false;
			let take165 = false;
			let take245 = false;
			let take325 = false;
			let take405 = false;
			let take485 = false;
				
			for(let i = 0; i <= randQuantity; i++) {
				let randNum = Math.round(Math.random() * 5);
				let randDif = Math.round(Math.random() * 4);
				let y = 0;
				
				if(randNum === 0 && !take85) {
					y = 85;
					take85 = true;
				}
				else if(randNum === 1 && !take165) {
					y = 165;
					take165 = true;
				}
				else if(randNum === 2 && !take245) {
					y = 245;
					take245 = true;
				}
				else if(randNum === 3 && !take325){ 
					y = 325;
					take325 = true;
				}
				else if(randNum === 4 && !take405){
					y = 405;
					take405 = true;
				}
				else if(randNum === 5 && !take485) {
					y = 485;
					take485 = true;
				}
				if(y !== 0) {
					if(randDif === 0) {
						let enemy = new Enemy('easy', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 1) {
						let enemy = new Enemy('medium', 150, y, 2);
						enemyArray.push(enemy);
					}
					else if(randDif === 2) {
						let enemy = new Enemy('moderate', 200, y, 3);
						enemyArray.push(enemy);
					}
					else if(randDif === 3) {
						let enemy = new Enemy('fighter1', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 4) {
						let enemy = new Enemy('bomber1', 150, y, 2);
						enemyArray.push(enemy);
					}
				}
			}
			eCount++;
			}
		}, 900);
	}
	else if(wave === 8 && waveNum === 8) {
		interval3 = setInterval(function() {
			if(eCount < 25 && waveNum === 8 && continueSpawn) {
			
			let randQuantity = Math.round(Math.random() * 2);
					
			let take85 = false;
			let take165 = false;
			let take245 = false;
			let take325 = false;
			let take405 = false;
			let take485 = false;
				
			for(let i = 0; i <= randQuantity; i++) {
				let randNum = Math.round(Math.random() * 5);
				let randDif = Math.round(Math.random() * 5);
				let y = 0;
				
				if(randDif === 5) {
					take485 = true;
				}
				
				if(randNum === 0 && !take85) {
					y = 85;
					take85 = true;
				}
				else if(randNum === 1 && !take165) {
					y = 165;
					take165 = true;
				}
				else if(randNum === 2 && !take245) {
					y = 245;
					take245 = true;
				}
				else if(randNum === 3 && !take325){ 
					y = 325;
					take325 = true;
				}
				else if(randNum === 4 && !take405){
					y = 405;
					take405 = true;
				}
				else if(randNum === 5 && !take485) {
					y = 485;
					take485 = true;
				}
				if(y !== 0) {
					if(randDif === 0) {
						let enemy = new Enemy('easy', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 1) {
						let enemy = new Enemy('medium', 150, y, 2);
						enemyArray.push(enemy);
					}
					else if(randDif === 2) {
						let enemy = new Enemy('moderate', 200, y, 3);
						enemyArray.push(enemy);
					}
					else if(randDif === 3) {
						let enemy = new Enemy('fighter1', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 4) {
						let enemy = new Enemy('bomber1', 150, y, 2);
						enemyArray.push(enemy);
					}
					else if(randDif === 5) {
						let enemy = new Enemy('fighter2', 75, y, 5);
						enemyArray.push(enemy);
						console.log("big boy spawned");
						break;
					}
				}
			}
			eCount++;
			}
		}, 1100);
	}
	else if(wave === 9) {
		interval3 = setInterval(function() {
			if(eCount < 30 && waveNum === 9 && continueSpawn) {
			
			let randQuantity = Math.round(Math.random() * 3);
					
			let take85 = false;
			let take165 = false;
			let take245 = false;
			let take325 = false;
			let take405 = false;
			let take485 = false;
				
			for(let i = 0; i <= randQuantity; i++) {
				let randNum = Math.round(Math.random() * 5);
				let randDif = Math.round(Math.random() * 5);
				let y = 0;
				
				if(randDif === 5) {
					take485 = true;
				}
				
				if(randNum === 0 && !take85) {
					y = 85;
					take85 = true;
				}
				else if(randNum === 1 && !take165) {
					y = 165;
					take165 = true;
				}
				else if(randNum === 2 && !take245) {
					y = 245;
					take245 = true;
				}
				else if(randNum === 3 && !take325){ 
					y = 325;
					take325 = true;
				}
				else if(randNum === 4 && !take405){
					y = 405;
					take405 = true;
				}
				else if(randNum === 5 && !take485) {
					y = 485;
					take485 = true;
				}
				if(y !== 0) {
					if(randDif === 0) {
						let enemy = new Enemy('easy', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 1) {
						let enemy = new Enemy('medium', 150, y, 2);
						enemyArray.push(enemy);
					}
					else if(randDif === 2) {
						let enemy = new Enemy('moderate', 200, y, 3);
						enemyArray.push(enemy);
					}
					else if(randDif === 3) {
						let enemy = new Enemy('fighter1', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 4) {
						let enemy = new Enemy('bomber1', 150, y, 2);
						enemyArray.push(enemy);
					}
					else if(randDif === 5) {
						let enemy = new Enemy('fighter2', 75, y, 5);
						enemyArray.push(enemy);
						console.log("big boy spawned");
						break;
					}
				}
			}
			eCount++;
			}
		}, 1100);
	}
	else if(wave === 10) {
		interval3 = setInterval(function() {
			if(eCount < 30 && waveNum === 10 && continueSpawn) {
			
			let randQuantity = Math.round(Math.random() * 4);
					
			let take85 = false;
			let take165 = false;
			let take245 = false;
			let take325 = false;
			let take405 = false;
			let take485 = false;
				
			for(let i = 0; i <= randQuantity; i++) {
				let randNum = Math.round(Math.random() * 5);
				let randDif;
				if(eCount % 2 === 0) randDif = Math.round(Math.random() * 6);
				else randDif = Math.round(Math.random() * 5);
				
				if(eCount === 16) randDif = 6;
				
				let y = 0;
				
				if(randDif === 5) {
					take485 = true;
				}
				else if(randDif === 6) {
					if(!take85) randNum === 0;
					else if(!take165) randNum === 1;
					else if(!take254) randNum === 2;
					else if(!take325) randNum === 3;
					take405 = true;
					take485 = true;
				}
				
				if(randNum === 0 && !take85) {
					y = 85;
					take85 = true;
				}
				else if(randNum === 1 && !take165) {
					y = 165;
					take165 = true;
				}
				else if(randNum === 2 && !take245) {
					y = 245;
					take245 = true;
				}
				else if(randNum === 3 && !take325){ 
					y = 325;
					take325 = true;
				}
				else if(randNum === 4 && !take405){
					y = 405;
					take405 = true;
				}
				else if(randNum === 5 && !take485) {
					y = 485;
					take485 = true;
				}
				if(y !== 0) {
					if(randDif === 0) {
						let enemy = new Enemy('easy', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 1) {
						let enemy = new Enemy('medium', 150, y, 2);
						enemyArray.push(enemy);
					}
					else if(randDif === 2) {
						let enemy = new Enemy('moderate', 200, y, 3);
						enemyArray.push(enemy);
					}
					else if(randDif === 3) {
						let enemy = new Enemy('fighter1', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 4) {
						let enemy = new Enemy('bomber1', 150, y, 2);
						enemyArray.push(enemy);
					}
					else if(randDif === 5) {
						let enemy = new Enemy('fighter2', 75, y, 5);
						enemyArray.push(enemy);
						//console.log("big boy spawned");
						break;
					}
					else if(randDif === 6) {
						let enemy = new Enemy('dStar', 40, y, 10);
						enemyArray.push(enemy);
						break;
					}
				}
			}
			eCount++;
			}
		}, 1100);
	}
	else if(wave === 11) {
		interval3 = setInterval(function() {
			if(eCount < 40 && waveNum === 11 && continueSpawn) {
			
			let randQuantity = Math.round(Math.random() * 4);
					
			let take85 = false;
			let take165 = false;
			let take245 = false;
			let take325 = false;
			let take405 = false;
			let take485 = false;
				
			for(let i = 0; i <= randQuantity; i++) {
				let randNum = Math.round(Math.random() * 5);
				let randDif;
				randDif = Math.round(Math.random() * 6);
				if(eCount === 30) randDif = 6;
				
				let y = 0;
				
				if(randDif === 5) {
					take485 = true;
				}
				else if(randDif === 6) {
					if(!take85) randNum === 0;
					else if(!take165) randNum === 1;
					else if(!take254) randNum === 2;
					else if(!take325) randNum === 3;
					take405 = true;
					take485 = true;
				}
				
				if(randNum === 0 && !take85) {
					y = 85;
					take85 = true;
				}
				else if(randNum === 1 && !take165) {
					y = 165;
					take165 = true;
				}
				else if(randNum === 2 && !take245) {
					y = 245;
					take245 = true;
				}
				else if(randNum === 3 && !take325){ 
					y = 325;
					take325 = true;
				}
				else if(randNum === 4 && !take405){
					y = 405;
					take405 = true;
				}
				else if(randNum === 5 && !take485) {
					y = 485;
					take485 = true;
				}
				if(y !== 0) {
					if(randDif === 0) {
						let enemy = new Enemy('easy', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 1) {
						let enemy = new Enemy('medium', 150, y, 2);
						enemyArray.push(enemy);
					}
					else if(randDif === 2) {
						let enemy = new Enemy('moderate', 200, y, 3);
						enemyArray.push(enemy);
					}
					else if(randDif === 3) {
						let enemy = new Enemy('fighter1', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 4) {
						let enemy = new Enemy('bomber1', 150, y, 2);
						enemyArray.push(enemy);
					}
					else if(randDif === 5) {
						let enemy = new Enemy('fighter2', 75, y, 5);
						enemyArray.push(enemy);
						//console.log("big boy spawned");
					}
					else if(randDif === 6) {
						let enemy = new Enemy('dStar', 40, y, 10);
						enemyArray.push(enemy);
						break;
					}
				}
			}
			eCount++;
			}
		}, 1000);
	}
	else if(wave === 12) {
		interval3 = setInterval(function() {
			if(eCount < 40 && waveNum === 12 && continueSpawn) {
			
			let randQuantity = Math.round(Math.random() * 4);
					
			let take85 = false;
			let take165 = false;
			let take245 = false;
			let take325 = false;
			let take405 = false;
			let take485 = false;
				
			for(let i = 0; i <= randQuantity; i++) {
				let randNum = Math.round(Math.random() * 5);
				let randDif;
				randDif = Math.round(Math.random() * 6);
				if(eCount % 10 === 0) randDif = 7;
				
				let y = 0;
				
				if(randDif === 5) {
					take485 = true;
				}
				else if(randDif === 6) {
					if(!take85) randNum === 0;
					else if(!take165) randNum === 1;
					else if(!take254) randNum === 2;
					else if(!take325) randNum === 3;
					take405 = true;
					take485 = true;
				}
				else if(randDif === 7) {
					if(!take85) randNum === 0;
					else if(!take165) randNum === 1;
					else if(!take254) randNum === 2;
					take325 = true;
					take405 = true;
					take485 = true;
				}
				
				if(randNum === 0 && !take85) {
					y = 85;
					take85 = true;
				}
				else if(randNum === 1 && !take165) {
					y = 165;
					take165 = true;
				}
				else if(randNum === 2 && !take245) {
					y = 245;
					take245 = true;
				}
				else if(randNum === 3 && !take325){ 
					y = 325;
					take325 = true;
				}
				else if(randNum === 4 && !take405){
					y = 405;
					take405 = true;
				}
				else if(randNum === 5 && !take485) {
					y = 485;
					take485 = true;
				}
				if(y !== 0) {
					if(randDif === 0) {
						let enemy = new Enemy('easy', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 1) {
						let enemy = new Enemy('medium', 150, y, 2);
						enemyArray.push(enemy);
					}
					else if(randDif === 2) {
						let enemy = new Enemy('moderate', 200, y, 3);
						enemyArray.push(enemy);
					}
					else if(randDif === 3) {
						let enemy = new Enemy('fighter1', 100, y, 1);
						enemyArray.push(enemy);
					}
					else if(randDif === 4) {
						let enemy = new Enemy('bomber1', 150, y, 2);
						enemyArray.push(enemy);
					}
					else if(randDif === 5) {
						let enemy = new Enemy('fighter2', 75, y, 5);
						enemyArray.push(enemy);
						//console.log("big boy spawned");
					}
					else if(randDif === 6) {
						let enemy = new Enemy('dStar', 40, y, 10);
						enemyArray.push(enemy);
						break;
					}
					else if(randDif === 7) {
						let enemy = new Enemy('dStar2', 20, y, 50);
						enemyArray.push(enemy);
						break;
					}
				}
			}
			eCount++;
			}
		}, 1000);
	}
}

function displayWave(text) {
	ctx.save();
	ctx.fillStyle = 'red';
	ctx.textAlign = 'center';
	ctx.font = '100px Impact';
	ctx.fillText(text, w/2, h/2 + 100);
	ctx.restore();
}

function createAbilityCircle() {
	ctx.save();
	
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 10;
	ctx.arc(690, 30, 23, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.closePath();
	
	let distanceToStroke = 2 * Math.PI/5 * killCount;
	
	ctx.beginPath();
	ctx.strokeStyle = 'yellow';
	ctx.lineWidth = 10;
	ctx.arc(690, 30, 23, 3 * Math.PI / 2 , 3 * Math.PI / 2 + distanceToStroke);
	ctx.stroke();
	ctx.closePath;
	
	ctx.restore();
}
	

function createLaserBox() {
	ctx.save();
	
	let boxes = 5 - laserFired;
	
	ctx.fillStyle = 'yellow';
	ctx.fillRect(370, 15, 50 * boxes, 30);
	
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 2.5;
	ctx.strokeRect(370, 15, 50, 30);
	ctx.strokeRect(420, 15, 50, 30);
	ctx.strokeRect(470, 15, 50, 30);
	ctx.strokeRect(520, 15, 50, 30);
	ctx.strokeRect(570, 15, 50, 30);
	
	ctx.restore();
}

function inputImages() {
	loopArray.forEach( function(image) {
		//console.log(image.width + ", " + image.height);
		ctx.drawImage(image.imageObj, 0, 0, image.width, image.height, image.x, image.y, image.width, image.height);
	});
}

function checkForPlayerMove(inc) {
	
	if(!gamepad) playerInfo.displayPlayer(0);
	
	else if(gamepad.axes[1] > .5 && moveDown) {
		playerInfo.displayPlayer(inc);
	}
	else if(gamepad.axes[1] < -.5 && moveUp) {
		playerInfo.displayPlayer(-inc);
	}
	else {
		playerInfo.displayPlayer(0);
	}
	
	playerInfo.checkForWallCollision();
}
	
function displayCompletedScreen(wave) {
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	inputImages();
	ctx.fillStyle = 'red';
	ctx.textAlign = 'center';
	ctx.font = '100px Impact';
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 3;
	
	if(wave === 1) {
		waveNum = 1.1;
	
		ctx.fillText('Wave ' + wave + ' Completed', w/2, h/2);
		ctx.strokeText('Wave ' + wave + ' Completed', w/2, h/2);
	
		ctx.font = '50px Impact';
		ctx.lineWidth = 1;
		ctx.fillText('Press A to Continue', w/2, h/2 + 100);
		ctx.strokeText('Press A to Continue', w/2, h/2 + 100);
			
		checkForWave2Start();
	}
	else if(wave === 2) {
		waveNum = 2.2;
		ctx.fillText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
		ctx.strokeText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
	
		ctx.font = '50px Impact';
		ctx.lineWidth = 1;
		ctx.fillText('Press A to Continue', w/2, h/2 - 30);
		ctx.strokeText('Press A to Continue', w/2, h/2 - 30);
		
		drawRewardBox();
		
		ctx.textAlign = 'center';
		ctx.fillStyle = 'yellow';
		ctx.font = '30px Impact';
		
		ctx.fillText('Main Ability Upgraded!', w/2, h/2 + 20);
		ctx.drawImage(imageObj3, 0, 0, 70, 70, w/2 - 30, h/2 + 45, 60, 60);
		ctx.drawImage(player, 0, 0, 200, 84, 390, 450, 100, 42);
		
		ctx.fillStyle = 'red';
		ctx.fillRect(500, 534, 30, 5);
		ctx.fillRect(500, 492, 30, 5);
		ctx.fillRect(500, 450, 30, 5);
		ctx.fillRect(500, 408, 30, 5);
		ctx.fillRect(500, 366, 30, 5);
		
		checkForWave3Start();
	}
	else if(wave === 3) {
		waveNum = 3.3;
		ctx.fillText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
		ctx.strokeText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
	
		ctx.font = '50px Impact';
		ctx.lineWidth = 1;
		ctx.fillText('Press A to Continue', w/2, h/2 - 30);
		ctx.strokeText('Press A to Continue', w/2, h/2 - 30);
		
		drawRewardBox();
		
		ctx.textAlign = 'center';
		ctx.fillStyle = 'yellow';
		ctx.font = '30px Impact';
		
		ctx.fillText('New Abiltiy Unlocked!', w/2, h/2 + 20);
		ctx.drawImage(imageObj5, 0, 0, 70, 70, w/2 - 30, h/2 + 45, 70, 70);
		
		ctx.fillStyle = 'white';
		ctx.font = '20px Verdana';
		ctx.fillText('Temporarily Stun enemies and gain', w/2, h/2 + 135);
		ctx.fillText('an unbelievable advantage!', w/2, h/2 + 160);
		
		checkForWave4Start();
	}
	else if(wave === 4) {
		waveNum = 4.4;
		ctx.fillText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
		ctx.strokeText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
	
		ctx.font = '50px Impact';
		ctx.lineWidth = 1;
		ctx.fillText('Press A to Continue', w/2, h/2 - 30);
		ctx.strokeText('Press A to Continue', w/2, h/2 - 30);
		
		checkForWave5Start();
	}
	else if(wave === 5) {
		waveNum = 5.5;
		ctx.fillText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
		ctx.strokeText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
	
		ctx.font = '50px Impact';
		ctx.lineWidth = 1;
		ctx.fillText('Press A to Continue', w/2, h/2 - 30);
		ctx.strokeText('Press A to Continue', w/2, h/2 - 30);
		
		checkForWave6Start();
	}
	else if(wave === 6) {
		waveNum = 6.6;
		ctx.fillText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
		ctx.strokeText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
	
		ctx.font = '50px Impact';
		ctx.lineWidth = 1;
		ctx.fillText('Press A to Continue', w/2, h/2 - 30);
		ctx.strokeText('Press A to Continue', w/2, h/2 - 30);
		
		drawRewardBox();
		
		ctx.textAlign = 'center';
		ctx.fillStyle = 'yellow';
		ctx.font = '30px Impact';
		
		ctx.fillText('New Abiltiy Unlocked!', w/2, h/2 + 20);
		ctx.drawImage(imageObj6, 0, 0, 70, 70, w/2 - 30, h/2 + 45, 70, 70);
		
		ctx.fillStyle = 'white';
		ctx.font = '20px Verdana';
		ctx.fillText('Activate a shield to block enemy lasers!', w/2, h/2 + 135);
		
		checkForWave7Start();
	}
	else if(wave === 7) {
		waveNum = 7.7;
		ctx.fillText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
		ctx.strokeText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
	
		ctx.font = '50px Impact';
		ctx.lineWidth = 1;
		ctx.fillText('Press A to Continue', w/2, h/2 - 30);
		ctx.strokeText('Press A to Continue', w/2, h/2 - 30);
		
		drawRewardBox();
		
		ctx.textAlign = 'center';
		ctx.fillStyle = 'yellow';
		ctx.font = '30px Impact';
		
		ctx.fillText('Ability Upgraded!', w/2, h/2 + 20);
		ctx.drawImage(imageObj6, 0, 0, 70, 70, w/2 - 30, h/2 + 45, 70, 70);
		
		ctx.fillStyle = 'white';
		ctx.font = '20px Verdana';
		ctx.fillText('Now lasts for 3 Seconds!', w/2, h/2 + 135);
		
		checkForWave8Start();
	}
	else if(wave === 8) {
		waveNum = 8.8;
		ctx.fillText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
		ctx.strokeText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
	
		ctx.font = '50px Impact';
		ctx.lineWidth = 1;
		ctx.fillText('Press A to Continue', w/2, h/2 - 30);
		ctx.strokeText('Press A to Continue', w/2, h/2 - 30);
		
		drawRewardBox();
		
		ctx.textAlign = 'center';
		ctx.fillStyle = 'yellow';
		ctx.font = '30px Impact';
		
		ctx.fillText('New Defense Unlocked!', w/2, h/2 + 20);
		ctx.drawImage(imageObj7, 0, 0, 73, 70, w/2 - 30, h/2 + 45, 73, 70);
		
		ctx.fillStyle = 'white';
		ctx.font = '20px Verdana';
		ctx.fillText('Position by clicking up or down', w/2, h/2 + 135);
		
		ctx.drawImage(turret, 0, 0, 50, 43, w/2 - 20, h/2 + 145, 50, 43);
		
		checkForWave9Start();
	}
	else if(wave === 9) {
		waveNum = 9.9;
		ctx.fillText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
		ctx.strokeText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
	
		ctx.font = '50px Impact';
		ctx.lineWidth = 1;
		ctx.fillText('Press A to Continue', w/2, h/2 - 30);
		ctx.strokeText('Press A to Continue', w/2, h/2 - 30);
		
		drawRewardBox();
		
		ctx.textAlign = 'center';
		ctx.fillStyle = 'yellow';
		ctx.font = '30px Impact';
		
		ctx.fillText('Defense Upgraded!', w/2, h/2 + 20);
		ctx.drawImage(imageObj7, 0, 0, 73, 70, w/2 - 30, h/2 + 45, 73, 70);
		
		ctx.fillStyle = 'white';
		ctx.font = '20px Verdana';
		ctx.fillText('Now shoots faster!', w/2, h/2 + 135);
		
		ctx.drawImage(turret, 0, 0, 50, 43, w/2 - 20, h/2 + 145, 50, 43);
		
		checkForWave10Start();
	}
	else if(wave === 10) {
		waveNum = 10.10;
		ctx.fillText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
		ctx.strokeText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
	
		ctx.font = '50px Impact';
		ctx.lineWidth = 1;
		ctx.fillText('Press A to Continue', w/2, h/2 - 30);
		ctx.strokeText('Press A to Continue', w/2, h/2 - 30);
		
		checkForWave11Start();
	}
	else if(wave === 11) {
		waveNum = 11.11;
		ctx.fillText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
		ctx.strokeText('Wave ' + wave + ' Completed', w/2, h/2 - 100);
	
		ctx.font = '50px Impact';
		ctx.lineWidth = 1;
		ctx.fillText('Press A to Continue', w/2, h/2 - 30);
		ctx.strokeText('Press A to Continue', w/2, h/2 - 30);
		
		drawRewardBox();
		
		ctx.textAlign = 'center';
		ctx.fillStyle = 'yellow';
		ctx.font = '30px Impact';
		
		ctx.fillText('Ability Upgraded!', w/2, h/2 + 20);
		ctx.drawImage(imageObj5, 0, 0, 70, 70, w/2 - 30, h/2 + 45, 70, 70);
		
		ctx.fillStyle = 'white';
		ctx.font = '20px Verdana';
		ctx.fillText('Now lasts 4 seconds!', w/2, h/2 + 135);
		
		checkForWave12Start();
	}
	else if(wave === 12) {
		waveNum = 12.12;
		ctx.fillText('VICTORY', w/2, h/2 - 100);
		ctx.strokeText('VICTORY', w/2, h/2 - 100);
	}
		
	ctx.restore();
}

function drawRewardBox() {
	ctx.save();
	
	let pattern = ctx.createRadialGradient(w/2, h, 10, w/2, h, h/2);
	pattern.addColorStop(0, '#0E0748');
	//pattern.addColorStop(.15, '#C30E0E');
	pattern.addColorStop(.5, '#0E0748');
	
	ctx.fillStyle = pattern;
	ctx.fillRect(w/4, h/2 - 20, w/2, h/2);
	
	ctx.restore();
}

function checkForWave2Start() {
	if(waveNum === 1.1 && gamepad) {
		scanGamepads();
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let b = gamepad.buttons[i];
			if(b.pressed) {
				console.log("next wave");
				if(i === 0) {
					beginWave2();
				}
			}
		}
		//console.log("hello");
	}
	animation2 = requestAnimationFrame(checkForWave2Start);
}

function beginWave2() {
	killCount = 0;
	playerLaserArray = [];
	enemyArray = [];
	eCount = 0;
	t = 0;
	laserFired = 0;
	displayWaveTitle = true;
	waveNum = 2;
	oldTime = 0;
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	inputImages();
	
	//playerInfo.x = 50;
	playerInfo.y = 300;
	
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	cancelAnimationFrame(animation);
	cancelAnimationFrame(animation2);
	
	interval1 = setInterval(firePower, 1000);
	interval2 = setInterval(displayTitle, 1000);
	spawnEnemies(2);
	requestAnimationFrame(mainLoop2);
	
	
	ctx.restore();
}

function mainLoop2(currentTime) {
	if(waveNum === 2 && gamepad) {
		
		scanGamepads();
		delta = currentTime - oldTime;
		let incY = calcDistanceToMove(delta, 400);
		
		ctx.save();
		ctx.clearRect(0, 0, w, h);
	
		inputImages();
		ctx.drawImage(imageObj2, 0, 0, 70, 70, 320, 10, 40, 40);
		ctx.drawImage(imageObj3, 0, 0, 70, 70, 670, 10, 40, 40);
		ctx.drawImage(imageObj4, 0, 0, 240, 210, 250, 10, 40, 40);
		
		drawHealth();
	
		checkForPlayerMove(incY);
		
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let button = gamepad.buttons[i];
			if(button.pressed) {
				if(i === 7) {
					if(t > 15 && laserFired < 5) {
						let playerLaser = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
						playerLaserArray.push(playerLaser);
						sound2.play();
						t = 0;
						laserFired++;
					}
				}
				else if(i === 6 && killCount >= 5 && t > 15) {
					let playerLaserTop = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop);
					let playerLaserMid = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
					playerLaserArray.push(playerLaserMid);
					let playerLaserBottom = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom);
					sound3.play();
					killCount = 0;
					t = 0;
				}
			}
		}
		t++;
		
		if(sound2.currentTime > .1) {
			sound2.currentTime = 0;
			sound2.pause();
		}
		
		enemyArray.forEach( function(enemy1, index) {
			enemy1.drawEnemy();
			enemy1.x -= calcDistanceToMove(delta, enemy1.speed);
			enemy1.testForExit(index);
		});
		
		playerLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForPlayerLaserExit();
			laser.testForCollision();
			if(contactMade) {
				//console.log("disappear!");
				playerLaserArray.splice(index, 1);
			}
			contactMade = false;
		});
		
		createLaserBox();
		createAbilityCircle();
		
		if(displayWaveTitle) {
			displayWave('Wave 2');
		}
		
		if(enemyArray.length === 0 && eCount >= 30) {
			displayCompletedScreen(2);
		}
		if(playerHealth <= 0) {
			endScreen();
		}
		
		ctx.restore();
	
		oldTime = currentTime;
	}
	requestAnimationFrame(mainLoop2);
}

function endScreen() {
	waveNum = 0;
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, w, h);
	
	ctx.fillStyle = 'red';
	ctx.textAlign = 'center';
	ctx.font = '200px Impact';
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 10;
	ctx.fillText('Game Over', w/2, h/3);
	ctx.strokeText('Game Over', w/2, h/3);
	
	ctx.restore();
}
	
function checkForWave3Start() {
	if(waveNum === 2.2 && gamepad) {
		scanGamepads();
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let b = gamepad.buttons[i];
			if(b.pressed) {
				console.log("next wave");
				if(i === 0) {
					beginWave3();
				}
			}
		}
		//console.log("hello");
	}
	animation2 = requestAnimationFrame(checkForWave3Start);
}

function beginWave3() {
	killCount = 0;
	playerLaserArray = [];
	enemyArray = [];
	eCount = 0;
	t = 0;
	laserFired = 0;
	displayWaveTitle = true;
	waveNum = 3;
	oldTime = 0;
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	inputImages();
	
	playerInfo.y = 300;
	
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	cancelAnimationFrame(animation);
	cancelAnimationFrame(animation2);
	
	interval1 = setInterval(firePower, 800);
	interval2 = setInterval(displayTitle, 1000);
	spawnEnemies(3);
	
	requestAnimationFrame(mainLoop3);
	
	ctx.restore();
}

function mainLoop3(currentTime) {
	if(waveNum === 3 && gamepad) {
		
		scanGamepads();
		delta = currentTime - oldTime;
		let incY = calcDistanceToMove(delta, 400);
		
		ctx.save();
		ctx.clearRect(0, 0, w, h);
	
		inputImages();
		ctx.drawImage(imageObj2, 0, 0, 70, 70, 320, 10, 40, 40);
		ctx.drawImage(imageObj3, 0, 0, 70, 70, 670, 10, 40, 40);
		ctx.drawImage(imageObj4, 0, 0, 240, 210, 250, 10, 40, 40);
		
		drawHealth();
	
		checkForPlayerMove(incY);
		
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let button = gamepad.buttons[i];
			if(button.pressed) {
				if(i === 7) {
					if(t > 15 && laserFired < 5) {
						let playerLaser = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
						playerLaserArray.push(playerLaser);
						sound2.play();
						t = 0;
						laserFired++;
					}
				}
				else if(i === 6 && killCount >= 5 && t > 15) {
					let playerLaserTop = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop);
					let playerLaserMid = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
					playerLaserArray.push(playerLaserMid);
					let playerLaserBottom = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom);
					let playerLaserTop2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop2);
					let playerLaserBottom2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom2);
					sound3.play();
					killCount = 0;
					t = 0;
				}
			}
		}
		t++;
		
		if(sound2.currentTime > .1) {
			sound2.currentTime = 0;
			sound2.pause();
		}
		
		enemyArray.forEach( function(enemy1, index) {
			enemy1.drawEnemy();
			enemy1.x -= calcDistanceToMove(delta, enemy1.speed);
			enemy1.testForExit(index);
		});
		
		playerLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForPlayerLaserExit();
			laser.testForCollision();
			if(contactMade) {
				//console.log("disappear!");
				playerLaserArray.splice(index, 1);
			}
			contactMade = false;
		});
		
		createLaserBox();
		createAbilityCircle();
		
		if(displayWaveTitle) {
			displayWave('Wave 3');
		}
		
		if(enemyArray.length === 0 && eCount >= 30) {
			displayCompletedScreen(3);
		}
		if(playerHealth <= 0) {
			endScreen();
		}
		
		ctx.restore();
	
		oldTime = currentTime;
	}
	animation = requestAnimationFrame(mainLoop3);
}

function checkForWave4Start() {
	if(waveNum === 3.3 && gamepad) {
		scanGamepads();
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let b = gamepad.buttons[i];
			if(b.pressed) {
				console.log("next wave");
				if(i === 0) {
					beginWave4();
				}
			}
		}
		//console.log("hello");
	}
	animation2 = requestAnimationFrame(checkForWave4Start);
}

function beginWave4() {
	killCount = 0;
	playerLaserArray = [];
	enemyArray = [];
	eCount = 0;
	t = 0;
	laserFired = 0;
	displayWaveTitle = true;
	waveNum = 4;
	oldTime = 0;
	enemyLaserArray = [];
	killCount2 = 0;
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	inputImages();
	
	playerInfo.y = 300;
	
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	cancelAnimationFrame(animation);
	cancelAnimationFrame(animation2);
	
	interval1 = setInterval(firePower, 500);
	interval2 = setInterval(displayTitle, 1000);
	spawnEnemies(4);
	
	requestAnimationFrame(mainLoop4);
	
	ctx.restore();
}

function mainLoop4(currentTime) {
	if(waveNum === 4 && gamepad) {
		
		scanGamepads();
		delta = currentTime - oldTime;
		let incY = calcDistanceToMove(delta, 400);
		
		ctx.save();
		ctx.clearRect(0, 0, w, h);
	
		inputImages();
		ctx.drawImage(imageObj2, 0, 0, 70, 70, 320, 10, 40, 40);
		ctx.drawImage(imageObj3, 0, 0, 70, 70, 670, 10, 40, 40);
		ctx.drawImage(imageObj4, 0, 0, 240, 210, 250, 10, 40, 40);
		ctx.drawImage(imageObj5, 0, 0, 70, 70, 800, 10, 40, 40);
		
		drawHealth();
	
		checkForPlayerMove(incY);
		
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let button = gamepad.buttons[i];
			if(button.pressed) {
				//console.log("button pressed");
				if(i === 2) {
					//console.log(killCount2);
					if(killCount2 >= 50) {
					console.log("activated");
					newTime = currentTime;
					freeze = true;
					killCount2 = 0;
					sound5.play();
					}
				}
				else if(i === 7) {
					if(t > 15 && laserFired < 5) {
						let playerLaser = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
						playerLaserArray.push(playerLaser);
						sound2.play();
						t = 0;
						laserFired++;
					}
				}
				else if(i === 6 && killCount >= 5 && t > 15) {
					let playerLaserTop = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop);
					let playerLaserMid = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
					playerLaserArray.push(playerLaserMid);
					let playerLaserBottom = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom);
					let playerLaserTop2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop2);
					let playerLaserBottom2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom2);
					sound3.play();
					killCount = 0;
					t = 0;
				}
			}
		}
		if(freeze) {
			console.log("freezing");
			enemyArray.forEach( function(enemy1) {
				enemy1.x += calcDistanceToMove(delta, enemy1.speed);
			});
			continueSpawn = false;
		}
		if(currentTime - newTime > 2000) {
			continueSpawn = true;
			freeze = false;
		}
		t++;
		
		if(sound2.currentTime > .1) {
			sound2.currentTime = 0;
			sound2.pause();
		}
		
		enemyArray.forEach( function(enemy1, index) {
			enemy1.drawEnemy();
			enemy1.x -= calcDistanceToMove(delta, enemy1.speed);
			enemy1.testForExit(index);
		});
		
		playerLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForPlayerLaserExit();
			laser.testForCollision();
			if(contactMade) {
				//console.log("disappear!");
				playerLaserArray.splice(index, 1);
			}
			contactMade = false;
		});
		
		enemyLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForEnemyLaserExit(index);
			laser.testForPlayerCollision(index);
		});
		
		createLaserBox();
		createAbilityCircle();
		createAbility2Circle();
		
		if(displayWaveTitle) {
			displayWave('Wave 3');
		}
		
		if(enemyArray.length === 0 && eCount >= 25) {
			displayCompletedScreen(4);
		}
		if(playerHealth <= 0) {
			endScreen();
		}
		
		ctx.restore();
	
		oldTime = currentTime;
	}
	animation = requestAnimationFrame(mainLoop4);
}

function createAbility2Circle() {
	ctx.save();
	
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 10;
	ctx.arc(820, 30, 23, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.closePath();
	
	let distanceToStroke = 2 * Math.PI/50 * killCount2;
	
	ctx.beginPath();
	ctx.strokeStyle = 'yellow';
	ctx.lineWidth = 10;
	ctx.arc(820, 30, 23, 3 * Math.PI / 2 , 3 * Math.PI / 2 + distanceToStroke);
	ctx.stroke();
	ctx.closePath;
	
	ctx.restore();
}

function checkForWave5Start() {
	if(waveNum === 4.4 && gamepad) {
		scanGamepads();
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let b = gamepad.buttons[i];
			if(b.pressed) {
				console.log("next wave");
				if(i === 0) {
					beginWave5();
				}
			}
		}
		//console.log("hello");
	}
	animation2 = requestAnimationFrame(checkForWave5Start);
}

function beginWave5() {
	killCount = 0;
	playerLaserArray = [];
	enemyArray = [];
	eCount = 0;
	t = 0;
	laserFired = 0;
	displayWaveTitle = true;
	waveNum = 5;
	oldTime = 0;
	enemyLaserArray = [];
	killCount2 = 0;
	continueSpawn = true;
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	inputImages();
	
	playerInfo.y = 300;
	
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	cancelAnimationFrame(animation);
	cancelAnimationFrame(animation2);
	
	interval1 = setInterval(firePower, 500);
	interval2 = setInterval(displayTitle, 1000);
	spawnEnemies(5);
	
	requestAnimationFrame(mainLoop5);
	
	ctx.restore();
}

function mainLoop5(currentTime) {
	if(waveNum === 5 && gamepad) {
		
		scanGamepads();
		delta = currentTime - oldTime;
		let incY = calcDistanceToMove(delta, 400);
		
		ctx.save();
		ctx.clearRect(0, 0, w, h);
	
		inputImages();
		ctx.drawImage(imageObj2, 0, 0, 70, 70, 320, 10, 40, 40);
		ctx.drawImage(imageObj3, 0, 0, 70, 70, 670, 10, 40, 40);
		ctx.drawImage(imageObj4, 0, 0, 240, 210, 250, 10, 40, 40);
		ctx.drawImage(imageObj5, 0, 0, 70, 70, 800, 10, 40, 40);
		
		drawHealth();
	
		checkForPlayerMove(incY);
		
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let button = gamepad.buttons[i];
			if(button.pressed) {
				if(i === 2 && killCount2 >= 50) {
					newTime = currentTime;
					freeze = true;
					killCount2 = 0;
					sound5.play();
				}
				else if(i === 7) {
					if(t > 15 && laserFired < 5) {
						let playerLaser = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
						playerLaserArray.push(playerLaser);
						sound2.play();
						t = 0;
						laserFired++;
					}
				}
				else if(i === 6 && killCount >= 5 && t > 15) {
					let playerLaserTop = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop);
					let playerLaserMid = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
					playerLaserArray.push(playerLaserMid);
					let playerLaserBottom = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom);
					let playerLaserTop2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop2);
					let playerLaserBottom2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom2);
					sound3.play();
					killCount = 0;
					t = 0;
				}
			}
		}
		if(freeze) {
			enemyArray.forEach( function(enemy1) {
				enemy1.x += calcDistanceToMove(delta, enemy1.speed);
			});
			continueSpawn = false;
		}
		if(currentTime - newTime > 2000) {
			continueSpawn = true;
			freeze = false;
		}
		t++;
		
		if(sound2.currentTime > .1) {
			sound2.currentTime = 0;
			sound2.pause();
		}
		
		enemyArray.forEach( function(enemy1, index) {
			enemy1.drawEnemy();
			enemy1.x -= calcDistanceToMove(delta, enemy1.speed);
			enemy1.testForExit(index);
		});
		
		playerLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForPlayerLaserExit();
			laser.testForCollision();
			if(contactMade) {
				//console.log("disappear!");
				playerLaserArray.splice(index, 1);
			}
			contactMade = false;
		});
		
		enemyLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForEnemyLaserExit(index);
			laser.testForPlayerCollision(index);
		});
		
		createLaserBox();
		createAbilityCircle();
		createAbility2Circle();
		
		if(displayWaveTitle) {
			displayWave('Wave 5');
		}
		
		if(enemyArray.length === 0 && eCount >= 30) {
			displayCompletedScreen(5);
		}
		if(playerHealth <= 0) {
			endScreen();
		}
		
		ctx.restore();
	
		oldTime = currentTime;
	}
	animation = requestAnimationFrame(mainLoop5);
}

function checkForWave6Start() {
	if(waveNum === 5.5 && gamepad) {
		scanGamepads();
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let b = gamepad.buttons[i];
			if(b.pressed) {
				console.log("next wave");
				if(i === 0) {
					beginWave6();
				}
			}
		}
		//console.log("hello");
	}
	animation2 = requestAnimationFrame(checkForWave6Start);
}

function beginWave6() {
	killCount = 0;
	playerLaserArray = [];
	enemyArray = [];
	eCount = 0;
	t = 0;
	laserFired = 0;
	displayWaveTitle = true;
	waveNum = 6;
	oldTime = 0;
	enemyLaserArray = [];
	killCount2 = 0;
	continueSpawn = true;

	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	inputImages();
	
	playerInfo.y = 300;
	
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	cancelAnimationFrame(animation);
	cancelAnimationFrame(animation2);
	
	interval1 = setInterval(firePower, 500);
	interval2 = setInterval(displayTitle, 1000);
	spawnEnemies(6);
	
	requestAnimationFrame(mainLoop6);
	
	ctx.restore();
}

function mainLoop6(currentTime) {
	if(waveNum === 6 && gamepad) {
		
		scanGamepads();
		delta = currentTime - oldTime;
		let incY = calcDistanceToMove(delta, 400);
		
		ctx.save();
		ctx.clearRect(0, 0, w, h);
	
		inputImages();
		ctx.drawImage(imageObj2, 0, 0, 70, 70, 320, 10, 40, 40);
		ctx.drawImage(imageObj3, 0, 0, 70, 70, 670, 10, 40, 40);
		ctx.drawImage(imageObj4, 0, 0, 240, 210, 250, 10, 40, 40);
		ctx.drawImage(imageObj5, 0, 0, 70, 70, 800, 10, 40, 40);
		
		drawHealth();
	
		checkForPlayerMove(incY);
		
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let button = gamepad.buttons[i];
			if(button.pressed) {
				if(i === 2 && killCount2 >= 50) {
					newTime = currentTime;
					freeze = true;
					killCount2 = 0;
					sound5.play();
				}
				else if(i === 7) {
					if(t > 15 && laserFired < 5) {
						let playerLaser = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
						playerLaserArray.push(playerLaser);
						sound2.play();
						t = 0;
						laserFired++;
					}
				}
				else if(i === 6 && killCount >= 5 && t > 15) {
					let playerLaserTop = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop);
					let playerLaserMid = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
					playerLaserArray.push(playerLaserMid);
					let playerLaserBottom = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom);
					let playerLaserTop2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop2);
					let playerLaserBottom2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom2);
					sound3.play();
					killCount = 0;
					t = 0;
				}
			}
		}
		if(freeze) {
			enemyArray.forEach( function(enemy1) {
				enemy1.x += calcDistanceToMove(delta, enemy1.speed);
			});
			continueSpawn = false;
		}
		if(currentTime - newTime > 2000) {
			continueSpawn = true;
			freeze = false;
		}
		t++;
		
		if(sound2.currentTime > .1) {
			sound2.currentTime = 0;
			sound2.pause();
		}
		
		enemyArray.forEach( function(enemy1, index) {
			enemy1.drawEnemy();
			enemy1.x -= calcDistanceToMove(delta, enemy1.speed);
			enemy1.testForExit(index);
		});
		
		playerLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForPlayerLaserExit();
			laser.testForCollision();
			if(contactMade) {
				//console.log("disappear!");
				playerLaserArray.splice(index, 1);
			}
			contactMade = false;
		});
		
		enemyLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForEnemyLaserExit(index);
			laser.testForPlayerCollision(index);
		});
		
		createLaserBox();
		createAbilityCircle();
		createAbility2Circle();
		
		if(displayWaveTitle) {
			displayWave('Wave 6');
		}
		
		if(enemyArray.length === 0 && eCount >= 30) {
			displayCompletedScreen(6);
		}
		if(playerHealth <= 0) {
			endScreen();
		}
		
		ctx.restore();
	
		oldTime = currentTime;
	}
	animation = requestAnimationFrame(mainLoop6);
}

function checkForWave7Start() {
	if(waveNum === 6.6 && gamepad) {
		scanGamepads();
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let b = gamepad.buttons[i];
			if(b.pressed) {
				console.log("next wave");
				if(i === 0) {
					beginWave7();
				}
			}
		}
		//console.log("hello");
	}
	animation2 = requestAnimationFrame(checkForWave7Start);
}

function beginWave7() {
	killCount = 0;
	playerLaserArray = [];
	enemyArray = [];
	eCount = 0;
	t = 0;
	laserFired = 0;
	displayWaveTitle = true;
	waveNum = 7;
	oldTime = 0;
	enemyLaserArray = [];
	killCount2 = 0;
	continueSpawn = true;
	killCount3 = 0;

	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	inputImages();
	
	playerInfo.y = 300;
	
	clearInterval(interval1);
	clearInterval(interval2);
	cancelAnimationFrame(animation);
	cancelAnimationFrame(animation2);
	
	interval1 = setInterval(firePower, 500);
	interval2 = setInterval(displayTitle, 1000);
	spawnEnemies(7);
	
	requestAnimationFrame(mainLoop7);
	
	ctx.restore();
}

function mainLoop7(currentTime) {
	if(waveNum === 7 && gamepad) {
		
		scanGamepads();
		delta = currentTime - oldTime;
		let incY = calcDistanceToMove(delta, 400);
		
		ctx.save();
		ctx.clearRect(0, 0, w, h);
	
		inputImages();
		ctx.drawImage(imageObj2, 0, 0, 70, 70, 320, 10, 40, 40);
		ctx.drawImage(imageObj3, 0, 0, 70, 70, 670, 10, 40, 40);
		ctx.drawImage(imageObj4, 0, 0, 240, 210, 250, 10, 40, 40);
		ctx.drawImage(imageObj5, 0, 0, 70, 70, 800, 10, 40, 40);
		ctx.drawImage(imageObj6, 0, 0, 70, 70, 930, 10, 40, 40);
		
		drawHealth();
	
		checkForPlayerMove(incY);
		
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let button = gamepad.buttons[i];
			if(button.pressed) {
				if(i === 2 && killCount2 >= 50) {
					newTime = currentTime;
					freeze = true;
					killCount2 = 0;
					sound5.play();
				}
				else if(i === 7) {
					if(t > 15 && laserFired < 5) {
						let playerLaser = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
						playerLaserArray.push(playerLaser);
						sound2.play();
						t = 0;
						laserFired++;
					}
				}
				else if(i === 6 && killCount >= 5 && t > 15) {
					let playerLaserTop = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop);
					let playerLaserMid = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
					playerLaserArray.push(playerLaserMid);
					let playerLaserBottom = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom);
					let playerLaserTop2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop2);
					let playerLaserBottom2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom2);
					sound3.play();
					killCount = 0;
					t = 0;
				}
				else if(i === 1 && killCount3 >= 20) {
					newTime2 = currentTime;
					activateShield = true;
					killCount3 = 0;
				}
			}
		}
		if(activateShield) {
			let shield = new Shield(playerInfo.x, playerInfo.y);
			shield.drawShield();
			shield.testCollision();
		}
		if(currentTime - newTime2 > 2500) {
			activateShield = false;
		}
		
		if(freeze) {
			enemyArray.forEach( function(enemy1) {
				enemy1.x += calcDistanceToMove(delta, enemy1.speed);
			});
			continueSpawn = false;
		}
		if(currentTime - newTime > 2000) {
			continueSpawn = true;
			freeze = false;
		}
		t++;
		
		if(sound2.currentTime > .1) {
			sound2.currentTime = 0;
			sound2.pause();
		}
		
		enemyArray.forEach( function(enemy1, index) {
			enemy1.drawEnemy();
			enemy1.x -= calcDistanceToMove(delta, enemy1.speed);
			enemy1.testForExit(index);
		});
		
		playerLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForPlayerLaserExit();
			laser.testForCollision();
			if(contactMade) {
				//console.log("disappear!");
				playerLaserArray.splice(index, 1);
			}
			contactMade = false;
		});
		
		enemyLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForEnemyLaserExit(index);
			laser.testForPlayerCollision(index);
		});
		
		createLaserBox();
		createAbilityCircle();
		createAbility2Circle();
		createAbility3Circle();
		
		if(displayWaveTitle) {
			displayWave('Wave 7');
		}
		
		if(enemyArray.length === 0 && eCount >= 30) {
			displayCompletedScreen(7);
		}
		if(playerHealth <= 0) {
			endScreen();
		}
		
		ctx.restore();
	
		oldTime = currentTime;
	}
	animation = requestAnimationFrame(mainLoop7);
}

function createAbility3Circle() {
	ctx.save();
	
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 10;
	ctx.arc(950, 30, 23, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.closePath();
	
	let distanceToStroke = 2 * Math.PI/25 * killCount3;
	
	ctx.beginPath();
	ctx.strokeStyle = 'yellow';
	ctx.lineWidth = 10;
	ctx.arc(950, 30, 23, 3 * Math.PI / 2 , 3 * Math.PI / 2 + distanceToStroke);
	ctx.stroke();
	ctx.closePath;
	
	ctx.restore();
}

function checkForWave8Start() {
	if(waveNum === 7.7 && gamepad) {
		scanGamepads();
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let b = gamepad.buttons[i];
			if(b.pressed) {
				console.log("next wave");
				if(i === 0) {
					beginWave8();
				}
			}
		}
		//console.log("hello");
	}
	animation2 = requestAnimationFrame(checkForWave8Start);
}

function beginWave8() {
	killCount = 0;
	playerLaserArray = [];
	enemyArray = [];
	eCount = 0;
	t = 0;
	laserFired = 0;
	displayWaveTitle = true;
	waveNum = 8;
	oldTime = 0;
	enemyLaserArray = [];
	killCount2 = 0;
	continueSpawn = true;
	killCount3 = 0;
	activateShield = false;

	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	inputImages();
	
	playerInfo.y = 300;
	
	clearInterval(interval1);
	clearInterval(interval2);
	cancelAnimationFrame(animation);
	cancelAnimationFrame(animation2);
	
	interval1 = setInterval(firePower, 500);
	interval2 = setInterval(displayTitle, 1000);
	spawnEnemies(8);
	
	requestAnimationFrame(mainLoop8);
	
	ctx.restore();
}

function mainLoop8(currentTime) {
	if(waveNum === 8 && gamepad) {
		
		scanGamepads();
		delta = currentTime - oldTime;
		let incY = calcDistanceToMove(delta, 400);
		
		ctx.save();
		ctx.clearRect(0, 0, w, h);
	
		inputImages();
		ctx.drawImage(imageObj2, 0, 0, 70, 70, 320, 10, 40, 40);
		ctx.drawImage(imageObj3, 0, 0, 70, 70, 670, 10, 40, 40);
		ctx.drawImage(imageObj4, 0, 0, 240, 210, 250, 10, 40, 40);
		ctx.drawImage(imageObj5, 0, 0, 70, 70, 800, 10, 40, 40);
		ctx.drawImage(imageObj6, 0, 0, 70, 70, 930, 10, 40, 40);
		
		drawHealth();
	
		checkForPlayerMove(incY);
		
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let button = gamepad.buttons[i];
			if(button.pressed) {
				if(i === 2 && killCount2 >= 50) {
					newTime = currentTime;
					freeze = true;
					killCount2 = 0;
					sound5.play();
				}
				else if(i === 7) {
					if(t > 15 && laserFired < 5) {
						let playerLaser = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
						playerLaserArray.push(playerLaser);
						sound2.play();
						t = 0;
						laserFired++;
					}
				}
				else if(i === 6 && killCount >= 5 && t > 15) {
					let playerLaserTop = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop);
					let playerLaserMid = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
					playerLaserArray.push(playerLaserMid);
					let playerLaserBottom = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom);
					let playerLaserTop2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop2);
					let playerLaserBottom2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom2);
					sound3.play();
					killCount = 0;
					t = 0;
				}
				else if(i === 1 && killCount3 >= 20) {
					newTime2 = currentTime;
					activateShield = true;
					killCount3 = 0;
				}
			}
		}
		if(activateShield) {
			let shield = new Shield(playerInfo.x, playerInfo.y);
			shield.drawShield();
			shield.testCollision();
		}
		if(currentTime - newTime2 > 3000) {
			activateShield = false;
		}
		
		if(freeze) {
			enemyArray.forEach( function(enemy1) {
				enemy1.x += calcDistanceToMove(delta, enemy1.speed);
			});
			continueSpawn = false;
		}
		if(currentTime - newTime > 2000) {
			continueSpawn = true;
			freeze = false;
		}
		t++;
		
		if(sound2.currentTime > .1) {
			sound2.currentTime = 0;
			sound2.pause();
		}
		
		enemyArray.forEach( function(enemy1, index) {
			enemy1.drawEnemy();
			enemy1.x -= calcDistanceToMove(delta, enemy1.speed);
			enemy1.testForExit(index);
		});
		
		playerLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForPlayerLaserExit();
			laser.testForCollision();
			if(contactMade) {
				//console.log("disappear!");
				playerLaserArray.splice(index, 1);
			}
			contactMade = false;
		});
		
		enemyLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForEnemyLaserExit(index);
			laser.testForPlayerCollision(index);
		});
		
		createLaserBox();
		createAbilityCircle();
		createAbility2Circle();
		createAbility3Circle();
		
		if(displayWaveTitle) {
			displayWave('Wave 8');
		}
		
		if(enemyArray.length === 0 && eCount >= 25) {
			displayCompletedScreen(8);
		}
		if(playerHealth <= 0) {
			endScreen();
		}
		
		ctx.restore();
	
		oldTime = currentTime;
	}
	animation = requestAnimationFrame(mainLoop8);
}

function checkForWave9Start() {
	if(waveNum === 8.8 && gamepad) {
		scanGamepads();
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let b = gamepad.buttons[i];
			if(b.pressed) {
				console.log("next wave");
				if(i === 0) {
					beginWave9();
				}
			}
		}
		//console.log("hello");
	}
	animation2 = requestAnimationFrame(checkForWave9Start);
}

function beginWave9() {
	killCount = 0;
	playerLaserArray = [];
	enemyArray = [];
	eCount = 0;
	t = 0;
	laserFired = 0;
	displayWaveTitle = true;
	waveNum = 9;
	oldTime = 0;
	enemyLaserArray = [];
	killCount2 = 0;
	continueSpawn = true;
	killCount3 = 0;
	activateShield = false;
	turret1.y = 275;
	newTime3 = 0;
	turretLaserArray = [];
	t2 = 0;

	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	inputImages();
	
	playerInfo.y = 300;
	
	clearInterval(interval1);
	clearInterval(interval2);
	cancelAnimationFrame(animation);
	cancelAnimationFrame(animation2);
	
	interval1 = setInterval(firePower, 500);
	interval2 = setInterval(displayTitle, 1000);
	spawnEnemies(9);
	
	requestAnimationFrame(mainLoop9);
	
	ctx.restore();
}

function mainLoop9(currentTime) {
	if(waveNum === 9 && gamepad) {
		
		scanGamepads();
		delta = currentTime - oldTime;
		let incY = calcDistanceToMove(delta, 400);
		
		ctx.save();
		ctx.clearRect(0, 0, w, h);
	
		inputImages();
		ctx.drawImage(imageObj2, 0, 0, 70, 70, 320, 10, 40, 40);
		ctx.drawImage(imageObj3, 0, 0, 70, 70, 670, 10, 40, 40);
		ctx.drawImage(imageObj4, 0, 0, 240, 210, 250, 10, 40, 40);
		ctx.drawImage(imageObj5, 0, 0, 70, 70, 800, 10, 40, 40);
		ctx.drawImage(imageObj6, 0, 0, 70, 70, 930, 10, 40, 40);
		
		drawHealth();
	
		checkForPlayerMove(incY);
		turret1.drawTurret();
		
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let button = gamepad.buttons[i];
			if(button.pressed) {
				if(i === 2 && killCount2 >= 50) {
					newTime = currentTime;
					freeze = true;
					killCount2 = 0;
					sound5.play();
				}
				else if(i === 7) {
					if(t > 15 && laserFired < 5) {
						let playerLaser = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
						playerLaserArray.push(playerLaser);
						sound2.play();
						t = 0;
						laserFired++;
					}
				}
				else if(i === 6 && killCount >= 5 && t > 15) {
					let playerLaserTop = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop);
					let playerLaserMid = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
					playerLaserArray.push(playerLaserMid);
					let playerLaserBottom = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom);
					let playerLaserTop2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop2);
					let playerLaserBottom2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom2);
					sound3.play();
					killCount = 0;
					t = 0;
				}
				else if(i === 1 && killCount3 >= 20) {
					newTime2 = currentTime;
					activateShield = true;
					killCount3 = 0;
				}
				else if(i === 13 && t2 > 5 && moveTurretDown) {
					turret1.y += 80;
					moveTurretUp = true;
					if(turret1.y >= 515) moveTurretDown = false;
					t2 = 0;
				}
				else if(i === 12 && t2 > 5 && moveTurretUp) {
					turret1.y -= 80;
					moveTurretDown = true;
					if(turret1.y <= 115) moveTurretUp = false;
					t2 = 0;
				}
			}
		}
		if(activateShield) {
			let shield = new Shield(playerInfo.x, playerInfo.y);
			shield.drawShield();
			shield.testCollision();
		}
		if(currentTime - newTime2 > 3000) {
			activateShield = false;
		}
		
		if(freeze) {
			enemyArray.forEach( function(enemy1) {
				enemy1.x += calcDistanceToMove(delta, enemy1.speed);
			});
			continueSpawn = false;
		}
		if(currentTime - newTime > 2000) {
			continueSpawn = true;
			freeze = false;
		}
		t++;
		t2++;
		
		if(sound2.currentTime > .1) {
			sound2.currentTime = 0;
			sound2.pause();
		}
		
		if(currentTime - newTime3 > 1000) {
			turret1.fireLaser();
			newTime3 = currentTime;
		}
		
		enemyArray.forEach( function(enemy1, index) {
			enemy1.drawEnemy();
			enemy1.x -= calcDistanceToMove(delta, enemy1.speed);
			enemy1.testForExit(index);
		});
		
		playerLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForPlayerLaserExit();
			laser.testForCollision();
			if(contactMade) {
				//console.log("disappear!");
				playerLaserArray.splice(index, 1);
			}
			contactMade = false;
		});
		
		enemyLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForEnemyLaserExit(index);
			laser.testForPlayerCollision(index);
		});
		
		turretLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForTurretLaserExit();
			laser.testForTEnemyCollision(index);
		});
		
		createLaserBox();
		createAbilityCircle();
		createAbility2Circle();
		createAbility3Circle();
		
		if(displayWaveTitle) {
			displayWave('Wave 9');
		}
		
		if(enemyArray.length === 0 && eCount >= 30) {
			displayCompletedScreen(9);
		}
		if(playerHealth <= 0) {
			endScreen();
		}
		
		ctx.restore();
	
		oldTime = currentTime;
	}
	animation = requestAnimationFrame(mainLoop9);
}

function checkForWave10Start() {
	if(waveNum === 9.9 && gamepad) {
		scanGamepads();
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let b = gamepad.buttons[i];
			if(b.pressed) {
				console.log("next wave");
				if(i === 0) {
					beginWave10();
				}
			}
		}
		//console.log("hello");
	}
	animation2 = requestAnimationFrame(checkForWave10Start);
}

function beginWave10() {
	killCount = 0;
	playerLaserArray = [];
	enemyArray = [];
	eCount = 0;
	t = 0;
	laserFired = 0;
	displayWaveTitle = true;
	waveNum = 10;
	oldTime = 0;
	enemyLaserArray = [];
	killCount2 = 0;
	continueSpawn = true;
	killCount3 = 0;
	activateShield = false;
	turret1.y = 275;
	turret1.speed = 700;
	newTime3 = 0;
	turretLaserArray = [];
	t2 = 0;
	moveTurretUp = true;
	moveTurretDown = true;

	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	inputImages();
	
	playerInfo.y = 300;
	
	clearInterval(interval1);
	clearInterval(interval2);
	cancelAnimationFrame(animation);
	cancelAnimationFrame(animation2);
	
	interval1 = setInterval(firePower, 500);
	interval2 = setInterval(displayTitle, 1000);
	spawnEnemies(10);
	
	requestAnimationFrame(mainLoop10);
	
	ctx.restore();
}

function mainLoop10(currentTime) {
	if(waveNum === 10 && gamepad) {
		
		scanGamepads();
		delta = currentTime - oldTime;
		let incY = calcDistanceToMove(delta, 400);
		
		ctx.save();
		ctx.clearRect(0, 0, w, h);
	
		inputImages();
		ctx.drawImage(imageObj2, 0, 0, 70, 70, 320, 10, 40, 40);
		ctx.drawImage(imageObj3, 0, 0, 70, 70, 670, 10, 40, 40);
		ctx.drawImage(imageObj4, 0, 0, 240, 210, 250, 10, 40, 40);
		ctx.drawImage(imageObj5, 0, 0, 70, 70, 800, 10, 40, 40);
		ctx.drawImage(imageObj6, 0, 0, 70, 70, 930, 10, 40, 40);
		
		drawHealth();
	
		checkForPlayerMove(incY);
		turret1.drawTurret();
		
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let button = gamepad.buttons[i];
			if(button.pressed) {
				if(i === 2 && killCount2 >= 50) {
					newTime = currentTime;
					freeze = true;
					killCount2 = 0;
					sound5.play();
				}
				else if(i === 7) {
					if(t > 15 && laserFired < 5) {
						let playerLaser = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
						playerLaserArray.push(playerLaser);
						sound2.play();
						t = 0;
						laserFired++;
					}
				}
				else if(i === 6 && killCount >= 5 && t > 15) {
					let playerLaserTop = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop);
					let playerLaserMid = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
					playerLaserArray.push(playerLaserMid);
					let playerLaserBottom = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom);
					let playerLaserTop2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop2);
					let playerLaserBottom2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom2);
					sound3.play();
					killCount = 0;
					t = 0;
				}
				else if(i === 1 && killCount3 >= 20) {
					newTime2 = currentTime;
					activateShield = true;
					killCount3 = 0;
				}
				else if(i === 13 && t2 > 5 && moveTurretDown) {
					turret1.y += 80;
					moveTurretUp = true;
					if(turret1.y >= 515) moveTurretDown = false;
					t2 = 0;
				}
				else if(i === 12 && t2 > 5 && moveTurretUp) {
					turret1.y -= 80;
					moveTurretDown = true;
					if(turret1.y <= 115) moveTurretUp = false;
					t2 = 0;
				}
			}
		}
		if(activateShield) {
			let shield = new Shield(playerInfo.x, playerInfo.y);
			shield.drawShield();
			shield.testCollision();
		}
		if(currentTime - newTime2 > 3000) {
			activateShield = false;
		}
		
		if(freeze) {
			enemyArray.forEach( function(enemy1) {
				enemy1.x += calcDistanceToMove(delta, enemy1.speed);
			});
			continueSpawn = false;
		}
		if(currentTime - newTime > 2000) {
			continueSpawn = true;
			freeze = false;
		}
		t++;
		t2++;
		
		if(sound2.currentTime > .1) {
			sound2.currentTime = 0;
			sound2.pause();
		}
		
		if(currentTime - newTime3 > 700) {
			turret1.fireLaser();
			newTime3 = currentTime;
		}
		
		enemyArray.forEach( function(enemy1, index) {
			enemy1.drawEnemy();
			enemy1.x -= calcDistanceToMove(delta, enemy1.speed);
			enemy1.testForExit(index);
		});
		
		playerLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForPlayerLaserExit();
			laser.testForCollision();
			if(contactMade) {
				//console.log("disappear!");
				playerLaserArray.splice(index, 1);
			}
			contactMade = false;
		});
		
		enemyLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForEnemyLaserExit(index);
			laser.testForPlayerCollision(index);
		});
		
		turretLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForTurretLaserExit();
			laser.testForTEnemyCollision(index);
		});
		
		createLaserBox();
		createAbilityCircle();
		createAbility2Circle();
		createAbility3Circle();
		
		if(displayWaveTitle) {
			displayWave('Wave 10');
		}
		
		if(enemyArray.length === 0 && eCount >= 30) {
			displayCompletedScreen(10);
		}
		if(playerHealth <= 0) {
			endScreen();
		}
		
		ctx.restore();
	
		oldTime = currentTime;
	}
	animation = requestAnimationFrame(mainLoop10);
}

function checkForWave11Start() {
	if(waveNum === 10.10 && gamepad) {
		scanGamepads();
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let b = gamepad.buttons[i];
			if(b.pressed) {
				console.log("next wave");
				if(i === 0) {
					beginWave11();
				}
			}
		}
		//console.log("hello");
	}
	animation2 = requestAnimationFrame(checkForWave11Start);
}

function beginWave11() {
	killCount = 0;
	playerLaserArray = [];
	enemyArray = [];
	eCount = 0;
	t = 0;
	laserFired = 0;
	displayWaveTitle = true;
	waveNum = 11;
	oldTime = 0;
	enemyLaserArray = [];
	killCount2 = 0;
	continueSpawn = true;
	killCount3 = 0;
	activateShield = false;
	turret1.y = 275;
	turret1.speed = 700;
	newTime3 = 0;
	turretLaserArray = [];
	t2 = 0;
	moveTurretUp = true;
	moveTurretDown = true;

	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	inputImages();
	
	playerInfo.y = 300;
	
	clearInterval(interval1);
	clearInterval(interval2);
	cancelAnimationFrame(animation);
	cancelAnimationFrame(animation2);
	
	interval1 = setInterval(firePower, 500);
	interval2 = setInterval(displayTitle, 1000);
	spawnEnemies(11);
	
	requestAnimationFrame(mainLoop11);
	
	ctx.restore();
}

function mainLoop11(currentTime) {
	if(waveNum === 11 && gamepad) {
		
		scanGamepads();
		delta = currentTime - oldTime;
		let incY = calcDistanceToMove(delta, 400);
		
		ctx.save();
		ctx.clearRect(0, 0, w, h);
	
		inputImages();
		ctx.drawImage(imageObj2, 0, 0, 70, 70, 320, 10, 40, 40);
		ctx.drawImage(imageObj3, 0, 0, 70, 70, 670, 10, 40, 40);
		ctx.drawImage(imageObj4, 0, 0, 240, 210, 250, 10, 40, 40);
		ctx.drawImage(imageObj5, 0, 0, 70, 70, 800, 10, 40, 40);
		ctx.drawImage(imageObj6, 0, 0, 70, 70, 930, 10, 40, 40);
		
		drawHealth();
	
		checkForPlayerMove(incY);
		turret1.drawTurret();
		
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let button = gamepad.buttons[i];
			if(button.pressed) {
				if(i === 2 && killCount2 >= 50) {
					newTime = currentTime;
					freeze = true;
					killCount2 = 0;
					sound5.play();
				}
				else if(i === 7) {
					if(t > 15 && laserFired < 5) {
						let playerLaser = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
						playerLaserArray.push(playerLaser);
						sound2.play();
						t = 0;
						laserFired++;
					}
				}
				else if(i === 6 && killCount >= 5 && t > 15) {
					let playerLaserTop = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop);
					let playerLaserMid = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
					playerLaserArray.push(playerLaserMid);
					let playerLaserBottom = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom);
					let playerLaserTop2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop2);
					let playerLaserBottom2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom2);
					sound3.play();
					killCount = 0;
					t = 0;
				}
				else if(i === 1 && killCount3 >= 20) {
					newTime2 = currentTime;
					activateShield = true;
					killCount3 = 0;
				}
				else if(i === 13 && t2 > 5 && moveTurretDown) {
					turret1.y += 80;
					moveTurretUp = true;
					if(turret1.y >= 515) moveTurretDown = false;
					t2 = 0;
				}
				else if(i === 12 && t2 > 5 && moveTurretUp) {
					turret1.y -= 80;
					moveTurretDown = true;
					if(turret1.y <= 115) moveTurretUp = false;
					t2 = 0;
				}
			}
		}
		if(activateShield) {
			let shield = new Shield(playerInfo.x, playerInfo.y);
			shield.drawShield();
			shield.testCollision();
		}
		if(currentTime - newTime2 > 3000) {
			activateShield = false;
		}
		
		if(freeze) {
			enemyArray.forEach( function(enemy1) {
				enemy1.x += calcDistanceToMove(delta, enemy1.speed);
			});
			continueSpawn = false;
		}
		if(currentTime - newTime > 2000) {
			continueSpawn = true;
			freeze = false;
		}
		t++;
		t2++;
		
		if(sound2.currentTime > .1) {
			sound2.currentTime = 0;
			sound2.pause();
		}
		
		if(currentTime - newTime3 > 700) {
			turret1.fireLaser();
			newTime3 = currentTime;
		}
		
		enemyArray.forEach( function(enemy1, index) {
			enemy1.drawEnemy();
			enemy1.x -= calcDistanceToMove(delta, enemy1.speed);
			enemy1.testForExit(index);
		});
		
		playerLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForPlayerLaserExit();
			laser.testForCollision();
			if(contactMade) {
				//console.log("disappear!");
				playerLaserArray.splice(index, 1);
			}
			contactMade = false;
		});
		
		enemyLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForEnemyLaserExit(index);
			laser.testForPlayerCollision(index);
		});
		
		turretLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForTurretLaserExit();
			laser.testForTEnemyCollision(index);
		});
		
		createLaserBox();
		createAbilityCircle();
		createAbility2Circle();
		createAbility3Circle();
		
		if(displayWaveTitle) {
			displayWave('Wave 11');
		}
		
		if(enemyArray.length === 0 && eCount >= 40) {
			displayCompletedScreen(11);
		}
		if(playerHealth <= 0) {
			endScreen();
		}
		
		ctx.restore();
	
		oldTime = currentTime;
	}
	animation = requestAnimationFrame(mainLoop11);
}

function checkForWave12Start() {
	if(waveNum === 11.11 && gamepad) {
		scanGamepads();
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let b = gamepad.buttons[i];
			if(b.pressed) {
				console.log("next wave");
				if(i === 0) {
					beginWave12();
				}
			}
		}
		//console.log("hello");
	}
	animation2 = requestAnimationFrame(checkForWave12Start);
}

function beginWave12() {
	killCount = 0;
	playerLaserArray = [];
	enemyArray = [];
	eCount = 0;
	t = 0;
	laserFired = 0;
	displayWaveTitle = true;
	waveNum = 12;
	oldTime = 0;
	enemyLaserArray = [];
	killCount2 = 0;
	continueSpawn = true;
	killCount3 = 0;
	activateShield = false;
	turret1.y = 275;
	turret1.speed = 700;
	newTime3 = 0;
	turretLaserArray = [];
	t2 = 0;
	moveTurretUp = true;
	moveTurretDown = true;

	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	inputImages();
	
	playerInfo.y = 300;
	
	clearInterval(interval1);
	clearInterval(interval2);
	cancelAnimationFrame(animation);
	cancelAnimationFrame(animation2);
	
	interval1 = setInterval(firePower, 500);
	interval2 = setInterval(displayTitle, 1000);
	spawnEnemies(12);
	
	requestAnimationFrame(mainLoop12);
	
	ctx.restore();
}

function mainLoop12(currentTime) {
	if(waveNum === 12 && gamepad) {
		
		scanGamepads();
		delta = currentTime - oldTime;
		let incY = calcDistanceToMove(delta, 400);
		
		ctx.save();
		ctx.clearRect(0, 0, w, h);
	
		inputImages();
		ctx.drawImage(imageObj2, 0, 0, 70, 70, 320, 10, 40, 40);
		ctx.drawImage(imageObj3, 0, 0, 70, 70, 670, 10, 40, 40);
		ctx.drawImage(imageObj4, 0, 0, 240, 210, 250, 10, 40, 40);
		ctx.drawImage(imageObj5, 0, 0, 70, 70, 800, 10, 40, 40);
		ctx.drawImage(imageObj6, 0, 0, 70, 70, 930, 10, 40, 40);
		
		drawHealth();
	
		checkForPlayerMove(incY);
		turret1.drawTurret();
		
		for(let i = 0; i < gamepad.buttons.length; i++) {
			let button = gamepad.buttons[i];
			if(button.pressed) {
				if(i === 2 && killCount2 >= 50) {
					newTime = currentTime;
					freeze = true;
					killCount2 = 0;
					sound5.play();
				}
				else if(i === 7) {
					if(t > 15 && laserFired < 5) {
						let playerLaser = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
						playerLaserArray.push(playerLaser);
						sound2.play();
						t = 0;
						laserFired++;
					}
				}
				else if(i === 6 && killCount >= 5 && t > 15) {
					let playerLaserTop = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop);
					let playerLaserMid = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30}, 0, 500, 'red');
					playerLaserArray.push(playerLaserMid);
					let playerLaserBottom = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 80}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom);
					let playerLaserTop2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 - 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserTop2);
					let playerLaserBottom2 = new Laser({x: 200, y: playerInfo.y + (playerInfo.height/2) - 30 + 160}, 0, 500, 'red');
					playerLaserArray.push(playerLaserBottom2);
					sound3.play();
					killCount = 0;
					t = 0;
				}
				else if(i === 1 && killCount3 >= 20) {
					newTime2 = currentTime;
					activateShield = true;
					killCount3 = 0;
				}
				else if(i === 13 && t2 > 5 && moveTurretDown) {
					turret1.y += 80;
					moveTurretUp = true;
					if(turret1.y >= 515) moveTurretDown = false;
					t2 = 0;
				}
				else if(i === 12 && t2 > 5 && moveTurretUp) {
					turret1.y -= 80;
					moveTurretDown = true;
					if(turret1.y <= 115) moveTurretUp = false;
					t2 = 0;
				}
			}
		}
		if(activateShield) {
			let shield = new Shield(playerInfo.x, playerInfo.y);
			shield.drawShield();
			shield.testCollision();
		}
		if(currentTime - newTime2 > 3000) {
			activateShield = false;
		}
		
		if(freeze) {
			enemyArray.forEach( function(enemy1) {
				enemy1.x += calcDistanceToMove(delta, enemy1.speed);
			});
			continueSpawn = false;
		}
		if(currentTime - newTime > 4000) {
			continueSpawn = true;
			freeze = false;
		}
		t++;
		t2++;
		
		if(sound2.currentTime > .1) {
			sound2.currentTime = 0;
			sound2.pause();
		}
		
		if(currentTime - newTime3 > 700) {
			turret1.fireLaser();
			newTime3 = currentTime;
		}
		
		enemyArray.forEach( function(enemy1, index) {
			enemy1.drawEnemy();
			enemy1.x -= calcDistanceToMove(delta, enemy1.speed);
			enemy1.testForExit(index);
		});
		
		playerLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForPlayerLaserExit();
			laser.testForCollision();
			if(contactMade) {
				//console.log("disappear!");
				playerLaserArray.splice(index, 1);
			}
			contactMade = false;
		});
		
		enemyLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForEnemyLaserExit(index);
			laser.testForPlayerCollision(index);
		});
		
		turretLaserArray.forEach( function(laser, index) {
			laser.createLaser();
			laser.origin.x += calcDistanceToMove(delta, laser.speed);
			laser.testForTurretLaserExit();
			laser.testForTEnemyCollision(index);
		});
		
		createLaserBox();
		createAbilityCircle();
		createAbility2Circle();
		createAbility3Circle();
		
		if(displayWaveTitle) {
			displayWave('Wave 12');
		}
		
		if(enemyArray.length === 0 && eCount >= 40) {
			displayCompletedScreen(12);
		}
		if(playerHealth <= 0) {
			endScreen();
		}
		
		ctx.restore();
	
		oldTime = currentTime;
	}
	animation = requestAnimationFrame(mainLoop12);
}