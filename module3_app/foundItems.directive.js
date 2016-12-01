(function() {
    'use strict';

    angular
        .module('NarrowItDownApp')
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {

        var ddo = {
            templateUrl: 'foundList.html',
            restrict: 'AE',
            scope: {
                found: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    function FoundItemsDirectiveController() {
        var list = this;
        list.something = {};
    }

})();
