var arrControllers = {};

arrControllers.MainController = function($scope, $state){

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