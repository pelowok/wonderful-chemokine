
$(document).ready(function () {
    var idleState = false;
    var idleTimer = null;
    $('*').bind('click mouseup mousedown change', function () {
        clearTimeout(idleTimer);
        if (idleState == true) {
            //$("body").css('background-color','#fff');
            console.log('active');
        }
        idleState = false;
        idleTimer = setTimeout(function () {
            //$("body").css('background-color','#000');
            console.log('inactive');
            angular.element('#bodyapp').scope().navTo('attract');
            idleState = true; }, 178000);
    });
    $("body").trigger("mousemove");
});
