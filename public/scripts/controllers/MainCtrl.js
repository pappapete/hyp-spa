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

            /**
             *  Function: clear
             *  Clears the form and sets its state back to pristine
             */
            $scope.clear = function () {
                $scope.emailForm.$setPristine();
                $scope.email = {};
                $scope.email.from = '';
            };

            /**
             *  Function: checkValidation
             *  Checks all form elements and updates form valid and invalid flags
             */
            var checkValidation = function () {
                var isFormValid =  $scope.emailForm.to.$valid && $scope.emailForm.from.$valid &&
                    $scope.emailForm.cc.$valid && $scope.emailForm.bcc.$valid &&
                    $scope.emailForm.subject.$valid && $scope.emailForm.body.$valid;
                $scope.emailForm.$valid = isFormValid;
                $scope.emailForm.$invalid = !isFormValid;
            };

            /**
             *  Function: validateEmailString
             *  The function is called on the key up for the to, cc, bcc inputs to check
             *  the email address string to ensure all emails are valid and unique
             */
            $scope.validateEmailString = function(model, multi) {
                if(multi==='false') {
                    return;
                }
                // input value set to valid if no value is present
                if(!$scope.email[model] || !$scope.email[model].length){
                    $scope.emailForm[model].$valid = true;
                    $scope.emailForm[model].$invalid = false;
                    checkValidation();
                    return;
                }
                // if the email address string is invalid, update validation for the input and the form
                $scope.emailForm[model].$valid = !!(EmailService.validateEmails($scope.email[model]));
                $scope.emailForm[model].$invalid = !(EmailService.validateEmails($scope.email[model]));
                checkValidation();
            };

            /**
             *  Function: send
             *  The function first checks for duplicates among the to/cc/bcc fields
             *  then sends the request for the email to be sent, then responds to the response
             */
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
                    toastr.success(res.data, 'Email Success!');
                }, function(error) {
                    toastr.error('Email not sent', 'Sorry there was an error');
                });
            };
        }]);
