/**
 * Created by zp on 10/26/2015.
 */

var controllers = {};

controllers.MainController = function($scope, $state) {

    console.log('MainController fired');

    $scope.btnImg = [
        { btn: 'mm_s1', img: '/images/mainmenu_btnScene1.png' },
        { btn: 'mm_s2', img: '/images/mainmenu_btnScene2.png' },
        { btn: 'mm_s3', img: '/images/mainmenu_btnScene3.png' },
        { btn: 'mm_s4', img: '/images/mainmenu_btnScene4.png' }
    ];

    $scope.navTo = function(page){
        $state.transitionTo(page);
    }
};

controllers.AttractController = function($sce, $scope, $interval, $state) {
//infiApp.controller('AttractController', ['$scope', '$sce', '$state', function ($scope, $sce, $state) {

    console.log('AttractController assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.attractConfig = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/Infinity_IPI145_Animation_EN_08a_1080p_2.mp4"),
                type: "video/mp4",
                ngClick: "navTo('mainmenu')"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    $scope.navTo = function (page) {
        $state.transitionTo(page);
    };

    $scope.checkAttractTime = function ($currentTime, $duration) {
        console.log($currentTime);
        if (Math.round($currentTime) === 25) {
            $scope.$API.pause();

        }
    };

    $scope.restartAttract = function () {
        console.log('$scope.restartAttract fired');
        $state.transitionTo('attract');
    };

//}]);
};

controllers.BigBlueBallController = function($scope, $state) {

    $scope.navTo = function (page) {
        $state.transitionTo(page);
    };

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


infiApp.controller(controllers);