var arrControllers = {};

arrControllers.MainController = function($scope, $state){

    $scope.partThisIs = 0;

    $scope.nextPart = function(){
        $scope.partThisIs += 1;
    }

    $scope.whatPartIsThis = function(guess){

        return (guess === $scope.partThisIs);

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

        //if (currentTime === 25) {
        //    $scope.menuactive = false;
        //    console.log('Math.round($currenttime) reached 25 : menu inactive : ' + currentTime);
        //}

        //if (currentTime === 25) {
        //    $scope.$API.pause();
        //    console.log('Math.round($currenttime) reached 25 : ' + currentTime);
        //}
    };

    $scope.restart = function () {
        console.log('$scope.restartfired');
        //$scope.$API.play();
        $scope.navTo('attract');
    };

    $scope.btnImg = [
        { btn: 'mm_s1', img: '/images/red.png', state: 'c1' },
        { btn: 'mm_s2', img: '/images/red.png', state: 'ch21' },
        { btn: 'mm_s3', img: '/images/red.png', state: 'ch31' },
        { btn: 'mm_s4', img: '/images/red.png', state: 'ch41' }
    ];

    $scope.navTo = function(state){
        console.log('state : ' + state);
        $state.transitionTo(state);
    }
};

arrControllers.AttractController = function($sce, $scope, $interval, $state) {

    console.log('AttractController assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
        //$API.seekTime(4);
        //$API.play();
    };

    $scope.attractConfig = {
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

    $scope.navTo = function (page) {
        $state.transitionTo(page);
    };

    $scope.checkAttractTime = function ($currentTime, $duration) {

        var currentTime = Math.round($currentTime);

        console.log(currentTime);

        if (currentTime === 30) {
            $scope.$API.pause();
            console.log('Math.round($currenttime) reached 30 : ' + currentTime);
            $state.transitionTo('attractpause');
        }
    };

    $scope.restartAttract = function () {
        console.log('$scope.restartAttract fired');
        //$scope.$API.play();
        $state.transitionTo('mainmenu');
    };

};

arrControllers.BigBlueBallController = function($scope, $state) {



    $scope.navTo = function (page) {
        $state.transitionTo(page);
    };

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

    var states = ['A', 'B'];
    $scope.states = states;
    $scope.currentState = 'A';
    $scope.foo = true;

    $scope.doStuff = function(toState) {
        $scope.currentState = toState;
        console.log($scope.currentState);
    };

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.videos = [
        {
            sources: [
                { src: $sce.trustAsResourceUrl("/video/transition1.mp4"), type: "video/mp4" }
            ]
        },
        {
            sources: [
                { src: $sce.trustAsResourceUrl("/video/bgloop1.mp4"), type: "video/mp4" }
            ]
        },
        {
            sources: [
                { src: $sce.trustAsResourceUrl("/video/teaser1.mp4"), type: "video/mp4" }
                //{ src: $sce.trustAsResourceUrl("/video/teaser1.mp4"), type: "video/mp4" }
            ]
        },
        {
            sources: [
                { src: $sce.trustAsResourceUrl("/video/bgloop1.mp4"), type: "video/mp4" }
                //{ src: $sce.trustAsResourceUrl("/video/segment1.mp4"), type: "video/mp4" }
            ]
        }
    ];

    $scope.config = {
        sources: $scope.videos[0].sources,
        autoPlay: true
    }

    $scope.setVideo = function (videosIndex) {
        console.log('$scope.complete fired. $state.includes(c1) : ' + $state.includes('c1'));
        if(videosIndex){
            $scope.config.sources = $scope.videos[videosIndex].sources;
        } else {
            $scope.config.sources = $scope.videos[$scope.partThisIs].sources;
        }

        $scope.$API.play();
    };

    $scope.complete = function () {
        switch($scope.partThisIs){
            case 0:
                $scope.config.sources = $scope.videos[1].sources;
                $scope.nextPart();

                //console.log('$scope.partThisIs : ' + $scope.partThisIs);
                //$scope.$API.play();
                $scope.setVideo();
                break;
            case 1:
            case 2:
                //console.log('$scope.partThisIs : ' + $scope.partThisIs);
                //$scope.$API.play();
                $scope.setVideo();
                break;
            case 3:
                $scope.$API.pause();
                break;
            default:
                console.log('$scope.complete fell to default. Catch me if you can.');
                break;
        }
        //console.log('$scope.config.sources : ' + $scope.config.sources.src);
        //$scope.partThisIs += 1;
        //console.log('$scope.partThisIs : ' + $scope.partThisIs);
        //$scope.setVideo();
    };

};
//arrControllers.Ch11Controller  = function($scope, $state, $sce) {
//
//    console.log('Ch11Controller fired');
//
//    $scope.API = null;
//
//    $scope.onPlayerReady = function ($API) {
//        console.log('onPlayerReady fired');
//        $scope.$API = $API;
//    };
//
//    $scope.config = {
//        sources: [
//            {
//                src: $sce.trustAsResourceUrl("/video/ch1.mp4"),
//                type: "video/mp4"
//            }
//        ],
//        theme: "/bower_components/videogular-themes-default/videogular.css",
//        plugins: {
//            poster: "http://www.videogular.com/assets/images/videogular.png"
//        },
//        autoPlay: true
//    };
//
//    $scope.playedOnce = false;
//
//    $scope.complete = function () {
//        console.log('$scope.complete fired');
//        $scope.$API.play();
//        //$state.go('ch11.2', {reload:false});
//        //$state.go('ch12');
//        if(!$scope.playedOnce){
//            $scope.playedOnce = true;
//            console.log('CHANGE STATE TO SHOW QUIZ NOW');
//            $state.transitionTo('c1.q1');
//        }
//    };
//
//    $scope.navTo = function(state){
//        console.log('$scope.navTo(state) : ' + state);
//        $state.go(state);
//    }
//}

arrControllers.Ch12Controller = function($scope, $state, $sce) {


    console.log('Ch12Controller assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/ch1.mp4"),
                type: "video/mp4"
            }
        ],
        theme: "/bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        },
        autoPlay: true
    };

    $scope.navTo = function (page) {
        $state.transitionTo(page);
    };

    $scope.complete = function () {
        console.log('$scope.complete fired');
        $scope.$API.play();
    };

}

arrControllers.Q1Controller = function ($scope, $interval, $state, $sce){

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

        var slider = document.querySelector('.tryagain');
        if($scope.allCorrect){
            slider = document.querySelector('.correct');
        }

        if (slider.classList.contains('opened')) {
            slider.classList.remove('opened');
            slider.classList.add('closed');
        } else {
            slider.classList.remove('closed');
            slider.classList.add('opened');
        }

    }

    $scope.toggleRef = function(){

        var slider = document.querySelector('.slider');

        if (slider.classList.contains('opened')) {
            slider.classList.remove('opened');
            slider.classList.add('closed');
        } else {
            slider.classList.remove('closed');
            slider.classList.add('opened');
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

    $scope.showFullVideo = function(){
        console.log('showFullVideo() fired');
        $state.transitionTo('fullvideo');
    }

}


arrControllers.DEFUNCT_QUIZCONTROLLER = function ($scope,$http,$sce) {

    console.log('$scope.partThisIs from inside QuizController : ' + $scope.partThisIs);
    $scope.score = 0;
    $scope.activeQuestion = -1;
    $scope.activeQuestionAnswered = 0;
    $scope.percentage = 0;

    $http.get('../quiz_data.json').then( function(quizData) {
        // $http.get('http://mynameiszak.com/sandbox/quiz/quiz_data.json').then( function(quizData) {

        console.log('QuizController fired');

        $scope.myQuestions = quizData.data;
        $scope.totalQuestions = $scope.myQuestions.length;

    });

    $scope.selectAnswer = function ( qIndex, aIndex ) {

        var questionState = $scope.myQuestions[qIndex].questionState;

        if( questionState != 'answered'){

            $scope.myQuestions[qIndex].selectedAnswer = aIndex;

            var correctAnswer = $scope.myQuestions[qIndex].correct;
            $scope.myQuestions[qIndex].correctAnswer = correctAnswer;

            if( aIndex === correctAnswer ){

                $scope.myQuestions[qIndex].correctness = 'correct';
                $scope.score += 1;

            } else {

                $scope.myQuestions[qIndex].correctness = 'incorrect';

            }

            $scope.myQuestions[qIndex].questionState = 'answered';

        }

        $scope.percentage = (( $scope.score / $scope.totalQuestions ) * 100 ).toFixed(0) ;

    }

    $scope.isSelected = function( qIndex, aIndex ){

        return $scope.myQuestions[qIndex].selectedAnswer === aIndex;

    }

    $scope.isCorrect = function( qIndex, aIndex ){

        return $scope.myQuestions[qIndex].correctAnswer === aIndex;

    }

    $scope.selectContinue = function(){
        return $scope.activeQuestion += 1;
    }

    $scope.createShareLinks = function(percentage){

        var url = 'http://zipl.org/sandbox/quiz';

        var emailLink = '<a class="btn email" href="mailto:?subject=Potato&amp;body=I scored a ' + percentage + '% on this quiz at ' + url + '">Email a friend</a>';

        var twitterLink = '<a class="btn twitter" target="_blank" href="#">Tweet your score</a>';

        var newMarkup = emailLink + twitterLink;

        return $sce.trustAsHtml(newMarkup);


    }

}

arrControllers.FullVideoController = function($sce, $scope, $interval, $state) {

    console.log('FullVideoController assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
    };


    $scope.navTo = function (page) {
        $state.transitionTo(page);
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