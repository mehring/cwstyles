(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('ReleaseManagerModalManageReleaseController', ReleaseManagerModalManageReleaseController);

    function ReleaseManagerModalManageReleaseController($uibModalInstance) {
        var vm = this;

        vm.ok = function () {
            $uibModalInstance.dismiss('OK');
        };

    }


})();
