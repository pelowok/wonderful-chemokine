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
                controller: 'SxController'
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
    }).state('c2', {
        url: '/c2',
        views: {
            'main': {
                templateUrl: '/partials/ch.html'
            },
            'layer1@c2': {
                templateUrl: '/partials/vid.html',
                controller: 'C2Controller'
            }
        }
    }).state('c2.tranz', {
        url: '/tranz',
        views: {
            'layer1@c2': {
                template: ''
            },
            'layer2@c2': {
                templateUrl: 'partials/vid.html',
                controller: 'Z2Controller'
            }
        }
    }).state('c2.quiz', {
        url: '/quiz',
        views: {
            'layer2@c2': {
                templateUrl: 'partials/q2.html',
                controller: 'Q2Controller'
            },
            'layer3@c2': {
                templateUrl: '/partials/subnav.html',
                controller: 'SubNavController'
            }
        }
    }).state('c2.snapshot', {
        url: '/snapshot',
        views: {
            'layer2@c2': {
                templateUrl: 'partials/s2.html',
                controller: 'SxController'
            },
            'layer3@c2': {
                templateUrl: '/partials/subnav.html',
                controller: 'SubNavController'
            }
        }
    }).state('c2.teaser', {
        url: '/teaser',
        views: {
            'layer2@c2': {
                templateUrl: 'partials/t2.html',
                controller: 'T2Controller'
            },
            'layer3@c2': {
                templateUrl: '/partials/subnav.html',
                controller: 'SubNavController'
            }
        }
    }).state('c2.video', {
        url: '/video',
        views: {
            'layer2@c2': {
                templateUrl: 'partials/v2.html',
                controller: 'V2Controller'
            }
        }
    }).state('c3', {
        url: '/c3',
        views: {
            'main': {
                templateUrl: '/partials/ch.html'
            },
            'layer1@c3': {
                templateUrl: '/partials/vid.html',
                controller: 'C3Controller'
            }
        }
    }).state('c3.tranz', {
        url: '/tranz',
        views: {
            'layer1@c3': {
                template: ''
            },
            'layer2@c3': {
                templateUrl: 'partials/vid.html',
                controller: 'Z3Controller'
            }
        }
    }).state('c3.quiz', {
        url: '/quiz',
        views: {
            'layer2@c3': {
                templateUrl: 'partials/q3.html',
                controller: 'Q3Controller'
            },
            'layer3@c3': {
                templateUrl: '/partials/subnav.html',
                controller: 'SubNavController'
            }
        }
    }).state('c3.snapshot', {
        url: '/snapshot',
        views: {
            'layer2@c3': {
                templateUrl: 'partials/s3.html',
                controller: 'SxController'
            },
            'layer3@c3': {
                templateUrl: '/partials/subnav.html',
                controller: 'SubNavController'
            }
        }
    }).state('c3.teaser', {
        url: '/teaser',
        views: {
            'layer2@c3': {
                templateUrl: 'partials/t3.html',
                controller: 'T3Controller'
            },
            'layer3@c3': {
                templateUrl: '/partials/subnav.html',
                controller: 'SubNavController'
            }
        }
    }).state('c3.video', {
        url: '/video',
        views: {
            'layer2@c3': {
                templateUrl: 'partials/v3.html',
                controller: 'V3Controller'
            }
        }
    }).state('c4', {
        url: '/c4',
        views: {
            'main': {
                templateUrl: '/partials/ch.html'
            },
            'layer1@c4': {
                templateUrl: '/partials/vid.html',
                controller: 'C4Controller'
            }
        }
    }).state('c4.tranz', {
        url: '/tranz',
        views: {
            'layer1@c4': {
                template: ''
            },
            'layer2@c4': {
                templateUrl: 'partials/vid.html',
                controller: 'Z4Controller'
            }
        }
    }).state('c4.quiz', {
        url: '/quiz',
        views: {
            'layer2@c4': {
                templateUrl: 'partials/q4.html',
                controller: 'Q4Controller'
            },
            'layer3@c4': {
                templateUrl: '/partials/subnav.html',
                controller: 'SubNavController'
            }
        }
    }).state('c4.snapshot', {
        url: '/snapshot',
        views: {
            'layer2@c4': {
                templateUrl: 'partials/s4.html',
                controller: 'SxController'
            },
            'layer3@c4': {
                templateUrl: '/partials/subnav.html',
                controller: 'SubNavController'
            }
        }
    }).state('c4.teaser', {
        url: '/teaser',
        views: {
            'layer2@c4': {
                templateUrl: 'partials/t4.html',
                controller: 'T4Controller'
            },
            'layer3@c4': {
                templateUrl: '/partials/subnav.html',
                controller: 'SubNavController'
            }
        }
    }).state('c4.video', {
        url: '/video',
        views: {
            'layer2@c4': {
                templateUrl: 'partials/v4.html',
                controller: 'V4Controller'
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

