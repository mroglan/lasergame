let video, bear, people, tree, wave, desert;
let n = 0;

window.onload = init;

function init() {
	video = document.querySelector("#video");
	
	
	bear = document.querySelector("#bear");
	people = document.querySelector("#people");
	tree = document.querySelector("#tree");
	wave = document.querySelector("#wave");
	desert = document.querySelector("#desert");
	
	video.src = "media/bear.mp4";
	
	bear.onclick = function (evt) {
		bearVideo();
	}
	people.onclick = function (evt) {
		peopleVideo();
	}
	tree.onclick = function (evt) {
		treeVideo();
	}
	wave.onclick = function (evt) {
		waveVideo();
	}
	desert.onclick = function (evt) {
		desertVideo();
	}
	
}

function bearVideo() {
	video.src = "media/bear.mp4";
	video.currentTime = 0;
}

function peopleVideo() {
	video.src = "media/WalkingOnStreet.mp4";
	video.currentTime = 0;
}

function treeVideo () {
	video.src = "media/tree.mp4";
	video.currentTime = 0;
}

function waveVideo () {
	video.src = "media/wave.mp4";
	video.currentTime = 0;
}

function desertVideo () {
	video.src = "media/Desert.mp4";
	video.currentTime = 0;
}


function play() {
	video.play();
}

function pause() {
	video.pause();
}

function restart() {
	video.currentTime = 0;
}


