(function() {
  'use strict';

  angular
    .module('cwstyles')
    .directive('example', example);

  /** @ngInject */
  function example() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/example/example.html',
      scope: {},
      controller: ExampleController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ExampleController() {
      //var vm = this;
      //vm.currentState = $rootScope.$state.current.name;

    }
  }

})();
