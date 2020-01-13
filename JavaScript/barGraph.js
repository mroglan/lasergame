let canvas, ctx, w, h;
let inputX1, inputX2, inputX3, inputX4, inputX5, inputY1, inputY2, inputY3, inputY4, inputY5;
let max;
let titleInput, xAxisTitle;

let box1 = {
	x: 100,
	y: 370+ 50,
	length: 140,
	height: 30
}

let box2 = {
	x: 240,
	y: 370+ 50,
	length: 140,
	height: 30
}

let box3 = {
	x: 380,
	y: 370+ 50,
	length: 140,
	height: 30
}

let box4 = {
	x: 520,
	y: 370+ 50,
	length: 140,
	height: 30
}

let box5 = {
	x: 660,
	y: 370+ 50,
	length: 140,
	height: 30
}

function init() {
	
	canvas = document.querySelector("#canvas");
	ctx = canvas.getContext('2d');
		
	w = canvas.width;
	h = canvas.height;
	
	ctx.clearRect(0,0, w, h);

	
	inputX1 = document.querySelector("#inputX1");
	inputX2 = document.querySelector("#inputX2");
	inputX3 = document.querySelector("#inputX3");
	inputX4 = document.querySelector("#inputX4");
	inputX5 = document.querySelector("#inputX5");
	inputY1 = document.querySelector("#inputY1");
	inputY2 = document.querySelector("#inputY2");
	inputY3 = document.querySelector("#inputY3");
	inputY4 = document.querySelector("#inputY4");
	inputY5 = document.querySelector("#inputY5");
	
	titleInput = document.querySelector("#graphTitle");
	xAxisTitle = document.querySelector("#xTitle");
	
	yAxis(inputY1.value, inputY2.value, inputY3.value, inputY4.value, inputY5.value);
	xAxis(inputX1.value, box1);
	xAxis(inputX2.value, box2);
	xAxis(inputX3.value, box3);
	xAxis(inputX4.value, box4);
	xAxis(inputX5.value, box5);
	
	createBar(inputY1.value, box1);
	createBar(inputY2.value, box2);
	createBar(inputY3.value, box3);
	createBar(inputY4.value, box4);
	createBar(inputY5.value, box5);
	
	addGraphTitle(titleInput.value);
	addXTitle(xAxisTitle.value);
}

function yAxis(a, b, c, d, e) {
	
	console.log(a);
	
	if(a == null) {
		a = 0;
	}
	if(b == null) {
		b = 0;
	}
	if(c == null) {
		c = 0;
	}
	if(d == null) {
		d = 0;
	}
	if(e == null) {
		e = 0;
	}
	
	max = Math.max(a, b, c, d, e);
	
	if(max >= 10) {
	let increments = max/10;
	
	ctx.font = "20px Arial";
	ctx.fillText(parseInt(max), 50, 50+ 50);
	
	ctx.fillText(parseInt(max-increments), 50, 80 + 50);
	ctx.fillText(parseInt(max-2*increments), 50, 110+ 50);
	ctx.fillText(parseInt(max-3*increments), 50, 140+ 50);
	ctx.fillText(parseInt(max-4*increments), 50, 170+ 50);
	ctx.fillText(parseInt(max-5*increments), 50, 200+ 50);
	ctx.fillText(parseInt(max-6*increments), 50, 230+ 50);
	ctx.fillText(parseInt(max-7*increments), 50, 260+ 50);
	ctx.fillText(parseInt(max-8*increments), 50, 290+ 50);
	ctx.fillText(parseInt(max-9*increments), 50, 320+ 50);
	ctx.fillText(parseInt(max-10*increments), 50, 350+ 50);
	}
	
	else {
		let increments = max/10;
	
	ctx.font = "20px Arial";
	ctx.fillText(max.toFixed(2), 50, 50+ 50);
	
	ctx.fillText((max-increments).toFixed(2), 50, 80+ 50);
	ctx.fillText((max-2*increments).toFixed(2), 50, 110+ 50);
	ctx.fillText((max-3*increments).toFixed(2), 50, 140+ 50);
	ctx.fillText((max-4*increments).toFixed(2), 50, 170+ 50);
	ctx.fillText((max-5*increments).toFixed(2), 50, 200+ 50);
	ctx.fillText((max-6*increments).toFixed(2), 50, 230+ 50);
	ctx.fillText((max-7*increments).toFixed(2), 50, 260+ 50);
	ctx.fillText((max-8*increments).toFixed(2), 50, 290+ 50);
	ctx.fillText((max-9*increments).toFixed(2), 50, 320+ 50);
	ctx.fillText((max-10*increments).toFixed(2), 50, 350+ 50);
	}

}

function xAxis(input, box) {
	ctx.save()
	
	ctx.translate(box.x, box.y);
	
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, box.width, box.height);

	ctx.textAlign = 'center';
	ctx.font = "20px Arial";
	ctx.fillText(input, 70, 0, 100);
	
	ctx.restore();
}

function createBar(input, box) {
	ctx.save();
	
	let boxHeight = (input/max) * 300;
	
	ctx.fillStyle = 'red';
	ctx.fillRect(box.x + 20, box.y - boxHeight - 20, 100, boxHeight);

	ctx.restore();
}

function addGraphTitle(title) {

	ctx.textAlign = 'center';
	ctx.font = "40px Arial";
	ctx.fillText(title, w/2, 50);
}

function addXTitle(title) {
	ctx.textAlign = 'center';
	ctx.font = "30px Arial";
	ctx.fillText(title, w/2, 460);
}


	

	
