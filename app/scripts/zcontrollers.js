/**
 * Created by zp on 11/15/2015.
 */
arrControllers.Z1Controller  = function($scope, $state, $sce) {

    console.log('Z1Controller fired');

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