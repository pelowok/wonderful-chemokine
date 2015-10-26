'use strict';

angular.module('myApp',
    [
        "ngSanitize",
        "ngTouch",
        "ngAnimate",
        "com.2fdevs.videogular",
        "com.2fdevs.videogular.plugins.controls",
        "com.2fdevs.videogular.plugins.overlayplay",
        "com.2fdevs.videogular.plugins.poster"
    ]
)
    .controller('HomeCtrl',
    ["$sce", "$scope", function ($sce, $scope) {

        this.config = {
            sources: [
                {src: $sce.trustAsResourceUrl("/video/Infinity_IPI145_Animation_EN_08a_1080p_2.mp4"), type: "video/mp4"}
            ],
            theme: "/bower_components/videogular-themes-default/videogular.css",
            plugins: {
                poster: "http://www.videogular.com/assets/images/videogular.png"
            },
            autoPlay: true
        };

        $scope.launchScreen = function($event){

        };
    }]
);