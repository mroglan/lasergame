let canvas, ctx, w, h;

let newMonsterArray = [];

class Monster{
	
	constructor(x, y, width, height, radius) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.radius = radius;
	}
	
	createMonsterBody() {
		ctx.save();
	
		console.log(this.x);
		console.log(this.y);
		
		ctx.strokeStyle = 'blue';

		ctx.beginPath();
		
		ctx.moveTo(this.x + this.radius, this.y);
		ctx.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + this.radius, this.radius);
		ctx.arcTo(this.x + this.width, this.y + this.height, this.x + this.width - this.radius, this.y + this.height, this.radius);
		ctx.arcTo(this.x, this.y + this.height, this.x, this.y + this.height - this.radius, this.radius);
		ctx.arcTo(this.x, this.y, this.x + this.radius, this.y, this.radius);
		
		ctx.fillStyle = 'blue';
		ctx.strokeStyle = 'blue';
		
		ctx.fill();
		ctx.closePath();
		
		ctx.restore();
	}
	
	createMonsterMouth() {
		ctx.save();
		
		ctx.translate(this.x, this.y);
		
		ctx.beginPath();
		
		ctx.moveTo(.1 * this.width, .66 * this.height);
		ctx.quadraticCurveTo(.5 * this.width, this.height, .9 * this.width, .66 * this.height);
		
		ctx.lineWidth = .05 * this.width;
		if(ctx.lineWidth < 1) {
			ctx.lineWidth = 1;
		}
		ctx.strokeStyle = 'red';
		
		ctx.stroke();
		
		ctx.closePath();
		
		ctx.restore();
	}
	
	createMonsterEyes() {
		ctx.save();
		
		ctx.translate(this.x, this.y);
		
		ctx.beginPath();
		
		ctx.fillStyle = 'white';
		ctx.arc(.3 * this.width, .35 * this.height, .1 * this.height, 0, 2 * Math.PI);
		ctx.arc(.7 * this.width, .35 * this.height, .1 * this.height, 0, 2 * Math.PI);
		ctx.fill();
		
		ctx.closePath();
		
		ctx.beginPath();
		
		ctx.fillStyle = 'green';
		
		ctx.arc(.3 * this.width, .35 * this.height, .1 * this.height, 0, Math.PI);
		ctx.arc(.7 * this.width, .35 * this.height, .1 * this.height, 0, Math.PI);
		ctx.fill();
		
		ctx.restore();
		
	}
	

}


function init() {
	
	canvas = document.querySelector("#canvas");
	ctx = canvas.getContext('2d');
	w = canvas.width;
	h = canvas.height;
	
	let numberOfMonsters = document.querySelector("#monsterNumber").value;
	
	createMonsters(numberOfMonsters);

}

function createMonsters(num) {
	
	newMonsterArray = [];
	ctx.clearRect(0, 0, w, h);
	
	for(i = 0; i < num; i++) {
		
	let mw = Math.round(Math.random()*100) + 15;
	let mh = Math.round(Math.random()*100) + 15;
	let mr = Math.round(Math.random()*50);
	
	while(mr > mw - 15 || mr > mh - 15) {
		mr = Math.round(Math.random()*50);
	}
	
		let newMonster = new Monster(Math.round(Math.random()*700), Math.round(Math.random()*300), 
		mw, mh, mr);
		
		newMonsterArray.push(newMonster);
	}
	
	newMonsterArray.forEach(function(m) {
		m.createMonsterBody();
		m.createMonsterMouth();
		m.createMonsterEyes();
	});
}


