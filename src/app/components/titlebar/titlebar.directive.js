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
    function TitlebarController($window) {
      var vm = this;

        vm.syncTopPosition = function() {
            angular.element('.titlebar').css('top', angular.element($window).scrollTop() + 'px');
        }

        //sync titlebar position
        vm.syncTopPosition();
        angular.element($window).scroll(event, function() {
            vm.syncTopPosition();
        });

    }
  }

})();
