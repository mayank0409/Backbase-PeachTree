angular.
    module('transactionsList')
    .component('transactionsList', {
        restrict: 'E',
        templateUrl: './components/transactions-list/transactions-list.template.html',
    }).component('actions', {
        restrict: 'E',
        bindings: {
            searchPlaceholder: "@",
            filterClick: "&",
            selectedFilter: "<"
        },
        templateUrl: './components/transactions-list/transactions-list-actions.template.html',
    }).component('transaction', {
        restrict: 'E',
        bindings: {
            transaction: "<",
        },
        templateUrl: './components/transactions-list/transactions-list-transaction.template.html',
    });
