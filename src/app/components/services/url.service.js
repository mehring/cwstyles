(function() {
  'use strict';

  angular
    .module('cwstyles')
    .factory('urlService', function($location) {
          var s = this;

          s.getResourcePrefix = function() {
              switch($location.port()) {
                  case 3000: return './'
                  default: return './Angular/dist/'
              }
          }

          return s;
      }
  );

})();
