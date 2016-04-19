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
    function CWLoaderController($rootScope, $window, urlService, $timeout) {
        var vm = this;

        vm.urlService = urlService;
        vm.loadingCnt = 0;
        vm.loadingText = 'Please wait...';

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

        vm.onLoaderChange = $rootScope.$on('CWLOADER_CHANGE', function(event, value) {
            vm.loadingText = value;
        });

        vm.onLoaderAdd = $rootScope.$on('CWLOADER_ADD', function() {
            vm.loadingCnt++;
            $timeout(function() { vm.syncResize(); }, 10);
        });

        vm.onLoaderRemove = $rootScope.$on('CWLOADER_REMOVE', function() {
            vm.loadingCnt--;
        });

    }
  }

})();
