var arrControllers = {};

arrControllers.MainController = function($scope, $state){

    $scope.partThisIs = 0;

    $scope.nextPart = function(){
        $scope.partThisIs += 1;
    }

    $scope.whatPartIsThis = function(guess){

        return (guess === $scope.partThisIs);

    }

    $scope.navTo = function (page) {
        $state.transitionTo(page);
    };

    $scope.toggleRef = function(){

        var slider = document.querySelector('.slider');

        console.log(slider);

        if (slider.classList.contains('opened')) {
            slider.classList.remove('opened');
            slider.classList.add('closed');
        } else {
            slider.classList.remove('closed');
            slider.classList.add('opened');
        }
    }

    $scope.toggleSlider = function(myTarget){

        var slider = document.querySelector(myTarget);
        console.log(myTarget);
        //var slider = $event.currentTarget;

        if (slider.classList.contains('opened')) {
            slider.classList.remove('opened');
            slider.classList.add('closed');
        } else {
            slider.classList.remove('closed');
            slider.classList.add('opened');
        }
    }

    $scope.showFullVideo = function(){
        console.log('showFullVideo() fired');
        $state.transitionTo('fullvideo');
    }

};


arrControllers.C1Controller  = function($scope, $state, $sce) {

    console.log('C1Controller fired');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/bgloop1.mp4"),
                type: "video/mp4"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    $scope.complete = function () {
        $scope.$API.play();
    };

};


infiApp.controller(arrControllers);