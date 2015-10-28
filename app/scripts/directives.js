infiApp.directive('bigblueball', function() {

    return {
        restrict: 'E',
        template: '<div class="bigBlueBall"></div>',
        link: function () {

            console.log('bigblueball directive');

            var mainCanvas = document.querySelector("#myCanvas");
            var mainContext = mainCanvas.getContext("2d");

            var canvasWidth = mainCanvas.width;
            var canvasHeight = mainCanvas.height;

            function drawCircle() {

                mainContext.clearRect(0, 0, canvasWidth, canvasHeight);

                // draw the circle
                mainContext.beginPath();

                var radius = 500;
                mainContext.arc(800, 450, radius, 0, Math.PI * 2, false);
                mainContext.closePath();

                // color in the circle
                mainContext.fillStyle = 'rgba(0,0,100,0.5)';
                mainContext.fill();

            }
            drawCircle();

            }
        }
    }
);
