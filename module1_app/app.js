(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        $scope.lunchMenu = '';
        $scope.placeholder = 'list comma separated dishes you usually have for lunch (empty items do not count)';

        $scope.checkLunch = function () {
            var nbItems = countLunchItems($scope.lunchMenu);
            if (nbItems === 0) {
                $scope.message = 'Please enter data first';
            } else if (nbItems < 4) {
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';
            }
        };

        var countLunchItems = function (lunchMenu) {
            var listItems = lunchMenu.split(',');
            var lunchSize = 0;
            for (var i = 0; i < listItems.length; i++) {
                if (/\S/.test(listItems[i])) {  // string is not empty
                    lunchSize += 1;
                }
            }
            return lunchSize;
        };
    }

})();
