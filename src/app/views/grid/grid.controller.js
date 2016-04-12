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

        vm.getUIGridColumnDefs = function() {
            var columnDefs = [
                {
                    name: 'Ticket',
                    width: 80,
                    cellTemplate: $templateCache.get('app/views/grid/cellTemplates/ticket.html'),
                    headerCellTemplate: $templateCache.get('app/views/grid/cellTemplates/header/ticket.html')
                },
                {
                    name: 'Priority',
                    width: 80,
                    cellTemplate: $templateCache.get('app/views/grid/cellTemplates/priority.html'),
                    headercellTemplate: $templateCache.get('app/views/grid/cellTemplates/header/priority.html')
                },
                {
                    name: 'Age',
                    minWidth: 70,
                    cellTemplate: $templateCache.get('app/views/grid/cellTemplates/age.html'),
                    headercellTemplate: $templateCache.get('app/views/grid/cellTemplates/header/age.html')
                },
                {
                    name: 'SummaryDescription',
                    minWidth: 300,
                    cellTemplate: $templateCache.get('app/views/grid/cellTemplates/summaryDescription.html'),
                    headerCellTemplate: $templateCache.get('app/views/grid/cellTemplates/header/summaryDescription.html')
                },
                {
                    name: 'Status',
                    minWidth: 120,
                    headercellTemplate: $templateCache.get('app/views/grid/cellTemplates/header/status.html')
                },
                {
                    name: 'Company',
                    minWidth: 120,
                    headercellTemplate: $templateCache.get('app/views/grid/cellTemplates/header/company.html')
                },
                {
                    name: 'Resources',
                    minWidth: 120,
                    headercellTemplate: $templateCache.get('app/views/grid/cellTemplates/header/resources.html')
                },
                {
                    name: 'TotalHours',
                    minWidth: 120,
                    headercellTemplate: $templateCache.get('app/views/grid/cellTemplates/header/totalHours.html')
                },
                {
                    name: 'Budget',
                    minWidth: 120,
                    headercellTemplate: $templateCache.get('app/views/grid/cellTemplates/header/budget.html')
                },
                {
                    name: 'Contact',
                    minWidth: 120,
                    headercellTemplate: $templateCache.get('app/views/grid/cellTemplates/header/contact.html')
                },
                {
                    name: 'Type',
                    minWidth: 120,
                    headercellTemplate: $templateCache.get('app/views/grid/cellTemplates/header/type.html')
                },
                {
                    name: 'Subtype',
                    minWidth: 120,
                    headercellTemplate: $templateCache.get('app/views/grid/cellTemplates/header/subtype.html')
                },
                {
                    name: 'Team',
                    minWidth: 120,
                    headercellTemplate: $templateCache.get('app/views/grid/cellTemplates/header/team.html')
                },
                {
                    name: 'LastUpdate',
                    minWidth: 240,
                    headercellTemplate: $templateCache.get('app/views/grid/cellTemplates/header/lastUpdate.html')
                },
                {
                    name: 'Entered',
                    minWidth: 120,
                    headercellTemplate: $templateCache.get('app/views/grid/cellTemplates/header/entered.html')
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
