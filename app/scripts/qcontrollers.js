
arrControllers.Q1Controller = function ($scope, $interval, $state, $sce){

    console.log('Q1Controller fired');

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

    $scope.showSelectAll = true;

    var msgReps = 0;
    $interval(function(){

        switch (msgReps){
            case 0:
            case 1:
                break;
            case 2:
                var selectall = document.querySelector('.img-selectall');
                if(selectall){
                    selectall.classList.add('fadeout');
                }

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


arrControllers.Q2Controller = function ($scope, $interval, $state, $sce){

    console.log('Q2Controller fired');

    $scope.currentState1 = false;
    $scope.currentState2 = false;
    $scope.currentState3 = false;
    $scope.currentState4 = false;

    $scope.boolQ11 = function($event){
        $scope.currentState1 = !( $scope.currentState1 );
        if($scope.currentState1){
            $event.currentTarget.src = 'images/Chap2QuizImg1b.png';
        } else {
            $event.currentTarget.src = 'images/Chap2QuizImg1a.png';
        }
    }
    $scope.boolQ12 = function($event){
        $scope.currentState2 = !( $scope.currentState2 );
        if($scope.currentState2){
            $event.currentTarget.src = 'images/Chap2QuizImg2b.png';
        } else {
            $event.currentTarget.src = 'images/Chap2QuizImg2a.png';
        }
    }
    $scope.boolQ13 = function($event){
        $scope.currentState3 = !( $scope.currentState3 );
        if($scope.currentState3){
            $event.currentTarget.src = 'images/Chap2QuizImg3b.png';
        } else {
            $event.currentTarget.src = 'images/Chap2QuizImg3a.png';
        }
    }
    $scope.boolQ14 = function($event){
        $scope.currentState4 = !( $scope.currentState4 );
        if($scope.currentState4){
            $event.currentTarget.src = 'images/Chap2QuizImg4b.png';
        } else {
            $event.currentTarget.src = 'images/Chap2QuizImg4a.png';
        }
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

    $scope.showSelectAll = true;

    var msgReps = 0;
    $interval(function(){

        switch (msgReps){
            case 0:
            case 1:
                break;
            case 2:
                var selectall = document.querySelector('.img-selectall');
                if(selectall){
                    selectall.classList.add('fadeout');
                }

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


arrControllers.Q3Controller = function ($scope, $interval, $state, $sce){

    console.log('Q3Controller fired');

    $scope.currentState1 = false;
    $scope.currentState2 = false;
    $scope.currentState3 = false;
    $scope.currentState4 = false;

    $scope.boolQ11 = function($event){
        $scope.currentState1 = !( $scope.currentState1 );
        if($scope.currentState1){
            $event.currentTarget.src = 'images/Chap3QuizImg1b.png';
        } else {
            $event.currentTarget.src = 'images/Chap3QuizImg1a.png';
        }
    }
    $scope.boolQ12 = function($event){
        $scope.currentState2 = !( $scope.currentState2 );
        if($scope.currentState2){
            $event.currentTarget.src = 'images/Chap3QuizImg2b.png';
        } else {
            $event.currentTarget.src = 'images/Chap3QuizImg2a.png';
        }
    }
    $scope.boolQ13 = function($event){
        $scope.currentState3 = !( $scope.currentState3 );
        if($scope.currentState3){
            $event.currentTarget.src = 'images/Chap3QuizImg3b.png';
        } else {
            $event.currentTarget.src = 'images/Chap3QuizImg3a.png';
        }
    }
    $scope.boolQ14 = function($event){
        $scope.currentState4 = !( $scope.currentState4 );
        if($scope.currentState4){
            $event.currentTarget.src = 'images/Chap3QuizImg4b.png';
        } else {
            $event.currentTarget.src = 'images/Chap3QuizImg4a.png';
        }
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

    $scope.showSelectAll = true;

    var msgReps = 0;
    $interval(function(){

        switch (msgReps){
            case 0:
            case 1:
                break;
            case 2:
                var selectall = document.querySelector('.img-selectall');
                if(selectall){
                    selectall.classList.add('fadeout');
                }

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


arrControllers.Q4Controller = function ($scope, $interval, $state, $sce){

    console.log('Q4Controller fired');

    $scope.currentState1 = false;
    $scope.currentState2 = false;
    $scope.currentState3 = false;
    $scope.currentState4 = false;

    $scope.boolQ11 = function($event){
        $scope.currentState1 = !( $scope.currentState1 );
        if($scope.currentState1){
            $event.currentTarget.src = 'images/Chap4QuizImg1b.png';
        } else {
            $event.currentTarget.src = 'images/Chap4QuizImg1a.png';
        }
    }
    $scope.boolQ12 = function($event){
        $scope.currentState2 = !( $scope.currentState2 );
        if($scope.currentState2){
            $event.currentTarget.src = 'images/Chap4QuizImg2b.png';
        } else {
            $event.currentTarget.src = 'images/Chap4QuizImg2a.png';
        }
    }
    $scope.boolQ13 = function($event){
        $scope.currentState3 = !( $scope.currentState3 );
        if($scope.currentState3){
            $event.currentTarget.src = 'images/Chap4QuizImg3b.png';
        } else {
            $event.currentTarget.src = 'images/Chap4QuizImg3a.png';
        }
    }
    $scope.boolQ14 = function($event){
        $scope.currentState4 = !( $scope.currentState4 );
        if($scope.currentState4){
            $event.currentTarget.src = 'images/Chap4QuizImg4b.png';
        } else {
            $event.currentTarget.src = 'images/Chap4QuizImg4a.png';
        }
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

    $scope.showSelectAll = true;

    var msgReps = 0;
    $interval(function(){

        switch (msgReps){
            case 0:
            case 1:
                break;
            case 2:
                var selectall = document.querySelector('.img-selectall');
                if(selectall){
                    selectall.classList.add('fadeout');
                }

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