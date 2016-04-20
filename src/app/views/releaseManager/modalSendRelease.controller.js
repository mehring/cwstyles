(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('ReleaseManagerModalSendReleaseController', ReleaseManagerModalSendReleaseController);

    function ReleaseManagerModalSendReleaseController($uibModalInstance) {
        var vm = this;

        vm.ok = function () {
            $uibModalInstance.dismiss('OK');
        };

    }


})();
