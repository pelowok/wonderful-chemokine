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
                '': {
                    templateUrl: '/partials/bigblueball.html'
                },
                'overlay1': {
                    templateUrl: '/partials/mainmenu.html'
                }
            }
        })

        .state('attractplay', {
            url: '/attract',
            views: {
                '': {
                    templateUrl: '/partials/attract.html'
                }
            }
        })

        .state('attractpause', {
            url: '/attract',
            views: {
                '': {
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

        .state('ch11', {
            url: '/ch11',
            views: {
                '': {
                    templateUrl: '/partials/ch1-1.html'
                }
            }
        })

        .state('ch12', {
            url: '/ch12',
            views: {
                '': {
                    templateUrl: '/partials/ch1-2.html'
                }
            }
        })

        .state('ch13', {
            url: '/ch13',
            views: {
                '': {
                    templateUrl: '/partials/ch1-3.html'
                },
                'overlay1': {
                    templateUrl: '/partials/quiz1.html'
                }
            }
        })

        .state('ch21', {
            url: '/ch21',
            views: {
                '': {
                    templateUrl: '/partials/ch2-1.html'
                }
            }
        })

        .state('ch31', {
            url: '/ch31',
            views: {
                '': {
                    templateUrl: '/partials/ch3-1.html'
                }
            }
        })

        .state('ch41', {
            url: '/ch41',
            views: {
                '': {
                    templateUrl: '/partials/ch4-1.html'
                }
            }
        });
});