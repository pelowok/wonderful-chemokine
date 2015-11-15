/**
 * Created by zp on 11/15/2015.
 */

arrControllers.FullVideoController = function($sce, $scope, $interval, $state) {

    console.log('FullVideoController assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
        $scope.$API.seekTime(4);
        $scope.$API.play();
    };

    $scope.videoComplete = function () {
        console.log('$scope.videoComplete fired');
        $state.transitionTo('mainmenu');
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/fullvideo.mp4"),
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

    var vidClick = function(){
        console.log('vidClick() fired');
        $scope.$API.playPause();
    }

};