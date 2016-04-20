(function() {
  'use strict';

  angular
    .module('cwstyles')
    .factory('releaseService', function($log,
                                        $http,
                                        globalService) {
          var s = this;

          s.releases = [];

          /**
           * Gets LabTech release info from backend
           **/
          s.getReleases = function() {
              globalService.loaderService.addLoadValue(1);
              var url = globalService.urlService.getResourcePrefix() + 'assets/dummy/releaseManager/getReleases.json';
              $http({method:'GET', url:url}).
                  success(function(data) {
                      s.releases = data.releases;
                      globalService.loaderService.removeLoadValue(1);
                  }).
                  error(function() {
                      alert('error in releaseService.getReleases()');
                      globalService.loaderService.removeLoadValue(1);
                  });
          }
          s.getReleases();

          return s;
      }
  );

})();
