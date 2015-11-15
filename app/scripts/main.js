/**
 * Created by zp on 10/26/2015.
 */

'use strict';

var infiApp = angular.module('infiApp', ['ngSanitize', 'ngTouch', 'ngAnimate', 'ui.router', 'com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls', 'com.2fdevs.videogular.plugins.overlayplay', 'com.2fdevs.videogular.plugins.poster', 'com.2fdevs.videogular.plugins.buffering']);

infiApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/attract');

    $stateProvider.state('mainmenu', {
        url: '/mainmenu',
        views: {
            'main': {
                templateUrl: '/partials/mainmenu.html',
                controller: 'MainMenuController'
            }
        }
    }).state('attract', {
        url: '/attract',
        views: {
            'main': {
                templateUrl: '/partials/fullvideo.html',
                controller: 'AttractController'
            }
        }
    }).state('c1', {
        url: '/c1',
        views: {
            'main': {
                templateUrl: '/partials/ch.html'
            },
            'layer1@c1': {
                templateUrl: '/partials/vid.html',
                controller: 'C1Controller'
            }
        }
    }).state('c1.tranz', {
        url: '/tranz',
        views: {
            'layer1@c1': {
                template: ''
            },
            'layer2@c1': {
                templateUrl: 'partials/vid.html',
                controller: 'Z1Controller'
            }
        }
    }).state('c1.quiz', {
        url: '/quiz',
        views: {
            'layer2@c1': {
                templateUrl: 'partials/q1.html',
                controller: 'Q1Controller'
            },
            'layer3@c1': {
                templateUrl: '/partials/subnav.html',
                controller: 'SubNavController'
            }
        }
    }).state('c1.snapshot', {
        url: '/snapshot',
        views: {
            'layer2@c1': {
                templateUrl: 'partials/s1.html',
                controller: 'S1Controller'
            },
            'layer3@c1': {
                templateUrl: '/partials/subnav.html',
                controller: 'SubNavController'
            }
        }
    }).state('c1.teaser', {
        url: '/teaser',
        views: {
            'layer2@c1': {
                templateUrl: 'partials/t1.html',
                controller: 'T1Controller'
            },
            'layer3@c1': {
                templateUrl: '/partials/subnav.html',
                controller: 'SubNavController'
            }
        }
    }).state('c1.video', {
        url: '/video',
        views: {
            'layer2@c1': {
                templateUrl: 'partials/v1.html',
                controller: 'V1Controller'
            }
        }
    }).state('fullvideo', {
        url: '/fullvideo',
        views: {
            'main': {
                templateUrl: '/partials/fullvideo.html',
                controller: 'FullVideoController'
            }
        }
    });
});

