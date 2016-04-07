(function () {
    'use strict';

    angular
        .module('cwstyles')
        .controller('MainController', MainController);

    function MainController($scope) {
        var vm = this;

        vm.radioModel = 'Week';
        vm.uiGridData = [];
        $scope.filters = {

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

        $scope.changeSorting = function(colName) {
            console.log(colName);
            if ($scope.filters.sort.column == colName) {
                $scope.filters.sort.descending = !$scope.filters.sort.descending;
            } else {
                $scope.filters.sort.column = colName;
                $scope.filters.sort.descending = false;
            }
            vm.drawGrid();
        }

        vm.getUIGridColumnDefs = function() {
            var columnDefs = [
                {
                    name: 'Ticket',
                    width: 80,
                    cellTemplate: './app/components/cwgrid/ticket.html',
                    headerCellTemplate: './app/components/cwgrid/header/ticket.html'
                },
                {
                    name: 'Priority',
                    width: 80,
                    cellTemplate: './app/components/cwgrid/priority.html',
                    headerCellTemplate: './app/components/cwgrid/header/priority.html'
                },
                {
                    name: 'Age',
                    minWidth: 70,
                    cellTemplate: './app/components/cwgrid/age.html',
                    headerCellTemplate: './app/components/cwgrid/header/age.html'
                },
                {
                    name: 'SummaryDescription',
                    minWidth: 300,
                    cellTemplate: './app/components/cwgrid/summaryDescription.html',
                    headerCellTemplate: './app/components/cwgrid/header/summaryDescription.html'
                },
                {
                    name: 'Status',
                    minWidth: 120,
                    headerCellTemplate: './app/components/cwgrid/header/status.html'
                },
                {
                    name: 'Company',
                    minWidth: 120,
                    headerCellTemplate: './app/components/cwgrid/header/company.html'
                },
                {
                    name: 'Resources',
                    minWidth: 120,
                    headerCellTemplate: './app/components/cwgrid/header/resources.html'
                },
                {
                    name: 'TotalHours',
                    minWidth: 120,
                    headerCellTemplate: './app/components/cwgrid/header/totalHours.html'
                },
                {
                    name: 'Budget',
                    minWidth: 120,
                    headerCellTemplate: './app/components/cwgrid/header/budget.html'
                },
                {
                    name: 'Contact',
                    minWidth: 120,
                    headerCellTemplate: './app/components/cwgrid/header/contact.html'
                },
                {
                    name: 'Type',
                    minWidth: 120,
                    headerCellTemplate: './app/components/cwgrid/header/type.html'
                },
                {
                    name: 'Subtype',
                    minWidth: 120,
                    headerCellTemplate: './app/components/cwgrid/header/subtype.html'
                },
                {
                    name: 'Team',
                    minWidth: 120,
                    headerCellTemplate: './app/components/cwgrid/header/team.html'
                },
                {
                    name: 'LastUpdate',
                    minWidth: 240,
                    headerCellTemplate: './app/components/cwgrid/header/lastUpdate.html'
                },
                {
                    name: 'Entered',
                    minWidth: 120,
                    headerCellTemplate: './app/components/cwgrid/header/entered.html'
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
