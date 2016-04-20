(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('ImagesController', ImagesController);

    function ImagesController(globalService) {
        var vm = this;

        vm.urlService = globalService.urlService;

    }


})();
