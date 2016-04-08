(function () {
    'use strict';

    angular
        .module('cwstyles')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('buttons', {
                url: '/buttons',
                templateUrl: 'app/views/buttons/buttons.html',
                controller: 'ButtonsController',
                controllerAs: 'main'
            })
            .state('forms', {
                url: '/forms',
                templateUrl: 'app/views/forms/forms.html',
                controller: 'FormsController',
                controllerAs: 'main'
            })
            .state('grid', {
                url: '/grid',
                templateUrl: 'app/views/grid/grid.html',
                controller: 'GridController',
                controllerAs: 'main'
            })
            .state('main', {
                url: '/',
                templateUrl: 'app/views/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
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
            .state('table', {
                url: '/table',
                templateUrl: 'app/views/table/table.html',
                controller: 'TableController',
                controllerAs: 'main'
            })
            .state('tabs', {
                url: '/tabs',
                templateUrl: 'app/views/tabs/tabs.html',
                controller: 'TabsController',
                controllerAs: 'main'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
