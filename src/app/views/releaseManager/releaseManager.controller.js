(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('ReleaseManagerController', ReleaseManagerController);

    function ReleaseManagerController($uibModal, $templateCache) {
        var vm = this;

        vm.openManageReleaseModal = function() {

            var modalInstance = $uibModal.open({
                template: $templateCache.get('app/views/releaseManager/modalManageRelease.html'),
                templateUrl: 'app/views/releaseManager/modalManageRelease.html',
                controller: 'ReleaseManagerModalManageReleaseController',
                controllerAs: 'main',
                backdrop: 'static'
            });

            modalInstance.opened.then(function() {
                //modal is now open!
            });

        };

    }


})();
