(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('LoaderController', LoaderController);

    function LoaderController($rootScope, $timeout) {
        var vm = this;

        vm.loadingText = 'Loading...';

        vm.startLoader = function() {
            $rootScope.$broadcast('CWLOADER_CHANGE', vm.loadingText);
            $rootScope.$broadcast('CWLOADER_ADD', 1);
            $timeout(function() {
                $rootScope.$broadcast('CWLOADER_REMOVE', 1);
            }, 2000);
        }

    }


})();
