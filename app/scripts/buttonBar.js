function vidplay() {
    var video = document.getElementById("Video1");
    var button = document.getElementById("play");
    if (video.paused) {
        video.play();
        button.textContent = "PAUSE";
    } else {
        video.pause();
        button.textContent = "PLAY";
    }
}

function restart() {
    var video = document.getElementById("Video1");
    video.currentTime = 0;
}

function skip(value) {
    var video = document.getElementById("Video1");
    video.currentTime += value;
}