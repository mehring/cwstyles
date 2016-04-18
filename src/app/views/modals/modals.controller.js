(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('ModalsController', ModalsController);

    function ModalsController($templateCache, $uibModal) {
        var vm = this;

        vm.openExampleModal = function(size) {

            var modalInstance = $uibModal.open({
                template: $templateCache.get('app/views/modals/exampleModal.html'),
                templateUrl: 'app/views/modals/exampleModal.html',
                controller: 'ExampleModalController',
                controllerAs: 'main',
                size: size
            });

            modalInstance.opened.then(function() {
                //modal is now open!
            });

        };

    }


})();
