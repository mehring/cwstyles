(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('GridController', GridController);

    function GridController($templateCache) {
        var vm = this;

        vm.uiGridData = [];
        vm.filters = {

            sort: {
                column: 'Ticket',
                descending: true
            },

            Ticket: '',
            Priority: '',
            Age: '',
            SummaryDescription: '',
            Status: '',
            Company: '',
            Resources: '',
            TotalHours: '',
            Budget: '',
            Contact: '',
            Type: '',
            Subtype: '',
            Team: '',
            LastUpdate: '',
            Entered: ''

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
            var prefix = 'app/views/grid/cellTemplates/';
            var columnDefs = [
                {
                    name: 'Ticket',
                    width: 80,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'ticket.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'ticket.html', true),
                    pinnedLeft: true
                },
                {
                    name: 'Priority',
                    width: 80,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'priority.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'priority.html', true),
                    pinnedLeft: true
                },
                {
                    name: 'Age',
                    minWidth: 70,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'age.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'age.html', true),
                    pinnedLeft: true
                },
                {
                    name: 'SummaryDescription',
                    minWidth: 300,
                    cellTemplate: vm.getColumnDefTemplate(prefix, 'summaryDescription.html', false),
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'summaryDescription.html', true)
                },
                {
                    name: 'Status',
                    minWidth: 120,
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'status.html', true)
                },
                {
                    name: 'Company',
                    minWidth: 120,
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'company.html', true)
                },
                {
                    name: 'Resources',
                    minWidth: 120,
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'resources.html', true)
                },
                {
                    name: 'TotalHours',
                    minWidth: 120,
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'totalHours.html', true)
                },
                {
                    name: 'Budget',
                    minWidth: 120,
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'budget.html', true)
                },
                {
                    name: 'Contact',
                    minWidth: 120,
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'contact.html', true)
                },
                {
                    name: 'Type',
                    minWidth: 120,
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'type.html', true)
                },
                {
                    name: 'Subtype',
                    minWidth: 120,
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'subtype.html', true)
                },
                {
                    name: 'Team',
                    minWidth: 120,
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'team.html', true)
                },
                {
                    name: 'LastUpdate',
                    minWidth: 240,
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'lastUpdate.html', true),
                    pinnedRight: true
                },
                {
                    name: 'Entered',
                    minWidth: 120,
                    headerCellTemplate: vm.getColumnDefTemplate(prefix, 'entered.html', true),
                    pinnedRight: true
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
            'columnDefs': vm.getUIGridColumnDefs({})
        };

        vm.drawGrid = function() {
            vm.uiGridData = [
                {
                    Ticket: '1234567',
                    Priority: 'white',
                    Age: '0.0',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'red',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'orange',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'yellow',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'blue',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'green',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'white',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'white',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'white',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'white',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'white',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'white',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'white',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'white',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'white',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'white',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'white',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                },
                {
                    Ticket: '1234567',
                    Priority: 'white',
                    Age: '0.00',
                    SummaryDescription: 'Example Summary Description',
                    Status: 'In-Progress',
                    Company: 'ConnectWise',
                    Resources: 'MEhring',
                    TotalHours: '0.00',
                    Budget: '0.00',
                    Contact: 'Matthew Ehring',
                    Type: 'University',
                    Subtype: 'Enhancement',
                    Team: 'LT-Webmaster',
                    LastUpdate: 'Thu 04/07/2016 9:54 AM UTC-05',
                    Entered: '04/07/2016'
                }
            ];
            vm.setUIGrid();
        }
        vm.drawGrid();


    }


})();
