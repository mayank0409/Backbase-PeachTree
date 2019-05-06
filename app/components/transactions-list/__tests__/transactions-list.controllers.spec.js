describe('getAllTransactions controller', function () {
    var GetAllTransactionsCtrl;
    var scope;
    var TransactionsService;
    // beforeEach(angular.mock.module('$scope'));
    beforeEach(angular.mock.module('transactionsList'));

    beforeEach(inject(function (_transactionsService_) {
        TransactionsService = _transactionsService_;
        TransactionsService.getList = () => new Promise((resolve) => resolve([]))
    }));
    beforeEach(inject(function ($rootScope, $controller, $templateCache, $compile) {
        scope = $rootScope.$new();
        GetAllTransactionsCtrl = $controller('getAllTransactions', { $scope: scope });
    }));

    it('should exist', function () {
        expect(GetAllTransactionsCtrl).toBeDefined();
        expect(TransactionsService).toBeDefined();
    });
    it('should set the appliedFilter and sorting on calling filterClick with test filterName', function () {
        expect(GetAllTransactionsCtrl.appliedFilter).toEqual(null);
        expect(GetAllTransactionsCtrl.appliedFilterSortAscending).toBeTruthy();
        GetAllTransactionsCtrl.filterClick('test');
        expect(GetAllTransactionsCtrl.appliedFilter).toEqual('test');
        expect(GetAllTransactionsCtrl.appliedFilterSortAscending).toBeTruthy();
    });
    it('should set ascending to false when the applied filter is called with test filterName 2 times', function () {
        expect(GetAllTransactionsCtrl.appliedFilter).toEqual(null);
        expect(GetAllTransactionsCtrl.appliedFilterSortAscending).toBeTruthy();
        GetAllTransactionsCtrl.filterClick('test');
        expect(GetAllTransactionsCtrl.appliedFilter).toEqual('test');
        expect(GetAllTransactionsCtrl.appliedFilterSortAscending).toBeTruthy();
        GetAllTransactionsCtrl.filterClick('test');
        expect(GetAllTransactionsCtrl.appliedFilterSortAscending).toBeFalsy();
    });
    it('should set ascending to true when the applied filter is called with test filterName 3 times', function () {
        expect(GetAllTransactionsCtrl.appliedFilter).toEqual(null);
        expect(GetAllTransactionsCtrl.appliedFilterSortAscending).toBeTruthy();
        GetAllTransactionsCtrl.filterClick('test');
        expect(GetAllTransactionsCtrl.appliedFilter).toEqual('test');
        expect(GetAllTransactionsCtrl.appliedFilterSortAscending).toBeTruthy();
        GetAllTransactionsCtrl.filterClick('test');
        expect(GetAllTransactionsCtrl.appliedFilterSortAscending).toBeFalsy();
        GetAllTransactionsCtrl.filterClick('test');
        expect(GetAllTransactionsCtrl.appliedFilterSortAscending).toBeTruthy();
    });
    it('should call the getSearchText method and when searchTextChanged event is detected', function () {
        spyOn(TransactionsService, 'getSearchText');
        scope.$emit('searchTextChanged');
        expect(TransactionsService.getSearchText).toHaveBeenCalled();
    });

});

describe('transactionListActions controller', function () {
    var TransactionListActions;
    var scope;
    var TransactionsService;
    // beforeEach(angular.mock.module('$scope'));
    beforeEach(angular.mock.module('transactionsList'));

    beforeEach(inject(function (_transactionsService_) {
        TransactionsService = _transactionsService_;
        TransactionsService.getList = () => new Promise((resolve) => resolve([]))
    }));
    beforeEach(inject(function ($rootScope, $controller, $templateCache, $compile) {
        scope = $rootScope.$new();
        TransactionListActions = $controller('transactionListActions', { $scope: scope });
    }));

    it('should exist', function () {
        expect(TransactionListActions).toBeDefined();
        expect(TransactionsService).toBeDefined();
    });

    it('should true if both the values are same', function () {
        expect(TransactionListActions.shouldHighlightFilter('a', 'a')).toBeTruthy();
    });
    it('should set the searchText to blank on reset  ', function () {
        TransactionListActions.searchText = 'asdada';
        TransactionListActions.resetSearch();
        expect(TransactionListActions.searchText).toEqual('');

    });
    it('should call the watch function when searchTextChanges and sets the text using the service', function () {
        spyOn(TransactionsService, 'setSearchText');
        scope.searchText = 'asdada';
        scope.$digest();
        expect(TransactionsService.setSearchText).toHaveBeenCalled();
    });

});