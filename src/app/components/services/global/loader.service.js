(function() {
  'use strict';

  angular
    .module('cwstyles')
    .factory('loaderService', function($rootScope) {
          var s = this;

          s.loadingText = 'Loading...';
          s.loadingCnt = 0;

          s.changeLoaderMessage = function(value) {
              s.loadingText = value;
              $rootScope.$broadcast('CWLOADER_UPDATE');
          }

          s.addLoadValue = function(value) {
              s.loadingCnt += value;
              $rootScope.$broadcast('CWLOADER_UPDATE');
          }

          s.removeLoadValue = function(value) {
              s.loadingCnt -= value;
              $rootScope.$broadcast('CWLOADER_UPDATE');
          }

          return s;
      }
  );

})();
