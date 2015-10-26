/**
 * Created by zp on 10/26/2015.
 */

var infiApp = angular.module('infiApp',
    [
        'ngSanitize',
        'ngTouch',
        'ngAnimate',
        'ui.router',
        'com.2fdevs.videogular',
        'com.2fdevs.videogular.plugins.controls',
        'com.2fdevs.videogular.plugins.overlayplay',
        'com.2fdevs.videogular.plugins.poster'
    ]
);

infiApp.config( function ( $stateProvider, $urlRouterProvider ) {

    $urlRouterProvider.otherwise('/attract');

    $stateProvider
        .state('mainmenu', {
            url: '/mainmenu',
            templateUrl: '/partials/mainmenu.html'
        })

        .state('attract', {
            url: '/attract',
            templateUrl: '/partials/attract.html',
            onEnter: function() {
                var time = 0,
                    elapsed = '0.0';

                window.setInterval(function($state)
                {
                    time += 100;

                    elapsed = Math.floor(time / 100) / 10;
                    if(Math.round(elapsed) == elapsed) { elapsed += '.0' }

                    if(elapsed == 25) {

                        document.title = elapsed;
                    }

                }, 100);
            }
        });

});