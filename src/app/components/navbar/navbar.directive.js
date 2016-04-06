(function() {
  'use strict';

  angular
    .module('cwstyles')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {},
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;

        vm.selectedMenuId = 'nav-link-globalsearch';
        vm.menu = [
            {
                label: 'Global Search',
                icon: 'glyphicon glyphicon-globe',
                id: 'nav-link-globalsearch',
                alt: 'Global Search',
                href: '#',
                target: '_self',
                expanded: false,
                children: []
            },
            {
                label: 'Submenu Example',
                icon: 'glyphicon glyphicon-compressed',
                id: 'nav-link-submenuexample',
                alt: 'Submenu Example',
                href: '#',
                target: '_self',
                expanded: false,
                children: [
                    {
                        label: 'Fish',
                        id: 'nav-link-home-fish',
                        alt: 'Home Fish Link',
                        href: '#',
                        target: '_self'
                    },
                    {
                        label: 'Dish',
                        id: 'nav-link-home-dish',
                        alt: 'Home Dish Link',
                        href: '#',
                        target: '_self'
                    },
                    {
                        label: 'Wish',
                        id: 'nav-link-home-wish',
                        alt: 'Home Wish Link',
                        href: '#',
                        target: '_self'
                    }
                ]
            },
            {
                label: 'Submenu Example 2',
                icon: 'glyphicon glyphicon-compressed',
                id: 'nav-link-submenuexample2',
                alt: 'Submenu Example 2',
                href: '#',
                target: '_self',
                expanded: false,
                children: [
                    {
                        label: 'Sub Item 1',
                        id: 'nav-link-home-fish2',
                        alt: 'Home Fish Link',
                        href: '#',
                        target: '_self'
                    },
                    {
                        label: 'Sub Item 2',
                        id: 'nav-link-home-dish2',
                        alt: 'Home Dish Link',
                        href: '#',
                        target: '_self'
                    },
                    {
                        label: 'Sub Item 3',
                        id: 'nav-link-home-wish2',
                        alt: 'Home Wish Link',
                        href: '#',
                        target: '_self'
                    }
                ]
            },
            {
                label: 'Profile',
                icon: 'glyphicon glyphicon-user',
                id: 'nav-link-profile',
                alt: 'Profile Link',
                href: '#',
                target: '_self',
                expanded: false,
                children: []
            },
            {
                label: 'Messages',
                badge: '5',
                icon: 'glyphicon glyphicon-comment',
                id: 'nav-link-messages',
                alt: 'Messages Link',
                href: '#',
                target: '_self',
                expanded: false,
                children: []
            }
        ];

        vm.expandMenuItem = function(id) {
            angular.forEach(vm.menu, function(navItem) {
                if (navItem.id == id) {
                    navItem.expanded = !navItem.expanded;
                    if (!navItem.children.length) { vm.selectedMenuId = id; }
                } else {
                    navItem.expanded = false;
                }
            });
        }

        vm.hasChildSelected = function(id) {
            var returnValue = false;
            angular.forEach(vm.menu, function(navItem) {
                if (navItem.id == id) {
                    angular.forEach(navItem.children, function(navChild) {
                        if (vm.selectedMenuId == navChild.id) {
                            returnValue = true;
                        }
                    });
                }
            });
            return returnValue;
        }

    }
  }

})();
