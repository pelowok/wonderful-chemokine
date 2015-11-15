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





infiApp.controller(arrControllers);