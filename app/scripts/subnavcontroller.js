/**
 * Created by zp on 11/15/2015.
 */
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
