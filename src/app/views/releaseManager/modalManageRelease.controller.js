(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('ReleaseManagerModalManageReleaseController', ReleaseManagerModalManageReleaseController);

    function ReleaseManagerModalManageReleaseController($log,
                                                        $uibModalInstance,
                                                        releaseService,
                                                        releaseId) {
        var vm = this;

        vm.releaseService = releaseService;
        vm.releaseId = releaseId;
        vm.showModalPreview = false;

        vm.resetFormData = function() {
            vm.formData = {
                id: -1,
                name: '',
                agentVersionMin: '',
                agentVersionMax: '',
                marketingGroup: '',
                downloadUrl: '',
                prerequisiteId: null,
                enabled: false,
                emailHtml: '',
                modalHtml: '',
                alertHtml: '',
                createdDate: -1,
                updatedDate: -1
            }
        };
        vm.resetFormData();

        vm.setFormData = function(releaseId) {
            vm.resetFormData();
            angular.forEach(releaseService.releases, function(release) {
                if (release.id == releaseId) {
                    vm.formData.id = release.id;
                    vm.formData.name = release.name;
                    vm.formData.agentVersionMin = release.agentVersionMin;
                    vm.formData.agentVersionMax = release.agentVersionMax;
                    vm.formData.marketingGroup = release.marketingGroup;
                    vm.formData.downloadUrl = release.downloadUrl;
                    vm.formData.prerequisiteId = release.prerequisiteId;
                    vm.formData.enabled = release.enabled;
                    vm.formData.emailHtml = release.emailHtml;
                    vm.formData.modalHtml = release.modalHtml;
                    vm.formData.alertHtml = release.alertHtml;
                    vm.formData.createdDate = release.createdDate;
                    vm.formData.updatedDate = release.updatedDate;
                }
            })

        }
        vm.setFormData(vm.releaseId);

        vm.ok = function () {
            $uibModalInstance.dismiss('OK');
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('Canceled');
        };

    }


})();
