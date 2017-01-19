(function () {
    'use strict';
    app.service('login_service',login_service)
    login_service.$inject=['$http','$localStorage'];
    function login_service($http,$localStorage) {
        var obj=this;

        obj.getlogin_details=function (data) {
            return $http.post('/api/login',data).then(function (response) {
                return response.data.login;
            });
        };
        
        return obj;
    }
})();