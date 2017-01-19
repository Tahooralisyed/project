(function () {
    'use strict';
    app.run(run).config(config);
    run.$inject=['$rootScope','$localStorage','$location'];
    function run($rootScope,$localStorage,$location) {
        $rootScope.$on('$stateChangeStart',function (event,fromState,toState,fromParams,toParams) {
            if (!($localStorage.login_details)){
                $location.path('/login');
            }
        //    console.log('Routing is called');
        });
    }
    config.$inject=['$stateProvider','$urlRouterProvider'];
    function config($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
        $stateProvider.state('login',{
            url:'/login',
            templateUrl:'templates/login.html',
            controller:'login'
        })
            .state('aboutus',{
                url:'/aboutus',
                templateUrl: 'templates/aboutus.html',
                controller: 'aboutctrl'
            })
            .state('home',{
                url:'/home',
                templateUrl:'templates/home.html',
                controller:'home'
            })

    }
})();