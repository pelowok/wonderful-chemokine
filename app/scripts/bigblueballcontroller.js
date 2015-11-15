/**
 * Created by zp on 11/15/2015.
 */
arrControllers.BigBlueBallController = function($scope, $state) {

    console.log('bigblueball potato');

    var mainCanvas = document.querySelector("#myCanvas");
    var mainContext = mainCanvas.getContext("2d");

    var canvasWidth = mainCanvas.width;
    var canvasHeight = mainCanvas.height;

    function drawCircle() {

        mainContext.clearRect(0, 0, canvasWidth, canvasHeight);

        // draw the circle
        mainContext.beginPath();

        var radius = 600;
        mainContext.arc(960, 540, radius, 0, Math.PI * 2, false);
        mainContext.closePath();

        // color in the circle
        mainContext.fillStyle = 'rgba(0,0,100,0.5)';
        mainContext.fill();

    }
    drawCircle();

}