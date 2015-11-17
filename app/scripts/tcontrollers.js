/**
 * Created by zp on 11/15/2015.
 */

arrControllers.T1Controller = function ($scope, $interval, $state, $sce) {
    console.log('T1Controller assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };



    $scope.complete = function () {
        console.log('$scope.complete fired');
        //$state.transitionTo('mainmenu');
        $scope.$API.play();
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/Teaser_1.mp4"),
                type: "video/mp4",
                ngClick: "videoComplete()"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };
}

arrControllers.T2Controller = function ($scope, $interval, $state, $sce) {
    console.log('T2Controller assigned');


    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };



    $scope.complete = function () {
        console.log('$scope.complete fired');
        //$state.transitionTo('mainmenu');
        $scope.$API.play();
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/Teaser_2.mp4"),
                type: "video/mp4",
                ngClick: "videoComplete()"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };
}

arrControllers.T3Controller = function ($scope, $interval, $state, $sce) {
    console.log('T3Controller assigned');


    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };



    $scope.complete = function () {
        console.log('$scope.complete fired');
        //$state.transitionTo('mainmenu');
        $scope.$API.play();
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/Teaser_3.mp4"),
                type: "video/mp4",
                ngClick: "videoComplete()"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };
}

arrControllers.T4Controller = function ($scope, $interval, $state, $sce) {
    console.log('T4Controller assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;


    };

    $scope.complete = function () {
        console.log('$scope.complete fired');
        //$state.transitionTo('mainmenu');
        $scope.$API.play();
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/Teaser_4.mp4"),
                type: "video/mp4",
                ngClick: "videoComplete()"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };
}