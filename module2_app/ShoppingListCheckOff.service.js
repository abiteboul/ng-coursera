(function () {
    'use strict';

    angular
        .module('ShoppingListCheckOff')
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    function ShoppingListCheckOffService() {
        var service = this;

        var itemsBought = [];
        var itemsToBuy = [
            {name: 'aubergines', quantity: 2},
            {name: 'zucchinis', quantity: 4},
            {name: 'onions', quantity: 2},
            {name: 'tomatoes', quantity: 5},
            {name: 'bell peppers', quantity: 2}
        ];

        service.getItemsToBuy = function() {
            return itemsToBuy;
        };

        service.getItemsBought = function() {
            return itemsBought;
        };

        service.boughtItem = function(itemIndex) {
            var boughtItem = itemsToBuy[itemIndex];
            itemsToBuy.splice(itemIndex, 1).Object;
            itemsBought.push(boughtItem);
        };
    }

})();
