'use strict';

/**
 *  hypothesisApp
 *
 * Main module of the application.
 */
angular
    .module('hypothesisApp', [
        'ngRoute'
    ])
    .config([
        '$routeProvider',
        '$locationProvider',
        function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }]);
