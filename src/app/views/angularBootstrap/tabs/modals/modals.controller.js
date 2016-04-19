(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('ModalsController', ModalsController);

    function ModalsController($templateCache, $uibModal) {
        var vm = this;

        vm.openExampleModal = function(size) {

            var modalInstance = $uibModal.open({
                template: $templateCache.get('app/views/angularBootstrap/tabs/modals/exampleModal.html'),
                templateUrl: 'app/views/angularBootstrap/tabs/modals/exampleModal.html',
                controller: 'ExampleModalController',
                controllerAs: 'exampleModalCtrl',
                size: size
            });

            modalInstance.opened.then(function() {
                //modal is now open!
            });

        };

    }


})();
