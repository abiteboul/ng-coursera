(function() {
    'use strict';

    angular
        .module('NarrowItDownApp')
        .controller('NarrowItDownController', NarrowItDownController);

    NarrowItDownController.$inject = ['menuSearchService'];

    function NarrowItDownController(menuSearchService) {
        var vm = this;

        vm.searchText = '';
        vm.found = [];
        vm.searched = false;
        vm.searchMenu = searchMenu;
        vm.removeItem = removeItem;

        function searchMenu() {
            vm.searched = true;
            menuSearchService.getMatchedMenuItems(vm.searchText)
                .then(function(result) {
                    vm.found = result;
                });
        }

        function removeItem(index) {
            vm.found.splice(index, 1);
        }

    }

})();
