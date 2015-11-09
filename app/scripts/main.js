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
        'com.2fdevs.videogular.plugins.poster',
        'com.2fdevs.videogular.plugins.buffering'
    ]
);

infiApp.config( function ( $stateProvider, $urlRouterProvider ) {

    $urlRouterProvider.otherwise('/attract');

    $stateProvider
        .state('mainmenu', {
            url: '/mainmenu',
            views: {
                'main': {
                    templateUrl: '/partials/mainmenu.html'
                }
            }
        })

        .state('OLDmainmenu', {
            url: '/oldmainmenu',
            views: {
                'main': {
                    templateUrl: '/partials/bigblueball.html'
                },
                'overlay1': {
                    templateUrl: '/partials/mainmenu.html'
                }
            }
        })

        .state('attract', {
            url: '/attract',
            views: {
                'main': {
                    templateUrl: '/partials/attract.html'
                }
            }
        })

        .state('attractpause', {
            url: '/attract',
            views: {
                'main': {
                    templateUrl: '/partials/attract.html'
                },
                'overlay1': {
                    templateUrl: '/partials/bigblueball.html'
                },
                'overlay2': {
                    templateUrl: '/partials/mainmenu.html'
                }
            }
        })

        .state('c1', {
            views: {
                'main': {
                    templateUrl: '/partials/ch1-1.html'
                }
            }
        })

        .state('c1.q0', {
            url: '/q0'
        })

        .state('c1.q1', {
            url: '/q1',
            views: {
                'main': {
                    templateUrl: '/partials/quiz1.html'
                }
            }
        });

});