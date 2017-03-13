'use strict';

/**
 *
 *  Utilities Service for app
 */

angular.module('hypothesisApp')

    .service('Utils', [
        function() {

            var validateEmail =  function(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            };

            var hasDuplicates = function(a) {
                return _.uniq(a).length !== a.length;
            };

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




        }
    ]);

