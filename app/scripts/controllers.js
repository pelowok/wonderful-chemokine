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

arrControllers.MainMenuController = function($scope, $state, $sce) {

    console.log('MainMenuController fired');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
        $API.seekTime(3);
    };

    $scope.mainmenuConfig = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/mainmenu.mp4"),
                type: "video/mp4"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    $scope.checkTime = function ($currentTime, $API) {

        var currentTime = Math.round($currentTime);

        console.log(currentTime);

        if (currentTime >= 6 && currentTime <=27) {
            $scope.menuactive = true;
            console.log('Math.round($currenttime) reached 4 : menu active : ' + currentTime);
        } else {
            $scope.menuactive = false;
            console.log('Math.round($currenttime) reached 25 : menu inactive : ' + currentTime);
        }
    };

    $scope.restart = function () {
        console.log('$scope.restartfired');
        //$scope.$API.play();
        $scope.navTo('attract');
    };

    $scope.btnImg = [
        { btn: 'mm_s1', img: '/images/blank.png', state: 'c1.tranz' },
        { btn: 'mm_s2', img: '/images/blank.png', state: 'ch21' },
        { btn: 'mm_s3', img: '/images/blank.png', state: 'ch31' },
        { btn: 'mm_s4', img: '/images/blank.png', state: 'ch41' }
    ];

    $scope.navTo = function(state){
        console.log('state : ' + state);
        $state.transitionTo(state);
    }
};

arrControllers.SubNavController = function($scope, $state, $sce) {
    console.log('SubNavController assigned');

    $scope.subnavstate = "closenav";
    $scope.boolSideNavOpen = false;

    $scope.flipSubNav = function(){
        if($scope.subnavstate === "closenav"){
            $scope.subnavstate = "opennav";
            $scope.boolSideNavOpen = true;
        } else {
            $scope.subnavstate = "closenav";
            $scope.boolSideNavOpen = false;
        }
    }

}

arrControllers.AttractController = function($sce, $scope, $interval, $state) {

    console.log('AttractController assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/attract.mp4"),
                type: "video/mp4",
                ngClick: "navTo('mainmenu')"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    $scope.complete = function () {
        $state.transitionTo('mainmenu');
    };

};

arrControllers.BigBlueBallController = function($scope, $state) {

    console.log('bigblueball potato');

    var mainCanvas = document.querySelector("#myCanvas");
    var mainContext = mainCanvas.getContext("2d");

    var canvasWidth = mainCanvas.width;
    var canvasHeight = mainCanvas.height;

    function drawCircle() {

        mainContext.clearRect(0, 0, canvasWidth, canvasHeight);

        // draw the circle
        mainContext.beginPath();

        var radius = 600;
        mainContext.arc(960, 540, radius, 0, Math.PI * 2, false);
        mainContext.closePath();

        // color in the circle
        mainContext.fillStyle = 'rgba(0,0,100,0.5)';
        mainContext.fill();

    }
    drawCircle();

}

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


arrControllers.Z1Controller  = function($scope, $state, $sce) {

    console.log('Z1Controller fired');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/Transition_1.mp4"),
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
        //$scope.$API.play();
        $scope.navTo('c1.quiz');
    };

};

arrControllers.Q1Controller = function ($scope, $interval, $state, $sce){

    console.log('Q1Controller fired');

    $scope.btnImg = [
        { id: 'red', btn: 'q1b1', img: '/images/red.png', class: 'q1b' },
        { id: 'red', btn: 'q1b2', img: '/images/red.png', class: 'q1b' },
        { id: 'red', btn: 'q1b3', img: '/images/red.png', class: 'q1b' },
        { id: 'red', btn: 'q1b4', img: '/images/red.png', class: 'q1b' }
    ];

    $scope.currentState1 = false;
    $scope.currentState2 = false;
    $scope.currentState3 = false;
    $scope.currentState4 = false;

    $scope.boolQ11 = function($event){
        $scope.currentState1 = !( $scope.currentState1 );
        if($scope.currentState1){
            $event.currentTarget.src = 'images/Chap1QuizImg1b.png';
        } else {
            $event.currentTarget.src = 'images/Chap1QuizImg1a.png';
        }
    }
    $scope.boolQ12 = function($event){
        $scope.currentState2 = !( $scope.currentState2 );
        if($scope.currentState2){
            $event.currentTarget.src = 'images/Chap1QuizImg2b.png';
        } else {
            $event.currentTarget.src = 'images/Chap1QuizImg2a.png';
        }
    }
    $scope.boolQ13 = function($event){
        $scope.currentState3 = !( $scope.currentState3 );
        if($scope.currentState3){
            $event.currentTarget.src = 'images/Chap1QuizImg3b.png';
        } else {
            $event.currentTarget.src = 'images/Chap1QuizImg3a.png';
        }
    }
    $scope.boolQ14 = function($event){
        $scope.currentState4 = !( $scope.currentState4 );
        if($scope.currentState4){
            $event.currentTarget.src = 'images/Chap1QuizImg4b.png';
        } else {
            $event.currentTarget.src = 'images/Chap1QuizImg4a.png';
        }
    }

    $scope.doThis = function($event){
        console.log($event.currentTarget.foo);
    }

    $scope.allCorrect = false;

    $scope.evaluateQuiz = function(){
        $scope.allCorrect = $scope.currentState1==true && $scope.currentState2==true && $scope.currentState3==true && $scope.currentState4 == false;
        console.log('allCorrect : ' + $scope.allCorrect);

        if($scope.allCorrect){
            $scope.toggleSlider('.slider1');
        } else {
            $scope.toggleSlider('.slider2');
        }
    }


    $scope.toggleCorrect = function(){

        var slider = document.querySelector('.correct');

        if (slider.classList.contains('opened')) {
            slider.classList.remove('opened');
            slider.classList.add('closed');
        } else {
            slider.classList.remove('closed');
            slider.classList.add('opened');
        }
    }
    $scope.toggleTryAgain = function(){

        var slider = document.querySelector('.tryagain');

        if (slider.classList.contains('opened')) {
            slider.classList.remove('opened');
            slider.classList.add('closed');
        } else {
            slider.classList.remove('closed');
            slider.classList.add('opened');
        }
    }

    $scope.showSelectAll = true;

    var msgReps = 0;
    $interval(function(){

        switch (msgReps){
            case 0:
            case 1:
                break;
            case 2:
                var selectall = document.querySelector('.img-selectall');
                selectall.classList.add('fadeout');
                break;
            case 3:
                $scope.showSelectAll = false;
                break;
            default:
                break;
        }

        console.log('msgReps : ' + msgReps);
        msgReps++;
    }, 2000, 4);

}

arrControllers.S1Controller = function ($scope, $interval, $state, $sce) {

    console.log('S1Controller assigned');

    $scope.showMsg = true;

    var msgReps = 0;
    $interval(function(){

        switch (msgReps){
            case 0:
            case 1:
                break;
            case 2:
                var msg = document.querySelector('.img-msg');
                msg.classList.add('fadeout');
                break;
            case 3:
                $scope.showMsg = false;
                break;
            default:
                break;
        }

        console.log('msgReps : ' + msgReps);
        msgReps++;
    }, 2000, 4);

}

arrControllers.T1Controller = function ($scope, $interval, $state, $sce) {
    console.log('T1Controller assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };



    $scope.complete = function () {
        console.log('$scope.complete fired');
        //$state.transitionTo('mainmenu');
        $scope.$API.play();
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/Teaser_1.mp4"),
                type: "video/mp4",
                ngClick: "videoComplete()"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };
}

arrControllers.V1Controller = function ($scope, $interval, $state, $sce) {
    console.log('V1Controller assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };



    $scope.complete = function () {
        console.log('$scope.complete fired');
        $state.transitionTo('mainmenu');
        //$scope.$API.play();
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/Segment_1.mp4"),
                type: "video/mp4",
                ngClick: "complete()"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };
}

arrControllers.FullVideoController = function($sce, $scope, $interval, $state) {

    console.log('FullVideoController assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };




    $scope.videoComplete = function () {
        console.log('$scope.videoComplete fired');
        $state.transitionTo('mainmenu');
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/fullvideo.mp4"),
                type: "video/mp4",
                ngClick: "videoComplete()"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    var vidClick = function(){
        console.log('vidClick() fired');
        $scope.$API.playPause();
    }

};

infiApp.controller(arrControllers);