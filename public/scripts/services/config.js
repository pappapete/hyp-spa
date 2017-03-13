'use strict';

/**
 *
 *  Config Service for app
 */

angular.module('hypothesisApp')

    .service('Config', [
        function() {

            this.config = {
                paths: {
                    images:  'images/',
                    views: {
                        partials: 'views/partials/',
                        root: 'views/'
                    }
                },
                emailUrl: 'http://localhost:3000/email'
            };

            this.windowData = window.data || [];
        }
    ]);