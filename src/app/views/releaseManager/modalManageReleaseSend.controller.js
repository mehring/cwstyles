(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('ReleaseManagerModalManageReleaseSendController', ReleaseManagerModalManageReleaseSendController);

    function ReleaseManagerModalManageReleaseSendController($uibModalInstance) {
        var vm = this;

        vm.ok = function () {
            $uibModalInstance.dismiss('OK');
        };

    }


})();
