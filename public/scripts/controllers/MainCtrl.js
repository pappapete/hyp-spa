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
        'EmailService',
        'toastr',
        function ($scope, Config, EmailService, toastr) {
            $scope.data = Config.windowData.form;

            $scope.email = {

            };

            $scope.clear = function () {
                $scope.emailForm.$setPristine();
                $scope.email = {};
                $scope.email.from = '';
            };

            $scope.validateEmailString = function(model, multi) {
                if(multi==='false') {
                    return;
                }
                $scope.emailForm[model].$invalid = !EmailService.validateEmails($scope.email[model]);
            };

            $scope.send = function () {
                EmailService.sendEmail($scope.email).then(function(res) {
                    console.log(res);
                    toastr.success(res.data, 'Email Success!');
                }, function(error) {
                    console.log(error);
                    toastr.error('Email not sent', 'Sorry there was an error');

                });

            };
        }]);
