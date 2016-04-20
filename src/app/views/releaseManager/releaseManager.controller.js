(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('ReleaseManagerController', ReleaseManagerController);

    function ReleaseManagerController($log,
                                      $uibModal,
                                      $templateCache,
                                      globalService,
                                      releaseService) {
        var vm = this;

        vm.globalService = globalService;
        vm.releaseService = releaseService;
        vm.selectedReleaseId = -1;

        vm.loadingData = function() {
            if (globalService.loaderService.loadingCnt > 0) {
                return true;
            }
            return false;
        }

        vm.openManageReleaseModal = function(releaseId) {

            var modalInstance = $uibModal.open({
                template: $templateCache.get('app/views/releaseManager/modalManageRelease.html'),
                templateUrl: 'app/views/releaseManager/modalManageRelease.html',
                controller: 'ReleaseManagerModalManageReleaseController',
                controllerAs: 'manageReleaseCtrl',
                backdrop: 'static',
                resolve: {
                    releaseId: function() {
                        return releaseId;
                    }
                }
            });

            modalInstance.opened.then(function() {
                //modal is now open!
            });

        };

    }


})();
