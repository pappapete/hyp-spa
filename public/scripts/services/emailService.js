'use strict';

/**
 *
 *  Utilities Service for app
 */

angular.module('hypothesisApp')

    .service('EmailService', [
        '$http',
        'Config',
        function($http, Config) {

            /**
             *  Function: validateEmail
             *  Checks email string against regex
             */
            var validateEmail =  function(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            };

            /**
             *  Function: hasDuplicates
             *  Uses lodash function to check if there are duplicates in an array
             */
            var hasDuplicates = function(a) {
                return _.uniq(a).length !== a.length;
            };

            /**
             *  Function: validateEmails
             *  The function takes a string of emails and checks if all
             *  emails are valid and also not duplicated
             */
            this.validateEmails = function (emailString) {
                if(!emailString) {
                    return;
                }
                var valid = true;
                // split string into separate emails
                var emails = emailString.split(',');
                emailString = '';

                angular.forEach(emails, function (item, index) {
                    var email = item.trim();
                    if (validateEmail(email)) {
                        emails[index] = email;
                        emailString += ((!emailString.length) ? '' : ', ') + email;
                    } else {
                        valid = false;
                    }
                });

                if(!valid || hasDuplicates(emails)){
                    return null;
                }
                return emailString;
            };

            /**
             *  Function: sendEmail
             *  The function sends the http request for posting the email
             */
            this.sendEmail = function (data) {
              return $http({
                  url: Config.config.emailUrl,
                  method: 'POST',
                  data: data
              })
            };
        }
    ]);

