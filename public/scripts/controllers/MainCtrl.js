'use strict';

/**
 *  MainCtrl
 *
 *  Controller of the app
 */
angular.module('hypothesisApp')
    .controller('MainCtrl', [
        '$scope',
        'Config',
        function ($scope, Config) {
            var config = Config.getConfig();
            console.log(config);


            $scope.send = function () {
                console.log('qwerty');
            }
        }]);
