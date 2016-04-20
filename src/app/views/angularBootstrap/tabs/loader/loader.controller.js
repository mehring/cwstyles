(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('LoaderController', LoaderController);

    function LoaderController(globalService, $timeout) {
        var vm = this;

        vm.loadingText = 'Loading...';

        vm.startLoader = function() {
            globalService.loaderService.changeLoaderMessage(vm.loadingText);
            globalService.loaderService.addLoadValue(1);
            $timeout(function() {
                globalService.loaderService.removeLoadValue(1);
            }, 2000);
        }

    }


})();
