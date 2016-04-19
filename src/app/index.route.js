(function () {
    'use strict';

    angular
        .module('cwstyles')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider

            /**
             *
             *  LabTech Release Manager Routes
             *
             **/

            .state('release-manager', {
                url: '/release-manager',
                templateUrl: 'app/views/releaseManager/releaseManager.html',
                controller: 'ReleaseManagerController',
                controllerAs: 'main'
            })

            .state('release-manager-send', {
                url: '/release-manager-send',
                templateUrl: 'app/views/releaseManager/releaseManagerSend.html',
                controller: 'ReleaseManagerSendController',
                controllerAs: 'main'
            })

            /**
             *
             *  Angular Bootstrap Routes
             *
             **/

            .state('angular-bootstrap', {
                url: '/angular-bootstrap',
                templateUrl: 'app/views/angularBootstrap/angularBootstrap.html',
                controller: 'AngularBootstrapController',
                controllerAs: 'main'
            })


        $urlRouterProvider.otherwise('/angular-bootstrap');
    }

})();
