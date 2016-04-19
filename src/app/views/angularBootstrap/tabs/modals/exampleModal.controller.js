(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('ExampleModalController', ExampleModalController);

    function ExampleModalController($uibModalInstance) {
        var vm = this;

        vm.ok = function () {
            $uibModalInstance.dismiss('OK');
        };

    }


})();
