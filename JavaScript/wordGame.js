
let wordBank =["abacaxi", "abgesang", "abiuret", "advocaat", "aitch", "aloisiite", "atlatl", "autochthonous", "bdelloid", "bhagavata", "bhikku", "bobbejaan",
"cassioberry", "catapleiite", "chhatri"];


function random() {
	
	let randy = Math.round(Math.random()*14);
	let displayedWord = wordBank[randy];
	console.log(displayedWord);
	document.querySelector("#displayedWord").innerHTML = displayedWord;
	document.querySelector("#response").innerHTML = "";
	document.querySelector("#inputWord").value = "";
	
}

function checkInput() {
	
	let inputWord = document.querySelector("#inputWord").value;
	console.log(inputWord);
	
	displayedWord = document.querySelector("#displayedWord").textContent;
	
	if(inputWord === displayedWord) {
		
		console.log("Correct");
		document.querySelector("#response").innerHTML = "Correct";
	}
	
	else {
		console.log("Incorrect");
		document.querySelector("#response").innerHTML = "Incorrect, try again";
	}
	
}

let userInput = document.querySelector("#inputWord");
userInput.addEventListener('keydown', processKeyDown);

function processKeyDown(evt) {
	
	displayedWord = document.querySelector("#displayedWord").textContent;
	
	if(evt.keyCode === 13) {
		
		if(userInput.value === displayedWord){
			console.log("Correct")
			document.querySelector("#response").innerHTML = "Correct";
		}
		
		else {
			
			console.log("Incorrect")
			document.querySelector("#response").innerHTML = "Incorrect, try again";
		}
	}
}