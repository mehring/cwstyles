(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('ReleaseManagerModalManageReleaseController', ReleaseManagerModalManageReleaseController);

    function ReleaseManagerModalManageReleaseController($uibModalInstance) {
        var vm = this;

        vm.showModalPreview = false;

        vm.formData = {
            modalHTML: '<div style="text-align:left;"><p>When performing an upgrade from previous LabTech versions, all normal system settings and custom configurations will be preserved.</p><p><strong>*** If you have edited your LabTech Web Portal, upgrading LabTech will overwrite it back to the default settings. Please backup any web customizations before upgrading your LabTech system. ***</strong></p><p>Clean installs can be performed by the same installer.</p><ul><li><a href="https://docs.labtechsoftware.com/LabTech2013/Default.htm#GettingStarted/1.GettingStarted.htm#" target="_blank">LabTech Getting Started Guide</a></li><li><a href="http://www.labtechsoftware.com/pdf/Technical-Requirements.pdf" target="_blank">LabTech Tech Specs</a></li></ul></div>',
            alertHTML: '<strong>New Release Available!</strong><br/>LabTech 10.5 has just been released to you. <a class="alert-link">Click here.</a>'
        }

        vm.ok = function () {
            $uibModalInstance.dismiss('OK');
        };

    }


})();
