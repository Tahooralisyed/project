app.controller('headerctrl', headerctrl);
headerctrl.$inject = ["$scope","$location",'$localStorage'];

function headerctrl($scope,$location,$localStorage) {
    $scope.logout = function(){
        delete $localStorage.login_details;
        $location.path('/login');
    }
}