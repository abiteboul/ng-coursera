(function () {
    'use strict';

    angular
        .module('ShoppingListCheckOff')
        .controller('ToBuyController', ToBuyController);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var tobuy = this;
        tobuy.listItems = ShoppingListCheckOffService.getItemsToBuy();
        tobuy.boughtItem = function(itemIndex) {
            ShoppingListCheckOffService.boughtItem(itemIndex);
        };
    }

})();
