(function() {
  'use strict';

  angular
    .module('cwstyles')
    .directive('titlebar', titlebar);

  /** @ngInject */
  function titlebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/titlebar/titlebar.html',
      scope: {},
      controller: TitlebarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TitlebarController($window, $rootScope) {
      var vm = this;

        vm.currentState = $rootScope.$state.current.name;

    }
  }

})();
