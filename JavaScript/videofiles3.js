let video;

window.onload = function() {
	
	video = document.querySelector("#myVideo");
	
	console.log("loaded");
		
	let track = video.addTextTrack("subtitles", "English subtitles", "en");
	track.mode = "hidden";
		
	let cues = [
	{
		id: 1,
		startTime: 0.000,
		endTime: 1.000,
		content: "This is a bear"
	},
	{
		id: 2,
		startTime: 1.001,
		endTime: 2.000,
		content: "That is getting destroyed"
	},
	{
		id: 3,
		startTime: 2.001,
		endTime: 3.000,
		content: "Enjoy"
	},
	{
		id: 4,
		startTime: 3.001,
		endTime: video.duration,
		content: ""
	}
	];
		
	for(let i = 0; i < cues.length; i++) {
		let sound = cues[i];
		let cue = new VTTCue(sound.startTime, sound.endTime, sound.id);
		cue.id = sound.id;
	
		track.addCue(cue);
			
	}
		
	let theCues = track.cues;
		
	let cuesDisplay = document.querySelector("#sounds");
		
	for(let i = 0; i < theCues.length; i++) {
		theCues[i].onenter = function() {
			cuesDisplay.innerHTML = cues[i].content;
		}
		theCues[i].onexit = function() {
			cuesDisplay.innerHTML -= cues[i].content;
		}
	}

}
		
			