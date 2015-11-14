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

infiApp.config(function ($stateProvider, $urlRouterProvider) {

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

        .state('attract', {
            url: '/attract',
            views: {
                'main': {
                    templateUrl: '/partials/attract.html'
                }
            }
        })

        .state('c1', {
            url: '/c1',
            views: {
                'main': {
                    templateUrl: '/partials/c1.html'
                },
                'layer1@c1': {
                    templateUrl: '/partials/vid1.html',
                    controller: 'C1Controller'
                }
            }
        })

        .state('c1.quiz', {
            url: '/quiz',
            views: {
                'layer2@c1': {
                    templateUrl: 'partials/q1.html',
                    controller: 'Q1Controller'
                }
            }
        })

        .state('c1.test', {
            url: '/test',
            views: {
                'layer2@c1': {
                    templateUrl: 'partials/c1l2.html',
                    controller: 'Q1Controller'
                }
            }
        })

        .state('fullvideo', {
            url: '/fullvideo',
            views: {
                'main': {
                    templateUrl: '/partials/vid1.html',
                    controller: 'FullVideoController'
                }
            }
        });
});

