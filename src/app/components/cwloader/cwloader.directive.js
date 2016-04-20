(function() {
  'use strict';

  angular
    .module('cwstyles')
    .directive('cwloader', cwloader);

  /** @ngInject */
  function cwloader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/cwloader/cwloader.html',
      scope: {},
      controller: CWLoaderController,
      controllerAs: 'cwloaderCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CWLoaderController($rootScope, $window, $timeout, globalService) {
        var vm = this;

        vm.globalService = globalService;

        vm.windowWidth = $window.innerWidth;
        vm.windowHeight = $window.innerHeight;

        vm.syncResize = function() {
            var boxWidth = angular.element('.cwloader-box').width();
            var boxHeight = angular.element('.cwloader-box').height();
            angular.element('.cwloader-box').css('top', ((vm.windowHeight / 2) - (boxHeight / 2)) + 'px');
            angular.element('.cwloader-box').css('left', ((vm.windowWidth / 2) - (boxWidth / 2)) + 'px');
            angular.element('.cwloader-bg').css('height', vm.windowHeight + 'px');
            angular.element('.cwloader-bg').css('width', vm.windowWidth + 'px');
        }

        vm.syncResize();
        angular.element($window).bind('resize', function() {
            vm.windowWidth = $window.innerWidth;
            vm.windowHeight = $window.innerHeight;
            vm.syncResize();
        });

        vm.onLoaderAdd = $rootScope.$on('CWLOADER_UPDATE', function() {
            $timeout(function() { vm.syncResize(); }, 10);
        });

    }
  }

})();
