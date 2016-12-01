(function() {
    'use strict';

    angular
        .module('NarrowItDownApp')
        .factory('menuSearchService', menuSearchService);

    menuSearchService.$inject = ['$http', '$q'];

    function menuSearchService($http, $q) {

        var service = {
            getMatchedMenuItems : getMatchedMenuItems
        };
        return service;

        function getMatchedMenuItems(searchTerm) {
            var foundItems = [];
            var deferred = $q.defer();

            var request = {
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            };

            $http(request)
                .then(function(result) {
                    var allItems = result.data;
                    angular.forEach(allItems.menu_items, function(element){
                        if (searchTerm && element.description.indexOf(searchTerm) !== -1) {
                            foundItems.push(element);
                        }
                    });
                    deferred.resolve(foundItems);
                });
            return deferred.promise;
        }

    }

})();
