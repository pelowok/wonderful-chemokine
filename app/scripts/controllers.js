/**
 * Created by zp on 10/26/2015.
 */

var arrControllers = {};

arrControllers.MainController = function($scope, $state) {

    console.log('MainController fired');

    $scope.btnImg = [
        { btn: 'mm_s1', img: '/images/mainmenu_btnScene1.png', state: 'ch11' },
        { btn: 'mm_s2', img: '/images/mainmenu_btnScene2.png', state: 'ch21' },
        { btn: 'mm_s3', img: '/images/mainmenu_btnScene3.png', state: 'ch31' },
        { btn: 'mm_s4', img: '/images/mainmenu_btnScene4.png', state: 'ch41' }
    ];

    $scope.navTo = function(state){
        console.log('state : ' + state);
        $state.transitionTo(state);
    }
};

arrControllers.AttractController = function($sce, $scope, $interval, $state) {
//infiApp.controller('AttractController', ['$scope', '$sce', '$state', function ($scope, $sce, $state) {

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
                src: $sce.trustAsResourceUrl("/video/Infinity_IPI145_Animation_EN_08a_1080p_2.mp4"),
                type: "video/mp4",
                ngClick: "navTo('attractpause')"
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
        if (Math.round($currentTime) === 25) {
            $scope.$API.pause();
            console.log('$state : ' + $state);
            $state.transitionTo('attractpause');
        }
    };

    $scope.restartAttract = function () {
        console.log('$scope.restartAttract fired');
        $state.transitionTo('attractplay');
    };

//}]);
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

arrControllers.Ch11Controller = function($scope, $state, $sce) {

    console.log('Ch11Controller assigned');

    $scope.navTo = function (page) {
        $state.transitionTo(page);
    };
}

arrControllers.Ch12Controller = function($scope, $state, $sce) {

    console.log('Ch12Controller assigned');

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        console.log('onPlayerReady fired');
        $scope.$API = $API;
        $API.seekTime(25);
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("/video/Infinity_IPI145_Animation_EN_08a_1080p_2.mp4"),
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

    $scope.checkAttractTime = function ($currentTime, $duration) {
        console.log($currentTime);
        if (Math.round($currentTime) === 60) {
            $scope.$API.pause();
            $state.transitionTo('ch13');
        }
    };

}



arrControllers.QuizController = function ($scope,$http,$sce) {

    $scope.score = 0;
    $scope.activeQuestion = -1;
    $scope.activeQuestionAnswered = 0;
    $scope.percentage = 0;

    $http.get('../quiz_data.json').then( function(quizData) {
        // $http.get('http://mynameiszak.com/sandbox/quiz/quiz_data.json').then( function(quizData) {

        console.log('potato');

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



infiApp.controller(arrControllers);