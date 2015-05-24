'use strict';

socialNetworkApp.controller('AppController',
    function AppController($scope, $http, $route, authService) {
        $scope.authService = authService;

        $scope.routeReload = function () {
            $route.reload();
        };

        //set headers after refresh
        if (sessionStorage.currentUser != undefined) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + authService.getCurrentUser().access_token;
        }


    });