// initializes our video variable
var video = document.querySelector('.video');

// plays the video and sets our volume
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").textContent = video.volume * 100 + "%";
});

// sets video variables when we open our window
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.setAttribute("autoplay", "false")
	video.removeAttribute("loop")
});

// pauses the video
document.querySelector('#pause').addEventListener("click", function () {
	video.pause();
});

// skips the video by 10 seconds
document.querySelector('#skip').addEventListener("click", function () {
	console.log("Original location " + video.currentTime)
	if ((video.duration - video.currentTime) <= 10) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("New location " + video.currentTime)
});

// speeds up the video
document.querySelector('#faster').addEventListener("click", function () {
	video.playbackRate /= 0.9;
	console.log("New speed " + video.playbackRate);
});

// slows down the video
document.querySelector('#slower').addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log("New speed " + video.playbackRate);
});

// mutes the video
document.querySelector('#mute').addEventListener("click", function () {
	if (video.muted) { 
		video.muted = false;
		document.querySelector('#mute').textContent = "Mute";
	} else { 
		video.muted = true;
		document.querySelector('#mute').textContent = "Unmute";
	}
});

// 
document.querySelector('#slider').addEventListener("input", function () {
	video.volume = document.querySelector('#slider').value / 100;
	document.getElementById("volume").textContent = (video.volume * 100) + "%";
	console.log(video.volume);
});

document.querySelector('#vintage').addEventListener("click", function() {
	video.className = "oldSchool";
});

document.querySelector('#orig').addEventListener("click", function() {
	video.className = "video";
});
