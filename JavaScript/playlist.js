let audio, sources;
let i = 1;

function init() {
	
	audio = document.querySelector("#audio");
	
	sources = ["media/balloonPop.mp3", "media/Pling.mp3", "media/snoring.mp3", "media/whip.mp3"]
	
	playAudio(sources);
	
	audio.onended = processEnd;
}

function playAudio(input) {
	audio.src = sources[0];
	audio.play();
	
}

function processEnd() {
	console.log(sources[i]);
	
	audio.src = sources[i]
	audio.play();
	
	i++
	
	if(i === 4) {
		i = 0;
	}
}