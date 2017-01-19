(function () {
    'use strict';
    app.controller('aboutctrl', aboutctrl);
    aboutctrl.$inject = ['$rootScope'];

    function aboutctrl($rootScope) {
        $rootScope.abouthead = "About Us";
    }
})();
