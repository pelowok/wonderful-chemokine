arrControllers.C1Controller  = function($scope, $state, $sce) {

    console.log('C1Controller fired');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("video/bgloop1.mp4"),
                type: "video/mp4"
            }
        ],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    $scope.complete = function () {
        $scope.$API.play();
    };

};

arrControllers.C2Controller  = function($scope, $state, $sce) {

    console.log('C2Controller fired');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("video/bgloop2.mp4"),
                type: "video/mp4"
            }
        ],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    $scope.complete = function () {
        $scope.$API.play();
    };

};

arrControllers.C3Controller  = function($scope, $state, $sce) {

    console.log('C3Controller fired');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("video/bgloop3.mp4"),
                type: "video/mp4"
            }
        ],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    $scope.complete = function () {
        $scope.$API.play();
    };

};
arrControllers.C4Controller  = function($scope, $state, $sce) {

    console.log('C4Controller fired');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("video/bgloop4.mp4"),
                type: "video/mp4"
            }
        ],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    $scope.complete = function () {
        $scope.$API.play();
    };

};

//arrControllers.CxController  = function($scope, $state, $sce) {
//
//    console.log('C1Controller fired');
//
//    $scope.API = null;
//
//    $scope.onPlayerReady = function ($API) {
//        console.log('onPlayerReady fired');
//        $scope.$API = $API;
//    };
//
//    $scope.videos = [
//        {
//            sources: [
//                {src: $sce.trustAsResourceUrl("video/bgloop1.mp4"), type: "video/mp4"},
//            ]
//        },
//        {
//            sources: [
//                {src: $sce.trustAsResourceUrl("video/bgloop2.mp4"), type: "video/mp4"},
//            ]
//        },
//        {
//            sources: [
//                {src: $sce.trustAsResourceUrl("video/bgloop3.mp4"), type: "video/mp4"},
//            ]
//        },
//        {
//            sources: [
//                {src: $sce.trustAsResourceUrl("video/bgloop4.mp4"), type: "video/mp4"},
//            ]
//        }
//    ];
//
//    $scope.config = {
//        autoPlay: true,
//        sources: $scope.videos[0].sources,
//        theme: "bower_components/videogular-themes-default/videogular.css"
//    };
//
//    $scope.setVideo = function(index) {
//        $scope.API.stop();
//        $scope.config.sources = $scope.videos[index].sources;
//        //$scope.API.play();
//    };
//
//    $scope.complete = function () {
//        $scope.$API.play();
//    };
//
//}