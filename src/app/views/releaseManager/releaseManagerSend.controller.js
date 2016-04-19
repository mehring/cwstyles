(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('ReleaseManagerSendController', ReleaseManagerSendController);

    function ReleaseManagerSendController($scope, $window, $templateCache, $uibModal) {
        var vm = this;

        vm.$window = $window;
        vm.hoveredRow = -1;
        vm.uiGridData = [];
        vm.gridHeight = '';
        vm.gridApi;
        vm.selectAllRows = false;
        vm.filters = {

            sort: {
                column: 'Company Name',
                descending: false
            },

            CompanyName: '',
            HasRelease: '',
            Market: '',
            KnownIssues: '',
            ReleaseOn: '',
            Country: '',
            State: '',
            Status: '',
            Territory: '',
            Type: ''

        }

        vm.changeSorting = function(colName) {
            if (vm.filters.sort.column == colName) {
                vm.filters.sort.descending = !vm.filters.sort.descending;
            } else {
                vm.filters.sort.column = colName;
                vm.filters.sort.descending = false;
            }
            vm.drawGrid();
        }

        vm.setHoveredRow = function(id) { vm.hoveredRow = id; }

        vm.rowIDSelected = function(id) {
            var returnValue = false;
            var rows = vm.gridApi.core.getVisibleRows();
            angular.forEach(rows, function(row) {
                if (row.entity.id == id) {
                    if (row.entity.checked) {
                        returnValue = true;
                    }
                }
            });
            return returnValue;
        }

        vm.getColumnDefTemplate = function(prefix, filename, header) {
            var path;
            if (header) {
                path = prefix + 'header/' + filename;
            } else {
                path = prefix + filename;
            }

            var cached = $templateCache.get(path);

            if (cached) {
                return cached;
            } else {
                return path;
            }
        }

        vm.getUIGridColumnDefs = function() {
            var prefix = 'app/views/releaseManager/cellTemplates/';
            var columnDefs = [
                {
                    name: 'selection',
                    width: 30,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'selection.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'selection.html', true),
                    pinnedLeft: true
                },
                {
                    name: 'CompanyName',
                    minWidth: 300,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'companyName.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'companyName.html', true),
                    pinnedLeft: true
                },
                {
                    name: 'HasRelease',
                    width: 115,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'hasRelease.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'hasRelease.html', true),
                    pinnedLeft: true
                },
                {
                    name: 'Eligible',
                    width: 115,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'eligible.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'eligible.html', true),
                    pinnedLeft: true
                },
                {
                    name: 'ReleaseOn',
                    minWidth: 150,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'releaseOn.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'releaseOn.html', true)
                },
                {
                    name: 'Territory',
                    minWidth: 150,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'territory.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'territory.html', true)
                },
                {
                    name: 'Type',
                    minWidth: 150,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'type.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'type.html', true)
                },
                {
                    name: 'Market',
                    minWidth: 150,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'market.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'market.html', true)
                },
                {
                    name: 'Country',
                    minWidth: 150,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'country.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'country.html', true)
                },
                {
                    name: 'State',
                    minWidth: 120,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'state.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'state.html', true)
                },
                {
                    name: 'KnownIssues',
                    minWidth: 150,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'knownIssues.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'knownIssues.html', true)
                }

            ];

            return columnDefs;
        }

        //refreshes the grid with up to date data
        vm.setUIGrid = function () {
            var newOpts = angular.copy(vm.uiGridOptions);
            newOpts.columnDefs = vm.getUIGridColumnDefs();
            newOpts.data = vm.uiGridData;
            vm.uiGridOptions = newOpts;
        };

        //setup defaults for uiGrid
        vm.uiGridData = [];
        vm.uiGridOptions = {
            'data': vm.uiGridData,
            'enableColumnMenus': false,
            'enableSorting': false,
            'columnDefs': vm.getUIGridColumnDefs({}),
            'onRegisterApi': function(gridApi) { vm.gridApi = gridApi; }
        };

        vm.drawGrid = function() {
            vm.uiGridData = [
                {
                    id: 0,
                    checked: false,
                    CompanyName: 'Example Company 0',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    Country: 'United States',
                    State: 'FL',
                    KnownIssues: ''
                },
                {
                    id: 1,
                    checked: false,
                    CompanyName: 'Example Company 1',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    Country: 'United States',
                    State: 'FL',
                    KnownIssues: ''
                },
                {
                    id: 2,
                    checked: false,
                    CompanyName: 'Example Company 2',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    Country: 'United States',
                    State: 'FL',
                    KnownIssues: ''
                },
                {
                    id: 3,
                    checked: false,
                    CompanyName: 'Example Company 3',
                    HasRelease: 'no',
                    Eligible: 'no',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    Country: 'United States',
                    State: 'FL',
                    KnownIssues: ''
                },
                {
                    id: 4,
                    checked: false,
                    CompanyName: 'Example Company 4',
                    HasRelease: 'no',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    Country: 'United States',
                    State: 'FL',
                    KnownIssues: ''
                },
                {
                    id: 5,
                    checked: false,
                    CompanyName: 'Example Company 5',
                    HasRelease: 'no',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    Country: 'United States',
                    State: 'FL',
                    KnownIssues: ''
                },
                {
                    id: 6,
                    checked: false,
                    CompanyName: 'Example Company 6',
                    HasRelease: 'no',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    Country: 'United States',
                    State: 'FL',
                    KnownIssues: ''
                },
                {
                    id: 7,
                    checked: false,
                    CompanyName: 'Example Company 7',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    Country: 'United States',
                    State: 'FL',
                    KnownIssues: ''
                },
                {
                    id: 8,
                    checked: false,
                    CompanyName: 'Example Company 8',
                    HasRelease: 'no',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    Country: 'United States',
                    State: 'FL',
                    KnownIssues: ''
                },
                {
                    id: 9,
                    checked: false,
                    CompanyName: 'Example Company 9',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    Country: 'United States',
                    State: 'FL',
                    KnownIssues: ''
                },
                {
                    id: 10,
                    checked: false,
                    CompanyName: 'Example Company 10',
                    HasRelease: 'no',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    Country: 'United States',
                    State: 'FL',
                    KnownIssues: ''
                },
                {
                    id: 11,
                    checked: false,
                    CompanyName: 'Example Company 11',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    Country: 'United States',
                    State: 'FL',
                    KnownIssues: ''
                },
                {
                    id: 12,
                    checked: false,
                    CompanyName: 'Example Company 12',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    Country: 'United States',
                    State: 'FL',
                    KnownIssues: ''
                },
                {
                    id: 13,
                    checked: false,
                    CompanyName: 'Example Company 13',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    Country: 'United States',
                    State: 'FL',
                    KnownIssues: ''
                },
                {
                    id: 14,
                    checked: false,
                    CompanyName: 'Example Company 14',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    Country: 'United States',
                    State: 'FL',
                    KnownIssues: ''
                }
            ];
            vm.setUIGrid();
        }
        vm.drawGrid();

        //keep grid height synced to window
        vm.syncGridHeight = function(windowHeight) { vm.gridHeight = (windowHeight - 185) + 'px'; };
        vm.syncGridHeight($window.innerHeight);
        $scope.$watch(angular.bind(vm, function() {
            return vm.$window.innerHeight;
        }), function(newValue) {
            vm.syncGridHeight(newValue);
            vm.drawGrid();
        });

        //select / deselect all rows
        $scope.$watch(angular.bind(vm, function() {
            return vm.selectAllRows;
        }), function(newValue) {
            var rows = vm.gridApi.core.getVisibleRows();
            angular.forEach(rows, function(row) {
                row.entity.checked = newValue;
            });
        });

        vm.openManageReleaseSendModal = function() {

            var modalInstance = $uibModal.open({
                template: $templateCache.get('app/views/releaseManager/modalManageReleaseSend.html'),
                templateUrl: 'app/views/releaseManager/modalManageReleaseSend.html',
                controller: 'ReleaseManagerModalManageReleaseSendController',
                controllerAs: 'main',
                backdrop: 'static'
            });

            modalInstance.opened.then(function() {
                //modal is now open!
            });

        };

    }

})();
