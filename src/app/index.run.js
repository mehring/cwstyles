(function() {
    'use strict';

    angular
        .module('cwstyles')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope,
                      $state,
                      $stateParams,
                      $log) {

        //expose the $state and $stateParams services
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $log.debug('runBlock end');
    }

})();