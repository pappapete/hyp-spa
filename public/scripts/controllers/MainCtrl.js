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

            $scope.email = {};

            $scope.clear = function () {
                $scope.emailForm.$setPristine();
                $scope.email = {};
                $scope.email.from = '';
            };

            // function is called on the key up for the to, cc, bcc inputs
            // to check the email address string to ensure all emails are
            // valid and unique
            $scope.validateEmailString = function(model, multi) {
                if(multi==='false') {
                    return;
                }
                // if input value
                if(!$scope.email[model] || !$scope.email[model].length){
                    $scope.emailForm[model].$invalid = false;
                    $scope.emailForm.$invalid = false;
                    return;
                }
                // if the email address string is invalid, update validation for the modal and the form
                $scope.emailForm[model].$invalid = !EmailService.validateEmails($scope.email[model]);
                $scope.emailForm.$invalid = !EmailService.validateEmails($scope.email[model]);
            };

            $scope.send = function () {
                // check to/cc/bcc for duplicates
                var concatToCcBcc = $scope.email.to;
                concatToCcBcc += ($scope.email.cc) ? ', ' + $scope.email.cc : '';
                concatToCcBcc += ($scope.email.bcc) ? ', ' + $scope.email.bcc : '';
                if(!EmailService.validateEmails(concatToCcBcc)) {
                    toastr.error('There are duplicate email addresses in the To/CC/BCC fields',
                        'Sorry there was an error');
                    return;
                }

                EmailService.sendEmail($scope.email).then(function(res) {
                    console.log(res);
                    toastr.success(res.data, 'Email Success!');
                }, function(error) {
                    console.log(error);
                    toastr.error('Email not sent', 'Sorry there was an error');

                });

            };
        }]);
