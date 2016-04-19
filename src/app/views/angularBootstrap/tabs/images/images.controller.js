(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('ImagesController', ImagesController);

    function ImagesController(urlService) {
        var vm = this;

        vm.urlService = urlService;

    }


})();
