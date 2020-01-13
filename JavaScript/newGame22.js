let canvas, ctx, w, h;
let menu = false;
let mousePos;
let event1, event2, event3, event4, event5, event6, event7, event8, event9;
let complete1, complete2, complete3, complete4, complete5 = false;
let score = 0;
let q1Submitted, q2Submitted, q3Submitted, q4Submitted, q5Submitted = false;
let correctAnswer;
let canClick;

let battle1 = {
	x: 85,
	y: 380
}
let battle2 = {
	x: 181,
	y: 242
}
let battle3 = {
	x: 128, 
	y: 160
}
let battle4 = {
	x: 364,
	y: 178
}
let battle5 = {
	x: 517,
	y: 274
}

let macText = "Hello explorer of the Old World. You have a long journey in front of you but where the willingness is great, the difficulties cannot be great. You will find that to achieve constant success you must change your conduct with the times. Never attempt to win by force what can be won by deception. All courses of action are risky, so prudence is not in avoiding danger (it's impossible), but calculating risk and acting decisively. Be feared not loved, but remember Everyone sees what you appear to be, few experience what you really are.";
let q1Text = "Who is known as the “father of humanism” and is famous for translating ancient texts from people like Cicero?";
let q2Text = "Which of the following is not a characteristic of Northern Renaissance Art?";
let q3Text = "This person would publish Utopia and find himself executed under Henry VIII for not signing the Act of                 Supremacy.";
let q4Text = "This banking family would grow the most in wealth and power in Florence during the Renaissance.";
let q5Text = "What were areas in Italy divided into at the start of the        Renaissance?";

let colText = "Hello novice! I see you have so far found success on your journey.  To complete this journey, to cross this ocean, you must have the courage to lose sight of the shore. Fear not to undertake any task, but remember the riches you get don’t make any man rich, they only make him busier. By prevailing over all obstacles and distractions, you may unfailingly arrive at your chosen goal or destination. Thanks be to God.";
let q1Text2 = "Which of the following is the name for the system of forced labor used by Spain in its colonies?";
let q2Text2 = "Which of the following is not a new maritime technology crucial for the Age of Exploration?";
let q3Text2 = "Which of the following was not brought from the New to the Old World in the Columbian Exchange?";
let q4Text2 = "What was the treaty that divided colonization between Spain and Portugal and when was it signed?";
let q5Text2 = "This Portuguese explorer greatly expanded Portuguese trade in India and conquered Malacca for Portugal in          1511.";

let henryText = "Good day traveler. I have some advice for you as you resume your journey. Of all losses, time is the most irrecuperable for it can never be redeemed. Make haste.";
let q1Text3 = "Luther's doctrine of 'Christian Freedom' also meant political freedom";
let q2Text3 = "Which of the following is not a characteristic of Calvinism?";
let q3Text3 = "Which Pope denied Henry VIII an annulment for his               marraige?";
let q4Text3 = "This protestant group would first perform adult baptisms in 1525.";
let q5Text3 = "In this castle, Luther would translate the New Testement into German.";

let charlesText = "So, explorer of this canvas element, you believe you have the knowledge to succeed? To achieve your goal, I recommend speaking Spanish to God, Italian to women, French to men, and German to your horse. On this journey you will need to make war on the living, not the dead, for those who believe in ghosts always see them. Have an iron hand in a velvet glove. But above all, follow my strategy to victory: I come, I see, God                conquers.";
let q1Text4 = "Which of the following was not a family that fought for control of France during the French Wars of Religion?";
let q2Text4 = "Phillip II's imposition of the decrees from the Council of Trent in the Netherlands would eventually lead to this event in 1576.";
let q3Text4 = "Which event marks the beginning of the 30 Years War?";
let q4Text4 = "This man was executed by H.R.E. Ferdinand II after trying to negotiate with Sweden for a complete re-organization of the Empire.";
let q5Text4 = "Which of the following is not true of the Treaty of Westphalia (1648)?";

let louisText = "Congratulations on your success thus far but be prepared for some absolute challenges ahead of you. Always follow good counsels but remember it is impossible to please all the world. We can do all we wish while we live; afterward, we are less than the meanest. You should learn to moderate your ambition. The higher you elevate yourself above your proper sphere, the greater the danger you will fall.";
let q1Text5 = "This cardinal had an oppressive policy towards Huguenots and sought to centralize power in France.";
let q2Text5 = "Which of the following is not true regarding the Treaty of            Utrecht?";
let q3Text5 = "Which Enlightened Despot is known for extending religious toleration, acquiring Silesia in 1742, and being           anti-Maciavelian?";
let q4Text5 = "Which of the following was not done under Joseph II?";
let q5Text5 = "When was the Diplomatic Revolution?";

window.onload = function() {
	
	canvas = document.querySelector("#canvas");
	ctx = canvas.getContext('2d');
	w = canvas.width;
	h = canvas.height;
	
	openingMenu();
}

function openingMenu() {
	
	ctx.save();
	
	ctx.fillStyle = 'lightblue';
	ctx.fillRect(0, 0, w, h);
	
	ctx.fillStyle = "black";
	ctx.textAlign = 'center';
	ctx.font = "50px Arial";
	ctx.fillText("European History", w/2, 200);
	createStartButton(w/2 - 50, h/2);
	
	ctx.restore();
	
	checkForStart();
}

function createStartButton(x, y) {
	ctx.save();
	
	ctx.translate(x, y);
	
	ctx.fillStyle = "gray";
	ctx.fillRect(0, 0, 100, 50);
	
	ctx.fillStyle = "red";
	ctx.textAlign = 'center';
	ctx.font = "30px Arial";
	ctx.fillText("Start!", 50, 35);
	
	ctx.restore();
}

function checkForStart() {
	
	event1 = function(e) {
		mousePos = getMousePos(e);
		console.log(mousePos.x + ", " + mousePos.y);
	}
	
	canvas.addEventListener('mousemove', event1);
	
	event2 = function(e) {
		console.log("clicked");
		if(mousePos.x > w/2 - 50 && mousePos.x < w/2 + 50) {
			console.log("Stage 1 passed");
			if(mousePos.y > 250 && mousePos.y < 300) {
				console.log("Stage 2 passed");
				beginGame();
			}
		}
	}
	
	canvas.addEventListener('mousedown', event2);
}

function getMousePos(e) {
	let rect = canvas.getBoundingClientRect();
	
	return {
		x: e.clientX - rect.left,
		y: e.clientY - rect.top
	}
}

function beginGame() {
	console.log("game begun");
	canvas.removeEventListener('mousedown', event2);
	
	ctx.clearRect(0, 0, w, h);
	loadGameMap();
}

function loadGameMap() {
	
	ctx.save();
	
	let pattern1;
	
	let imageObj = new Image();
	
	imageObj.src = "media/map.png";
	
	imageObj.onload = function() {
		pattern1 = ctx.createPattern(imageObj, "no-repeat");
		ctx.fillStyle = pattern1;
		ctx.fillRect(0, 0, w, h);
		
		ctx.fillStyle = 'lightblue';
		ctx.fillRect(850, 0, 150, h);
		
		loadGameBattles();
	}
	
	ctx.restore();
}

function loadGameBattles() {
	


	connectBattles(battle1.x, battle1.y, battle2.x, battle2.y);
	connectBattles(battle2.x, battle2.y, battle3.x, battle3.y);
	connectBattles(battle3.x, battle3.y, battle4.x, battle4.y);
	connectBattles(battle4.x, battle4.y, battle5.x, battle5.y);
	createBattle(battle1.x, battle1.y, 1, complete1);
	createBattle(battle2.x, battle2.y, 2, complete2);
	createBattle(battle3.x, battle3.y, 3, complete3);
	createBattle(battle4.x, battle4.y, 4, complete4);
	createBattle(battle5.x, battle5.y, 5, complete5);
	
	startBattles();
}

function createBattle(x, y, num, complete) {
	ctx.save();
	
	if(!complete){
		
		ctx.fillStyle = 'red';
		ctx.beginPath();
		ctx.arc(x, y, 10, 0, 2 * Math.PI);
		ctx.fill();
		ctx.closePath();
		
		ctx.fillStyle = 'black';
		ctx.textAlign = 'center';
		ctx.font = "20px Arial";
		ctx.fillText(num, x, y + 8);
	}
	
	else {
		ctx.fillStyle = 'green';
		ctx.beginPath();
		ctx.arc(x, y, 10, 0, 2 * Math.PI);
		ctx.fill();
		
		ctx.textAlign = 'center';
		ctx.font = '15px Arial';
		ctx.fillText("VICTORY", x, y + 20);
	}
	
	ctx.restore();
}

function connectBattles(x1, y1, x2, y2) {
	ctx.save();
	
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = 'black';
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
	ctx.closePath();
	
	ctx.restore();
}

function startBattles() {
	
	menu = true;
	
	event3 = function(e) {
		
		if(mousePos.x < battle1.x + 10 && mousePos.x > battle1.x - 10) {
			if(mousePos.y < battle1.y + 10 && mousePos.y > battle1.y - 10) {
					beginBattle1();
			}
		}
		if(mousePos.x < battle2.x + 10 && mousePos.x > battle2.x - 10) {
			if(mousePos.y < battle2.y + 10 && mousePos.y > battle2.y - 10) {
					beginBattle2();
			}
		}
		if(mousePos.x < battle3.x + 10 && mousePos.x > battle3.x - 10) {
			if(mousePos.y < battle3.y + 10 && mousePos.y > battle3.y - 10) {
					beginBattle3();
			}
		}
		if(mousePos.x < battle4.x + 10 && mousePos.x > battle4.x - 10) {
			if(mousePos.y < battle4.y + 10 && mousePos.y > battle4.y - 10) {
					beginBattle4();
			}
		}
		if(mousePos.x < battle5.x + 10 && mousePos.x > battle5.x - 10) {
			if(mousePos.y < battle5.y + 10 && mousePos.y > battle5.y - 10) {
					beginBattle5();
			}
		}
	}
	
	canvas.addEventListener('mousedown', event3);
	canvas.removeEventListener('mousemove', event1);
	
	event4 = function(e) {
		mousePos = getMousePos(e);
		console.log(mousePos.x + ", " + mousePos.y);
		if(mousePos.x < battle1.x + 10 && mousePos.x > battle1.x - 10 && mousePos.y < battle1.y + 10 && mousePos.y > battle1.y - 10) {
			canvas.className = "cursor";
		}
		else if(mousePos.x < battle2.x + 10 && mousePos.x > battle2.x - 10 && mousePos.y < battle2.y + 10 && mousePos.y > battle2.y - 10) {
			canvas.className = "cursor";
		}
		else if(mousePos.x < battle3.x + 10 && mousePos.x > battle3.x - 10 && mousePos.y < battle3.y + 10 && mousePos.y > battle3.y - 10) {
			canvas.className = "cursor";
		}
		else if(mousePos.x < battle4.x + 10 && mousePos.x > battle4.x - 10 && mousePos.y < battle4.y + 10 && mousePos.y > battle4.y - 10) {
			canvas.className = "cursor";
		}
		else if(mousePos.x < battle5.x + 10 && mousePos.x > battle5.x - 10 && mousePos.y < battle5.y + 10 && mousePos.y > battle5.y - 10) {
			canvas.className = "cursor";
		}
		else
			canvas.className -= "cursor";
	}
	canvas.addEventListener('mousemove', event4);
}
	
function beginBattle1() {
	
	canvas.className -= "cursor";
	
	canvas.removeEventListener('mousedown', event3);
	canvas.removeEventListener('mousemove', event4);
	
	if(!complete1) {
		console.log("Battle 1 begun");
		loadBattle1Intro();
	}
	
	else {
		alert("Battle Completed Already!");
		ctx.clearRect(0, 0, w, h);
		loadGameMap();
	}
}

function loadBattle1Intro() {
	
	event5 = function(e) {
		mousePos = getMousePos(e);
		console.log(mousePos.x + ", " + mousePos.y);
		if(mousePos.x > 700 && mousePos.x < 1000 && mousePos.y < 475 && mousePos.y > 375) {
			canvas.className = "cursor";
		}
		else if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.className = "cursor";
		}
		else {
			canvas.className -= "cursor";
		}
	}
	
	event6 = function(e) {
		if(mousePos.x > 700 && mousePos.x < 1000 && mousePos.y < 475 && mousePos.y > 375) {
			if(!q1Submitted) {
				battle1Q1();
			}
			else if(!q2Submitted) {
				battle1Q2();
			}
			else if(!q3Submitted) {
				battle1Q3();
			}
			else if(!q4Submitted) {
				battle1Q4();
			}
			else if(!q5Submitted) {
				battle1Q5();
			}
			else {
				scoreReport(1);
			}
		}
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event5);
			canvas.removeEventListener('mousedown', event6);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
	}
	
	
	canvas.addEventListener('mousemove', event5);
	canvas.addEventListener('mousedown', event6);
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	ctx.fillStyle = '#368190';
	ctx.fillRect(0, 0, w, h);
	
	let imageObj = new Image();
	imageObj.src = "media/machiavelli2.png";
	
	imageObj.onload = function() {
		let pattern1 = ctx.createPattern(imageObj, "no-repeat");
		
		ctx.fillStyle = pattern1;
		ctx.fillRect(0, 0, 315, 350);
	}
	
	insertBattle1Text();
	
	createBattleArrow('The Renaissance');
	
	createBackButton();
	
	ctx.restore();
}

function insertBattle1Text() {
	ctx.save();
	
	ctx.translate(350, 50);
	
	ctx.fillStyle = '#88C7D4';
	ctx.fillRect(0, 0, 500, 300);
	
	ctx.lineJoin = 'round';
	ctx.lineWidth = 10;
	ctx.strokeStyle = 'blue';
	ctx.strokeRect(0, 0, 500, 300);
	
	ctx.fillStyle = 'black';
	wrapText(macText, 10, 10, 400, 20, 'Arial');
	
	ctx.restore();
}

function wrapText(text, x, y, maxWidth, fontSize, fontFace){
  var firstY=y;
  var words = text.split(' ');
  var line = '';
  var lineHeight=fontSize * 1.125; // a good approx for 10-18px sizes

  ctx.font=fontSize+"px "+fontFace;
  ctx.textBaseline='top';

  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = ctx.measureText(testLine);
    var testWidth = metrics.width;
    if(testWidth > maxWidth) {
      ctx.fillText(line, x, y);
      if(n<words.length-1){
          line = words[n] + ' ';
          y += lineHeight;
      }
    }
    else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

function createBattleArrow(inputText) {
	ctx.save();
	
	ctx.fillStyle = 'red';
	ctx.fillRect(700, 400, 200, 50);
	
	ctx.strokeStyle = 'red';
	ctx.beginPath();
	ctx.moveTo(900, 350);
	ctx.lineTo(1000, 425);
	ctx.lineTo(900, 500);
	ctx.lineTo(900, 350);
	ctx.fill(); 
	ctx.closePath();
	
	ctx.translate(700, 400);
	ctx.fillStyle = 'black';
	ctx.font = "30px Arial";
	ctx.fillText(inputText, 0, 40);
	
	ctx.restore();
}

function createBackButton() {
	ctx.save();
	
	ctx.translate(50, 450);
	ctx.lineJoin = 'round';
	ctx.strokeStyle = 'gray';
	ctx.lineWidth = 10;
	ctx.strokeRect(0, 0, 150, 50);
	
	ctx.textAlign = 'center';
	ctx.fillStyle = '#C32F3E';
	ctx.font = "40px Arial";
	ctx.fillText("Back", 75, 40); 
	
	ctx.restore();
} 

function battle1Q1() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	event7 = function(e) {
		mousePos = getMousePos(e);
		console.log(mousePos.x + ", " + mousePos.y);
		
		ctx.save();
		
		ctx.strokeStyle = 'black';
		ctx.lineWidth = 5;
		ctx.lineJoin = 'round';
		
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.className = "cursor";
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.className = "cursor";
		}
		
		else {
			canvas.className -= "cursor";
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				canvas.className = "cursor";
				ctx.strokeRect(100, 275, 800, 50);
				ctx.strokeRect(100, 325, 800, 50);
				ctx.strokeRect(100, 375, 800, 50);
			
				ctx.strokeStyle = 'yellow';
				ctx.strokeRect(100, 225, 800, 50);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				canvas.className = "cursor";
				ctx.strokeRect(100, 325, 800, 50);
				ctx.strokeRect(100, 375, 800, 50);
				ctx.strokeRect(100, 225, 800, 50);
			
				ctx.strokeStyle = 'yellow';
				ctx.strokeRect(100, 275, 800, 50);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				canvas.className = "cursor";
				ctx.strokeRect(100, 375, 800, 50);
				ctx.strokeRect(100, 225, 800, 50);
				ctx.strokeRect(100, 275, 800, 50);
			
				ctx.strokeStyle = 'yellow'
				ctx.strokeRect(100, 325, 800, 50);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				canvas.className = "cursor";
				ctx.strokeRect(100, 225, 800, 50);
				ctx.strokeRect(100, 275, 800, 50);
				ctx.strokeRect(100, 325, 800, 50);
			
				ctx.strokeStyle = 'yellow';
				ctx.strokeRect(100, 375, 800, 50);
			}
			else { 
				ctx.strokeRect(100, 275, 800, 50);
				ctx.strokeRect(100, 325, 800, 50);
				ctx.strokeRect(100, 375, 800, 50);
				ctx.strokeRect(100, 225, 800, 50);
			}
		}
		
		ctx.restore();
	} 
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q1Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle1Q2();
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Thomas Aquinas', 100, 225, 800, 50, 1);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Petrarch', 100, 275, 800, 50, 1);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Mirandola', 100, 325, 800, 50, 1);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Castiglione', 100, 375, 800, 50, 1);
			}
		}
	}
	
	canvas.addEventListener('mousemove', event7);
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Petrarch';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q1Text);
	createBackButton();
	createNextButton();
	createAnswers('Thomas Aquinas', 'Petrarch', 'Mirandola', 'Castiglione');
	
	ctx.restore();
}

function createQuestion(qText) {
	ctx.save();	
	
	ctx.translate(100, 50);
	ctx.strokeStyle = 'black';
	ctx.lineJoin = 'round';
	ctx.lineWidth = 5;
	ctx.strokeRect(0, 0, 800, 150);
	
	ctx.fillStyle = 'black';
	wrapText(qText, 10, 10, 780, 30, 'Arial');
	
	ctx.restore();
}

function createAnswers(ansA, ansB, ansC, ansD) {
	ctx.save();
	
	ctx.strokeStyle = 'black';
	ctx.lineJoin = 'round';
	ctx.lineWidth = 5;
	
	ctx.strokeRect(100, 225, 800, 50);
	ctx.strokeRect(100, 275, 800, 50);
	ctx.strokeRect(100, 325, 800, 50);
	ctx.strokeRect(100, 375, 800, 50);
	
	ctx.fillStyle = 'black';
	ctx.font = "40px Arial";
	ctx.fillText(ansA, 100, 270);
	ctx.fillText(ansB, 100, 320);
	ctx.fillText(ansC, 100, 370);
	ctx.fillText(ansD, 100, 420);
	
	ctx.restore();
}

function createNextButton() {
	ctx.save();
	
	ctx.translate(800, 450);
	ctx.lineJoin = 'round';
	ctx.strokeStyle = 'gray';
	ctx.lineWidth = 10;
	ctx.strokeRect(0, 0, 150, 50);
	
	ctx.textAlign = 'center';
	ctx.fillStyle = '#C32F3E';
	ctx.font = "40px Arial";
	ctx.fillText("Next", 75, 40); 
	
	ctx.restore();
}

function checkAnswer(input, x, y, width, height, n) {
	ctx.save();
	canClick = false;
	if(n == 1) {
		q1Submitted = true;
	}
	if(n == 2) {
		q2Submitted = true;
	}
	if(n == 3) {
		q3Submitted = true;
	}
	if(n ==4) {
		q4Submitted = true;
	}
	if(n ==5) {
		q5Submitted = true;
	}
	
	if(input == correctAnswer) {
		
		ctx.strokeStyle = 'green';
		ctx.lineWidth = 5;
		ctx.lineJoin = 'round';
		ctx.strokeRect(x, y, width, height);
		
		ctx.fillStyle = 'green';
		ctx.textAlign = 'center';
		ctx.font = '40px Arial';
		ctx.fillText('Correct!', w/2, 480);
		
		ctx.translate(800, 450);
		ctx.textAlign = 'center';
		ctx.fillStyle = 'green';
		ctx.font = "40px Arial";
		ctx.fillText("Next", 75, 40); 
		
		score++;
	}
	
	else {
		ctx.strokeStyle = 'red';
		ctx.lineWidth = 5;
		ctx.lineJoin = 'round';
		ctx.strokeRect(x, y, width, height);
		
		ctx.fillStyle = 'red';
		ctx.textAlign = 'center';
		ctx.font = '40px Arial';
		ctx.fillText('Incorrect!', w/2, 480);
		
		ctx.translate(800, 450);
		ctx.textAlign = 'center';
		ctx.fillStyle = 'green';
		ctx.font = "40px Arial";
		ctx.fillText("Next", 75, 40); 
	}
	ctx.restore();
}

function battle1Q2() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	canvas.addEventListener('mousemove', event7);
	
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q2Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle1Q3();
			}
			else {
				console.log("hello");
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Intense realism', 100, 225, 800, 50, 2);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Oil paintings on wood panels', 100, 275, 800, 50, 2);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Mostly funded by the Church', 100, 325, 800, 50, 2);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Magellan', 100, 375, 800, 50, 2);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Mostly funded by the Church';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q2Text);
	createBackButton();
	createNextButton();
	createAnswers('Intense realism', 'Oil paintings on wood panels', 'Mostly funded by the Church', 'Magellan');
	
	ctx.restore();
}

function battle1Q3() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	canvas.addEventListener('mousemove', event7); 
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q3Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle1Q4();
			}
			else {
				console.log("hello");
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Sir Thomas More', 100, 225, 800, 50, 3);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Erasmus', 100, 275, 800, 50, 3);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('John Calvin', 100, 325, 800, 50, 3);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Holbein', 100, 375, 800, 50, 3);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Sir Thomas More';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q3Text);
	createBackButton();
	createNextButton();
	createAnswers('Sir Thomas More', 'Erasmus', 'John Calvin', 'Holbein');
	
	ctx.restore();
}

function battle1Q4() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	canvas.addEventListener('mousemove', event7); 
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q4Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle1Q5();
			}
			else {
				console.log("hello");
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Aragon', 100, 225, 800, 50, 4);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Sforza', 100, 275, 800, 50, 4);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Medici', 100, 325, 800, 50, 4);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Colonna', 100, 375, 800, 50, 4);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Medici';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q4Text);
	createBackButton();
	createNextButton();
	createAnswers('Aragon', 'Sforza', 'Medici', 'Colonna');
	
	ctx.restore();
}

function battle1Q5() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	canvas.addEventListener('mousemove', event7); 
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q5Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				canvas.className -= "cursor";
				scoreReport(1);
			}
			else {
				console.log("hello");
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Kingdoms', 100, 225, 800, 50, 5);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Provinces', 100, 275, 800, 50, 5);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Provinces', 100, 325, 800, 50, 5);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('City-States', 100, 375, 800, 50, 5);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'City-States';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q5Text);
	createBackButton();
	createNextButton();
	createAnswers('Kingdoms', 'Fiefs', 'Provinces', 'City-States');
	
	ctx.restore();
}

function scoreReport(n) {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	canvas.className -= "cursor";
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	ctx.textAlign = 'center';
	ctx.fillStyle = 'black';
	ctx.font = '100px Arial';
	
	if(score > 3) {
		ctx.fillText('Score: ' + ((score/5) * 100) + "%", w/2, h/3);
		ctx.fillStyle = 'green';
		ctx.fillText('VICTORY', w/2, h/3 + 130);
		
		score = 0;
		
		if(n == 1) {
			complete1 = true;
		}
		else if(n == 2) {
			complete2 = true;
		}
		else if(n == 3) {
			complete3 = true;
		}
		else if(n == 4) {
			complete4 = true;
		}
		else if(n == 5) {
			complete5 = true;
		}
	}
	else {
		ctx.fillText('Score: ' + ((score/5) * 100) + "%", w/2, h/3);
		ctx.fillText('DEFEAT', w/2, h/3 + 130);
		score = 0;
	}
	
		q1Submitted = false;
		q2Submitted = false;
		q3Submitted = false;
		q4Submitted = false;
		q5Submitted = false;
	
	ctx.strokeStyle = 'gray';
	ctx.lineJoin = 'round';
	ctx.strokeRect(w/3, 2 * h/3, w/3, 100);
	ctx.fillStyle = 'gray';
	ctx.fillRect(w/3, 2 * h/3, w/3, 100);
	
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.font = '50px Arial';
	ctx.fillText("Return to Map", w/2, 2 * h/3 + 70);
	
	ctx.restore();
	
	event9 = function(e) {
		if(mousePos.x > w/3 && mousePos.x < 2 * w/3 && mousePos.y > 2 * h/3 && mousePos.y < 2 * h/3 + 100) {
			canvas.removeEventListener('mousedown', event9);
			canvas.removeEventListener('mousemove', event1);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
	}
	
	canvas.addEventListener('mousedown', event9);
	canvas.addEventListener('mousemove', event1);
	
}
	
function beginBattle2() {
	
	canvas.className -= "cursor";
	
	canvas.removeEventListener('mousedown', event3);
	canvas.removeEventListener('mousemove', event4);
	
	if(!complete1) {
		alert("You are not at this battle yet");
		ctx.clearRect(0, 0, w, h);
		loadGameMap();
	}
	else if(complete2) {
		alert("Battle completed already!");
		ctx.clearRect(0, 0, w, h);
		loadGameMap();
	}
	else {
		console.log("Battle 2 begun");
		loadBattle2Intro();
	}
}

function loadBattle2Intro() {
	
	canvas.addEventListener('mousemove', event5);
	
	event6 = function(e) {
		if(mousePos.x > 700 && mousePos.x < 1000 && mousePos.y < 475 && mousePos.y > 375) {
			if(!q1Submitted) {
				battle2Q1();
			}
			else if(!q2Submitted) {
				battle2Q2();
			}
			else if(!q3Submitted) {
				battle2Q3();
			}
			else if(!q4Submitted) {
				battle2Q4();
			}
			else if(!q5Submitted) {
				battle2Q5();
			}
			else {
				scoreReport(2);
			}
		}
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event5);
			canvas.removeEventListener('mousedown', event6);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
	}
	
	canvas.addEventListener('mousedown', event6);
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	ctx.fillStyle = '#1BA243';
	ctx.fillRect(0, 0, w, h);
	
	createBattleArrow('Age of Discovery');
	
	createBackButton();
	
	let imageObj = new Image();
	imageObj.src = 'media/columbus.png';
	imageObj.onload = function() {
		let pattern1 = ctx.createPattern(imageObj, 'no-repeat');
		ctx.fillStyle = pattern1;
		ctx.fillRect(0, 0, 288, 350);
	}
	
	insertBattle2Text();
	
	ctx.restore();
}

function insertBattle2Text() {
	ctx.save();
	
	ctx.translate(350, 50);
	
	ctx.fillStyle = '#70B384';
	ctx.fillRect(0, 0, 500, 300);
	
	ctx.lineJoin = 'round';
	ctx.lineWidth = 10;
	ctx.strokeStyle = '#17D751';
	ctx.strokeRect(0, 0, 500, 300);
	
	ctx.fillStyle = 'black';
	wrapText(colText, 10, 10, 400, 20, 'Arial');
	
	ctx.restore();
}

function battle2Q1() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q1Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle2Q2();
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Encomienda', 100, 225, 800, 50, 1);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Creole', 100, 275, 800, 50, 1);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Columbian Exchange', 100, 325, 800, 50, 1);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Gabille', 100, 375, 800, 50, 1);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Encomienda';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q1Text2);
	createBackButton();
	createNextButton();
	createAnswers('Encomienda', 'Creole', 'Columbian Exchange', 'Gabille');
	
	ctx.restore();
}

function battle2Q2() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q2Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle2Q3();
			}
			else {
				console.log("hello");
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Sextant', 100, 225, 800, 50, 2);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Mariners Compass', 100, 275, 800, 50, 2);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Sword', 100, 325, 800, 50, 2);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Astrolabe', 100, 375, 800, 50, 2);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Sword';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q2Text2);
	createBackButton();
	createNextButton();
	createAnswers('Sextant', "Mariner's Compass", 'Sword', 'Astrolabe');
	
	ctx.restore();
}

function battle2Q3() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q3Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle2Q4();
			}
			else {
				console.log("hello");
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Syphilis', 100, 225, 800, 50, 3);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Horses', 100, 275, 800, 50, 3);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Corn', 100, 325, 800, 50, 3);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Tobacco', 100, 375, 800, 50, 3);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Horses';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q3Text2);
	createBackButton();
	createNextButton();
	createAnswers('Syphilis', 'Horses', 'Corn', 'Tobacco');
	
	ctx.restore();
}
	
function battle2Q4() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q4Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle2Q5();
			}
			else {
				console.log("hello");
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Tordesillas (1492)', 100, 225, 800, 50, 4);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Utrecht (1499)', 100, 275, 800, 50, 4);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Tordesillas (1494)', 100, 325, 800, 50, 4);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Utrecht (1495)', 100, 375, 800, 50, 4);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Tordesillas (1494)';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q4Text2);
	createBackButton();
	createNextButton();
	createAnswers('Tordesillas (1492)', 'Utrecht (1499)', 'Tordesillas (1494)', 'Utrecht (1495)');
	
	ctx.restore();
}

function battle2Q5() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q5Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				canvas.className -= "cursor";
				scoreReport(2);
			}
			else {
				console.log("hello");
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Bartolomeo Dias', 100, 225, 800, 50, 5);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Alfonso de Albuquerque', 100, 275, 800, 50, 5);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Vasco de Gama', 100, 325, 800, 50, 5);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Pizarro', 100, 375, 800, 50, 5);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Alfonso de Albuquerque';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q5Text2);
	createBackButton();
	createNextButton();
	createAnswers('Bartolomeo Dias', 'Alfonso de Albuquerque', 'Vasco de Gama', 'Pizarro');
	
	ctx.restore();
}

function beginBattle3() {
	
	canvas.className -= "cursor";
	
	canvas.removeEventListener('mousedown', event3);
	canvas.removeEventListener('mousemove', event4);
	
	if(!complete2) {
		alert("You are not at this battle yet");
		ctx.clearRect(0, 0, w, h);
		loadGameMap();
	}
	else if(complete3) {
		alert("Battle completed already!");
		ctx.clearRect(0, 0, w, h);
		loadGameMap();
	}
	else {
		console.log("Battle 3 begun");
		loadBattle3Intro();
	}
}

function loadBattle3Intro() {
	
	canvas.addEventListener('mousemove', event5);
	
	event6 = function(e) {
		if(mousePos.x > 700 && mousePos.x < 1000 && mousePos.y < 475 && mousePos.y > 375) {
			if(!q1Submitted) {
				battle3Q1();
			}
			else if(!q2Submitted) {
				battle3Q2();
			}
			else if(!q3Submitted) {
				battle3Q3();
			}
			else if(!q4Submitted) {
				battle3Q4();
			}
			else if(!q5Submitted) {
				battle3Q5();
			}
			else {
				scoreReport(3);
			}
		}
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event5);
			canvas.removeEventListener('mousedown', event6);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
	}

	canvas.addEventListener('mousedown', event6);
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	ctx.fillStyle = '#EF9B1E';
	ctx.fillRect(0, 0, w, h);
	
	createBattleArrow('The Reformation');
	
	createBackButton();
	
	let imageObj = new Image();
	imageObj.src = 'media/henry.png';
	imageObj.onload = function() {
		let pattern1 = ctx.createPattern(imageObj, 'no-repeat');
		ctx.fillStyle = pattern1;
		ctx.fillRect(0, 0, 276, 400);
	}
	
	insertBattle3Text();
	
	ctx.restore();
}

function insertBattle3Text() {
	
	ctx.save();
	
	ctx.translate(350, 50);
	
	ctx.fillStyle = '#C18428';
	ctx.fillRect(0, 0, 500, 300);
	
	ctx.lineJoin = 'round';
	ctx.lineWidth = 10;
	ctx.strokeStyle = '#A46912';
	ctx.strokeRect(0, 0, 500, 300);
	
	ctx.fillStyle = 'black';
	wrapText(henryText, 10, 10, 400, 25, 'Arial');
	
	ctx.restore();
}
	
function battle3Q1() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q1Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle3Q2();
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('True', 100, 225, 800, 50, 1);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('False', 100, 275, 800, 50, 1);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('(not an answer)', 100, 325, 800, 50, 1);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('(not an answer)', 100, 375, 800, 50, 1);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'False';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q1Text3);
	createBackButton();
	createNextButton();
	createAnswers('True', 'False', '(not an answer)', '(not an answer)');
	
	ctx.restore();
}

function battle3Q2() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q2Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle3Q3();
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Institutes of the Christian Religion', 100, 225, 800, 50, 2);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Predestination', 100, 275, 800, 50, 2);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Huguenots', 100, 325, 800, 50, 2);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Hotspot in Munster', 100, 375, 800, 50, 2);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Hotspot in Munster';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q2Text3);
	createBackButton();
	createNextButton();
	createAnswers('Institutes of the Christian Religion', 'Predestination', 'Huguenots', 'Hotspot in Munster');
	
	ctx.restore();
}

function battle3Q3() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q3Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle3Q4();
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Leo X', 100, 225, 800, 50, 3);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Alexander VI', 100, 275, 800, 50, 3);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Clement VII', 100, 325, 800, 50, 3);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Boniface VIII', 100, 375, 800, 50, 3);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Clement VII';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q3Text3);
	createBackButton();
	createNextButton();
	createAnswers('Leo X', 'Alexander VI', 'Clement VII', 'Boniface VIII');
	
	ctx.restore();
}

function battle3Q4() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q4Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle3Q5();
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Anabaptists', 100, 225, 800, 50, 4);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Lutherans', 100, 275, 800, 50, 4);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Calvinists', 100, 325, 800, 50, 4);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Zwinglians', 100, 375, 800, 50, 4);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Anabaptists';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q4Text3);
	createBackButton();
	createNextButton();
	createAnswers('Anabaptists', 'Lutherans', 'Calvinists', 'Zwinglians');
	
	ctx.restore();
}

function battle3Q5() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q5Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				canvas.className -= "cursor";
				scoreReport(3);
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Saxony', 100, 225, 800, 50, 5);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Winterfell', 100, 275, 800, 50, 5);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Wartburg', 100, 325, 800, 50, 5);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Frederick', 100, 375, 800, 50, 5);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Wartburg';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q5Text3);
	createBackButton();
	createNextButton();
	createAnswers('Saxony', 'Winterfell', 'Wartburg', 'Frederick');
	
	ctx.restore();
}

function beginBattle4() {
	
	canvas.className -= "cursor";
	
	canvas.removeEventListener('mousedown', event3);
	canvas.removeEventListener('mousemove', event4);
	
	if(!complete3) {
		alert("You are not at this battle yet");
		ctx.clearRect(0, 0, w, h);
		loadGameMap();
	}
	else if(complete4) {
		alert("Battle completed already!");
		ctx.clearRect(0, 0, w, h);
		loadGameMap();
	}
	else {
		console.log("Battle 4 begun");
		loadBattle4Intro();
	}
}

function loadBattle4Intro() {
	
	canvas.addEventListener('mousemove', event5);
	
	event6 = function(e) {
		if(mousePos.x > 700 && mousePos.x < 1000 && mousePos.y < 475 && mousePos.y > 375) {
			if(!q1Submitted) {
				battle4Q1();
			}
			else if(!q2Submitted) {
				battle4Q2();
			}
			else if(!q3Submitted) {
				battle4Q3();
			}
			else if(!q4Submitted) {
				battle4Q4();
			}
			else if(!q5Submitted) {
				battle4Q5();
			}
			else {
				scoreReport(4);
			}
		}
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event5);
			canvas.removeEventListener('mousedown', event6);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
	}
	
	canvas.addEventListener('mousedown', event6);
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	ctx.fillStyle = '#821313';
	ctx.fillRect(0, 0, w, h);
	
	createBattleArrow('Religious Wars');
	
	createBackButton();
	
	let imageObj = new Image();
	imageObj.src = 'media/charlesV.png';
	imageObj.onload = function() {
		let pattern1 = ctx.createPattern(imageObj, 'no-repeat');
		ctx.fillStyle = pattern1;
		ctx.fillRect(0, 0, 343, 350);
	}
	
	insertBattle4Text();
	
	ctx.restore();
}

function insertBattle4Text() {
	ctx.save();
	
	ctx.translate(350, 50);
	
	ctx.fillStyle = '#C18428';
	ctx.fillRect(0, 0, 500, 300);
	
	ctx.lineJoin = 'round';
	ctx.lineWidth = 10;
	ctx.strokeStyle = '#A46912';
	ctx.strokeRect(0, 0, 500, 300);
	
	ctx.fillStyle = 'black';
	wrapText(charlesText, 10, 10, 400, 20, 'Arial');
	
	ctx.restore();
}

function battle4Q1() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q1Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle4Q2();
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Bourbon', 100, 225, 800, 50, 1);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Habsburg', 100, 275, 800, 50, 1);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Montmorency-Chatillon', 100, 325, 800, 50, 1);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Guise', 100, 375, 800, 50, 1);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Habsburg';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q1Text4);
	createBackButton();
	createNextButton();
	createAnswers('Bourbon', 'Habsburg', 'Montmorency-Chatillon', 'Guise');
	
	ctx.restore();
}

function battle4Q2() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q2Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle4Q3();
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Peace of Westphalia', 100, 225, 800, 50, 2);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Peace of Augsburg', 100, 275, 800, 50, 2);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Spanish recognition of Dutch independence', 100, 325, 800, 50, 2);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Pacification of Ghent', 100, 375, 800, 50, 2);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Pacification of Ghent';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q2Text4);
	createBackButton();
	createNextButton();
	createAnswers('Peace of Westphalia', 'Peace of Augsburg', 'Spanish recognition of Dutch independence', 'Pacification of Ghent');
	
	ctx.restore();
}

function battle4Q3() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q3Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle4Q4();
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Massacre at Wassy', 100, 225, 800, 50, 3);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Edict of Nantes', 100, 275, 800, 50, 3);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Assasination of Archduke Ferdinand', 100, 325, 800, 50, 3);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Defenestration of Prague', 100, 375, 800, 50, 3);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Defenestration of Prague';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q3Text4);
	createBackButton();
	createNextButton();
	createAnswers('Massacre at Wassy', 'Edict of Nantes', 'Assasination of Archduke Ferdinand', 'Defenestration of Prague');
	
	ctx.restore();
}

function battle4Q4() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q4Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle4Q5();
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Christian IV', 100, 225, 800, 50, 4);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Wallenstein', 100, 275, 800, 50, 4);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Gustavus Adolphus', 100, 325, 800, 50, 4);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Frederick of Saxony', 100, 375, 800, 50, 4);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Wallenstein';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q4Text4);
	createBackButton();
	createNextButton();
	createAnswers('Christian IV', 'Wallenstein', 'Gustavus Adolphus', 'Frederick of Saxony');
	
	ctx.restore();
}

function battle4Q5() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q5Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				canvas.className -= "cursor";
				scoreReport(4);
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Written in French', 100, 225, 800, 50, 5);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Each ruler chooses religion of land', 100, 275, 800, 50, 5);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Recognition of independent Netherlands', 100, 325, 800, 50, 5);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Calvinists not recognized', 100, 375, 800, 50, 5);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Calvinists not recognized';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q5Text4);
	createBackButton();
	createNextButton();
	createAnswers('Written in French', 'Each ruler chooses religion of land', 'Recognition of independent Netherlands', 'Calvinists not recognized');
	
	ctx.restore();
}
	
function beginBattle5() {
	
	canvas.className -= "cursor";
	
	canvas.removeEventListener('mousedown', event3);
	canvas.removeEventListener('mousemove', event4);
	
	if(!complete4) {
		alert("You are not at this battle yet");
		ctx.clearRect(0, 0, w, h);
		loadGameMap();
	}
	else if(complete5) {
		alert("Battle completed already!");
		ctx.clearRect(0, 0, w, h);
		loadGameMap();
	}
	else {
		console.log("Battle 5 begun");
		loadBattle5Intro();
	}
}

function loadBattle5Intro() {
	
	canvas.addEventListener('mousemove', event5);
	
	event6 = function(e) {
		if(mousePos.x > 700 && mousePos.x < 1000 && mousePos.y < 475 && mousePos.y > 375) {
			if(!q1Submitted) {
				battle5Q1();
			}
			else if(!q2Submitted) {
				battle5Q2();
			}
			else if(!q3Submitted) {
				battle5Q3();
			}
			else if(!q4Submitted) {
				battle5Q4();
			}
			else if(!q5Submitted) {
				battle5Q5();
			}
			else {
				scoreReport(5);
			}
		}
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event5);
			canvas.removeEventListener('mousedown', event6);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
	}
	
	canvas.addEventListener('mousedown', event6);
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	ctx.fillStyle = '#0D3584';
	ctx.fillRect(0, 0, w, h);
	
	createBattleArrow('Absolutism');
	
	createBackButton();
	
	let imageObj = new Image();
	imageObj.src = 'media/louisxiv.png';
	imageObj.onload = function() {
		let pattern1 = ctx.createPattern(imageObj, 'no-repeat');
		ctx.fillStyle = pattern1;
		ctx.fillRect(0, 0, 340, 340);
	}
	
	insertBattle5Text();
	
	ctx.restore();
}

function insertBattle5Text() {
	ctx.save();
	
	ctx.translate(350, 50);
	
	ctx.fillStyle = '#3060BF';
	ctx.fillRect(0, 0, 500, 300);
	
	ctx.lineJoin = 'round';
	ctx.lineWidth = 10;
	ctx.strokeStyle = '#052A72';
	ctx.strokeRect(0, 0, 500, 300);
	
	ctx.fillStyle = 'black';
	wrapText(louisText, 10, 10, 400, 20, 'Arial');
	
	ctx.restore();
}

function battle5Q1() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q1Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle5Q2();
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Louis XIV', 100, 225, 800, 50, 1);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Eugene', 100, 275, 800, 50, 1);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Richelieu', 100, 325, 800, 50, 1);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Bob', 100, 375, 800, 50, 1);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Richelieu';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q1Text5);
	createBackButton();
	createNextButton();
	createAnswers('Louis XIV', 'Eugene', 'Richelieu', 'Bob');
	
	ctx.restore();
}

function battle5Q2() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q2Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle5Q3();
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Habsburgs keep rule in Spain', 100, 225, 800, 50, 2);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Habsburgs keep rule in Spain', 100, 275, 800, 50, 2);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Austria gets Spanish Netherlands', 100, 325, 800, 50, 2);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('British Empire grows', 100, 375, 800, 50, 2);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Habsburgs keep rule in Spain';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q2Text5);
	createBackButton();
	createNextButton();
	createAnswers('Habsburgs keep rule in Spain', 'Habsburgs keep rule in Spain', 'Austria gets Spanish Netherlands', 'British Empire grows');
	
	ctx.restore();
}

function battle5Q3() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q3Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle5Q4();
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Joseph II of Austria', 100, 225, 800, 50, 3);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Catherine the Great of Russia', 100, 275, 800, 50, 3);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Frederick II of Prussia', 100, 325, 800, 50, 3);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Elizabeth I of England', 100, 375, 800, 50, 3);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Frederick II of Prussia';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q3Text5);
	createBackButton();
	createNextButton();
	createAnswers('Joseph II of Austria', 'Catherine the Great of Russia', 'Frederick II of Prussia', 'Elizabeth I of England');
	
	ctx.restore();
}

function battle5Q4() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q4Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				battle5Q5();
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Increasing Papal control', 100, 225, 800, 50, 4);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('Edict of Toleration', 100, 275, 800, 50, 4);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('Abolishing serfdom', 100, 325, 800, 50, 4);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('Abolishing robot', 100, 375, 800, 50, 4);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = 'Increasing Papal control';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q4Text5);
	createBackButton();
	createNextButton();
	createAnswers('Increasing Papal control', 'Edict of Toleration', 'Abolishing serfdom', 'Abolishing robot');
	
	ctx.restore();
}

function battle5Q5() {
	
	canvas.removeEventListener('mousemove', event5);
	canvas.removeEventListener('mousedown', event6);
	
	canClick = true;
	
	canvas.addEventListener('mousemove', event7);
	
	event8 = function(e) {
		if(mousePos.x > 50 && mousePos.x < 200 && mousePos.y > 450 && mousePos.y < 500) {
			canvas.removeEventListener('mousemove', event7);
			canvas.removeEventListener('mousedown', event8);
			ctx.clearRect(0, 0, w, h);
			loadGameMap();
		}
		else if(mousePos.x > 800 && mousePos.x < 950 && mousePos.y > 450 && mousePos.y < 500) {
			if(q5Submitted) {
				canvas.removeEventListener('mousemove', event7);
				canvas.removeEventListener('mousedown', event8);
				canvas.className -= "cursor";
				scoreReport(5);
			}
			else {
				alert("Please answer the question");
			}
		}
		
		if(canClick) {
			if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 225 && mousePos.y < 275) {
				checkAnswer('Increasing Papal control', 100, 225, 800, 50, 5);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 275 && mousePos.y < 325) {
				checkAnswer('1618', 100, 275, 800, 50, 5);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 325 && mousePos.y < 375) {
				checkAnswer('1635', 100, 325, 800, 50, 5);
			}
			else if(mousePos.x > 100 && mousePos.x < 900 && mousePos.y > 375 && mousePos.y < 425) {
				checkAnswer('1756', 100, 375, 800, 50, 5);
			}
		}
	}
	
	canvas.addEventListener('mousedown', event8);
	
	correctAnswer = '1756';
	
	ctx.save();
	
	ctx.clearRect(0, 0, w, h);
	
	ctx.fillStyle = '#D93E62';
	ctx.fillRect(0, 0, w, h);
	
	createQuestion(q5Text5);
	createBackButton();
	createNextButton();
	createAnswers('1740', '1618', '1635', '1756');
	
	ctx.restore();
}
	
	