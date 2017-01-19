(function () {
    'use strict';
    app.controller('login',login);
    login.$inject=['$scope','login_service','$localStorage','$location'];
    function login($scope,login_service,$localStorage,$location) {
        $scope.login_details=function (data) {
            login_service.getlogin_details(data).then(function (response) {
                if(response=='success'){
                    $localStorage.login_details=response;
                    $location.path('/home');
                }else {
                    alert('Wrong Credentials!');
                }
            });
        };
    };
})();