app.directive('header', header);

function header() {
    return {
        restrict: 'E',
        templateUrl: 'templates/customheader.html',
        controller: 'headerctrl'
    }
}