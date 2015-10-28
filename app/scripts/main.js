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

        .state('attract', {
            url: '/attract',
            views: {
                '': {
                    templateUrl: '/partials/attract.html'
                }
            }
        });
});