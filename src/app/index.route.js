(function () {
    'use strict';

    angular
        .module('cwstyles')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
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
            .state('table', {
                url: '/table',
                templateUrl: 'app/views/table/table.html',
                controller: 'TableController',
                controllerAs: 'main'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
