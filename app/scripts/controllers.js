/**
 * Created by zp on 10/26/2015.
 */

var controllers = {};

controllers.MainController = function($scope, $state) {
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

controllers.AttractController = function($sce, $scope, $interval, $state){

    $scope.attractConfig = {
        sources: [
            {src: $sce.trustAsResourceUrl("/video/Infinity_IPI145_Animation_EN_08a_1080p_2.mp4"), type: "video/mp4", ngClick: "navTo('mainmenu')"}
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    $scope.navTo = function(page){
        console.log('potato');
        $state.transitionTo(page);
    }
};


infiApp.controller(controllers);