(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('AngularBootstrapController', AngularBootstrapController);

    function AngularBootstrapController() {
        var vm = this;

        vm.currentTab = 'Buttons';
        vm.tabs = [
            'Buttons',
            'Forms',
            'Grid',
            'Modals',
            'Table',
            'Tabs'
        ];

    }


})();
