angular.module('transactionsList').controller('getAllTransactions', ['$scope', 'transactionsService', function ($scope, transactionsService) {
    this.searchText = '';
    this.appliedFilter = null;
    this.appliedFilterSortAscending = true;
    $scope.$on(('searchTextChanged'), () => {
        this.searchText = transactionsService.getSearchText();
    });
    this.filterClick = (selectedFilter) => {
        if (this.appliedFilter === selectedFilter) {
            this.appliedFilterSortAscending = !this.appliedFilterSortAscending
        }
        else {
            this.appliedFilter = selectedFilter;
            this.appliedFilterSortAscending = true;
        }
    }
    transactionsService.getList().then((transactions) => {
        this.transactions = transactions;
        $scope.$apply();
    }).catch((error) => {
        console.error('error fetching info', error);
    })
}]).controller('transactionListActions', ['$scope', 'transactionsService', function ($scope, transactionsService) {
    this.searchText = '';
    this.shouldHighlightFilter = function (filterOn, selectedFilter) {
        return filterOn === selectedFilter
    }
    this.resetSearch = function() {
        this.searchText = '';
    }
    $scope.$watch(() => this.searchText, function updateSearchText(newValue) {
        transactionsService.setSearchText(newValue);
        $scope.$emit('searchTextChanged');
    }, true);
}])