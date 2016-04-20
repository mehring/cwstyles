(function() {
  'use strict';

  angular
    .module('cwstyles')
    .factory('globalService', function(loaderService,
                                       urlService) {
          var s = this;

          s.loaderService = loaderService;
          s.urlService = urlService;

          return s;
      }
  );

})();
