/**
 * Created by zp on 10/25/2015.
 */



//function hideAddressBar()
//{
//    if(!window.location.hash)
//    {
//        if(document.height < window.outerHeight)
//        {
//            document.body.style.height = (window.outerHeight + 50) + 'px';
//        }
//
//        setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
//    }
//
//}
//
//window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); console.log('pot'); } } );
//window.addEventListener("orientationchange", hideAddressBar );


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