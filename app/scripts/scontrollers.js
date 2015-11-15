/**
 * Created by zp on 11/15/2015.
 */

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
