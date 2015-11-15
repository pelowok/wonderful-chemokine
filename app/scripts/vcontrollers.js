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
                src: $sce.trustAsResourceUrl("/video/Segment_1.mp4"),
                type: "video/mp4",
                ngClick: "complete()"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };
}