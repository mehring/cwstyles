(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('ButtonsController', ButtonsController);

    function ButtonsController() {
        var vm = this;

        vm.radioModel = 'Week';

    }


})();
