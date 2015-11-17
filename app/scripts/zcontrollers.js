/**
 * Created by zp on 11/15/2015.
 */
arrControllers.Z1Controller  = function($scope, $state, $sce, $rootScope) {

    console.log('Z1Controller fired');

    $rootScope.isChapterNumber = 1;
    console.log('$rootScope.isChapterNumber : ' + $rootScope.isChapterNumber);

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/Transition_1.mp4"),
                type: "video/mp4"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    $scope.complete = function () {
        //$scope.$API.play();
        $scope.navTo('c1.quiz');
    };

};

arrControllers.Z2Controller  = function($scope, $state, $sce, $rootScope) {

    console.log('Z2Controller fired');

    $rootScope.isChapterNumber = 2;
    console.log('$rootScope.isChapterNumber : ' + $rootScope.isChapterNumber);

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/Transition_2.mp4"),
                type: "video/mp4"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    $scope.complete = function () {
        //$scope.$API.play();
        $scope.navTo('c2.quiz');
    };

};

arrControllers.Z3Controller  = function($scope, $state, $sce, $rootScope) {

    console.log('Z3Controller fired');

    $rootScope.isChapterNumber = 3;
    console.log('$rootScope.isChapterNumber : ' + $rootScope.isChapterNumber);

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/Transition_3.mp4"),
                type: "video/mp4"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    $scope.complete = function () {
        //$scope.$API.play();
        $scope.navTo('c3.quiz');
    };

};

arrControllers.Z4Controller  = function($scope, $state, $sce, $rootScope) {

    console.log('Z4Controller fired');

    $rootScope.isChapterNumber = 4;
    console.log('$rootScope.isChapterNumber : ' + $rootScope.isChapterNumber);

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/Transition_4.mp4"),
                type: "video/mp4"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    $scope.complete = function () {
        //$scope.$API.play();
        $scope.navTo('c4.quiz');
    };

};