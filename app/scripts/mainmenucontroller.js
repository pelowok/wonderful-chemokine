/**
 * Created by zp on 11/15/2015.
 */

arrControllers.MainMenuController = function($scope, $state, $sce, $rootScope) {

    console.log('MainMenuController fired');

    $rootScope.isChapterNumber = 0;
    console.log('$rootScope.isChapterNumber : ' + $rootScope.isChapterNumber);

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
        $API.seekTime(3);
    };

    $scope.mainmenuConfig = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("video/mainmenu.mp4"),
                type: "video/mp4"
            }
        ],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "images/blank.png"
        },
        autoPlay: true
    };

    $scope.checkTime = function ($currentTime, $API) {

        var currentTime = Math.round($currentTime);

        //console.log(currentTime);

        if (currentTime >= 6 && currentTime <=27) {
            $scope.menuactive = true;
            //console.log('Math.round($currenttime) reached 4 : menu active : ' + currentTime);
        } else {
            $scope.menuactive = false;
            //console.log('Math.round($currenttime) reached 25 : menu inactive : ' + currentTime);
        }
    };

    $scope.restart = function () {
        console.log('$scope.restartfired');
        //$scope.$API.play();
        $scope.navTo('attract');
    };

    $scope.btnImg = [
        { btn: 'mm_s1', img: '/images/blank.png', state: 'c1.tranz' },
        { btn: 'mm_s2', img: '/images/blank.png', state: 'c2.tranz' },
        { btn: 'mm_s3', img: '/images/blank.png', state: 'c3.tranz' },
        { btn: 'mm_s4', img: '/images/blank.png', state: 'c4.tranz' }
    ];

    $scope.navTo = function(state){
        console.log('state : ' + state);
        $state.transitionTo(state);
    }
};
