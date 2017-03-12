'use strict';

/**
 *
 *  Config Service for app
 */

angular.module('hypothesisApp')

    .service('Config', [
        function() {

            var config = {
                paths: {
                    images:  'images/',
                    views: {
                        partials: 'views/partials/',
                        root: 'views/'
                    }
                }
            };

            this.getConfig = function () {
                return config;
            };


            // var windowData = window.data || [];
            // this.getData = function (data) {
            //     return angular.copy(windowData[data]);
            // };
        }
    ]);