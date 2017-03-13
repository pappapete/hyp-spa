'use strict';

/**
 * Form Item Directive
 */

angular.module('hypothesisApp')
    .directive('dirFormItem', [
        'Config',
        function(Config) {
            return {
                restrict: 'A',
                scope: true,
                templateUrl: Config.config.paths.views.partials + 'form-item.html',
                link: function (scope, element, attr) {
                    scope.item = {
                        typeInput: (attr.dirFormItem) === 'input',
                        inputType: attr.dirFormItemType,
                        multiEmail: attr.dirFormItemMultiEmail,
                        isRequired: attr.dirFormItemRequired,
                        model: attr.dirFormItemModel,
                        label: attr.dirFormItemLabel,
                        placeholder: attr.dirFormItemPlaceholder,
                        width: attr.dirFormItemWidth
                    };
                }
            };
        }
    ]);