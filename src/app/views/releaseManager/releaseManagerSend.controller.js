(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('ReleaseManagerSendController', ReleaseManagerSendController);

    function ReleaseManagerSendController($templateCache) {
        var vm = this;

        $templateCache.put('ui-grid/selectionRowHeaderButtons', $templateCache.get('app/views/releaseManager/cellTemplates/selectionRowHeader.html'));

        vm.hoveredRow = -1;
        vm.uiGridData = [];
        vm.gridApi;
        vm.filters = {

            sort: {
                column: 'Company Name',
                descending: false
            },

            CompanyName: '',
            HasRelease: '',
            Market: '',
            MarketingGroup: '',
            ReleaseOn: '',
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
            var selectedRows = vm.gridApi.selection.getSelectedRows();
            angular.forEach(selectedRows, function(row) {
                if (row.id == id) { returnValue = true; }
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
                    name: 'State',
                    minWidth: 50,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'state.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'state.html', true)
                },
                {
                    name: 'MarketingGroup',
                    minWidth: 150,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'marketingGroup.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'marketingGroup.html', true)
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
                    CompanyName: 'Example Company 0',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    State: 'FL',
                    MarketingGroup: ''
                },
                {
                    id: 1,
                    CompanyName: 'Example Company 1',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    State: 'FL',
                    MarketingGroup: ''
                },
                {
                    id: 2,
                    CompanyName: 'Example Company 2',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    State: 'FL',
                    MarketingGroup: ''
                },
                {
                    id: 3,
                    CompanyName: 'Example Company 3',
                    HasRelease: 'no',
                    Eligible: 'no',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    State: 'FL',
                    MarketingGroup: ''
                },
                {
                    id: 4,
                    CompanyName: 'Example Company 4',
                    HasRelease: 'no',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    State: 'FL',
                    MarketingGroup: ''
                },
                {
                    id: 5,
                    CompanyName: 'Example Company 5',
                    HasRelease: 'no',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    State: 'FL',
                    MarketingGroup: ''
                },
                {
                    id: 6,
                    CompanyName: 'Example Company 6',
                    HasRelease: 'no',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    State: 'FL',
                    MarketingGroup: ''
                },
                {
                    id: 7,
                    CompanyName: 'Example Company 7',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    State: 'FL',
                    MarketingGroup: ''
                },
                {
                    id: 8,
                    CompanyName: 'Example Company 8',
                    HasRelease: 'no',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    State: 'FL',
                    MarketingGroup: ''
                },
                {
                    id: 9,
                    CompanyName: 'Example Company 9',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    State: 'FL',
                    MarketingGroup: ''
                },
                {
                    id: 10,
                    CompanyName: 'Example Company 10',
                    HasRelease: 'no',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    State: 'FL',
                    MarketingGroup: ''
                },
                {
                    id: 11,
                    CompanyName: 'Example Company 11',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    State: 'FL',
                    MarketingGroup: ''
                },
                {
                    id: 12,
                    CompanyName: 'Example Company 12',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    State: 'FL',
                    MarketingGroup: ''
                },
                {
                    id: 13,
                    CompanyName: 'Example Company 13',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    State: 'FL',
                    MarketingGroup: ''
                },
                {
                    id: 14,
                    CompanyName: 'Example Company 14',
                    HasRelease: 'yes',
                    Eligible: 'yes',
                    ReleaseOn: '04/11/2016',
                    Territory: 'CW-US',
                    Type: 'PARTNER',
                    Market: 'Services',
                    State: 'FL',
                    MarketingGroup: ''
                }
            ];
            vm.setUIGrid();
        }
        vm.drawGrid();

    }


})();
