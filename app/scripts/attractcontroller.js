/**
 * Created by zp on 11/15/2015.
 */

arrControllers.AttractController = function($sce, $scope, $interval, $state, $rootScope) {

    console.log('AttractController assigned');

    $rootScope.isChapterNumber = 0;
    console.log('$rootScope.isChapterNumber : ' + $rootScope.isChapterNumber);

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("video/attract.mp4"),
                type: "video/mp4",
                ngClick: "navTo('mainmenu')"
            }
        ],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    $scope.complete = function () {
        $state.transitionTo('mainmenu');
    };

};
