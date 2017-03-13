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
        'Utils',
        function ($scope, Config, Utils) {
            $scope.data = Config.windowData.form;
            $scope.email = {};

            $scope.clear = function () {
                $scope.emailForm.$setPristine();
                $scope.email = {};
            };

            $scope.validateEmailString = function(model, multi) {
                if(multi==='false') {
                    return;
                }
                $scope.emailForm[model].$invalid = !Utils.validateEmails($scope.email[model]);
            };

            $scope.send = function () {
                console.log($scope.email.to);
            };
        }]);
