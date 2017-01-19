(function () {
    'use strict';
    app.controller('home',home);
    home.$inject=['$scope','$localStorage','$location'];
    function home($scope,$localStorage,$location) {
        $scope.menu_one=function () {
            alert('Menu_one is called!');
        }
        $scope.menu_two=function () {
            alert('Menu_two is called!');
        }
        $scope.menu_three=function () {
            alert('Menu_three is called!');
        }
        $scope.menu_four=function () {
            alert('Menu_four is called!');
        }
        $scope.menu_five=function () {
            alert('Menu_five is called!');
        }
        $scope.logout=function () {
            delete $localStorage.login_details;
            $location.path('/login');
        };
    }
})();
