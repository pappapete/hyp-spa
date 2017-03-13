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
                }
            };

            this.windowData = window.data || [];
        }
    ]);