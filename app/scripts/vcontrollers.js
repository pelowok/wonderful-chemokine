/**
 * Created by zp on 11/15/2015.
 */

arrControllers.V1Controller = function ($scope, $interval, $state, $sce) {
    console.log('V1Controller assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.complete = function () {
        console.log('$scope.complete fired');
        $state.transitionTo('mainmenu');
        //$scope.$API.play();
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("video/Segment_1.mp4"),
                type: "video/mp4",
                ngClick: "complete()"
            }
        ],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };
}

arrControllers.V2Controller = function ($scope, $interval, $state, $sce) {
    console.log('V2Controller assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
        $scope.$API.seekTime(17);
        $scope.$API.play();
    };

    $scope.complete = function () {
        console.log('$scope.complete fired');
        $state.transitionTo('mainmenu');
        //$scope.$API.play();
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("video/Segment_2.mp4"),
                type: "video/mp4",
                ngClick: "complete()"
            }
        ],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };
}

arrControllers.V3Controller = function ($scope, $interval, $state, $sce) {
    console.log('V3Controller assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.complete = function () {
        console.log('$scope.complete fired');
        $state.transitionTo('mainmenu');
        //$scope.$API.play();
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("video/Segment_3.mp4"),
                type: "video/mp4",
                ngClick: "complete()"
            }
        ],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };
}

arrControllers.V4Controller = function ($scope, $interval, $state, $sce) {
    console.log('V4Controller assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.complete = function () {
        console.log('$scope.complete fired');
        $state.transitionTo('mainmenu');
        //$scope.$API.play();
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("video/Segment_4.mp4"),
                type: "video/mp4",
                ngClick: "complete()"
            }
        ],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };
}