describe('transactionsService service', function () {
    var TransactionsService;

    beforeEach(angular.mock.module('transactionsList'));

    beforeEach(inject(function (_transactionsService_) {
        TransactionsService = _transactionsService_;
    }));


    it('should exist', function () {
        expect(TransactionsService).toBeDefined();
    });
    it('should set the searchText when given', function () {
        expect(TransactionsService.getSearchText()).toEqual('');
        TransactionsService.setSearchText('abc');
        expect(TransactionsService.getSearchText()).toEqual('abc');
    });
    it('should return the searchText', function () {
        TransactionsService.setSearchText('abc');
        expect(TransactionsService.getSearchText()).toEqual('abc');
    });
    it('should return all the transactions in the syste,', function () {
        expect(TransactionsService.getAllTransactions().length).toEqual(0);
        TransactionsService.addTransaction('abc','123',+ new Date());
        expect(TransactionsService.getAllTransactions().length).toEqual(1)
    });
    it('should transformStringAmount to number for amount key in array of transactions', function () {
        const transformedData = TransactionsService.transformStringAmountToNumber([{'amount':'121212','otherTypeData':'123','otherData':{}}]);
        expect(typeof(transformedData[0].amount)).toEqual('number');
        expect(typeof(transformedData[0].otherTypeData)).toEqual('string');
        expect(typeof(transformedData[0].otherData)).toEqual('object')
    });
    it('should add the transaction to the top of the array ', function () {
        expect(TransactionsService.getAllTransactions().length).toEqual(0);
        TransactionsService.addTransaction('First Merchant','123',+ new Date());
        TransactionsService.addTransaction('Second Merchant','123',+ new Date());
        expect(TransactionsService.getAllTransactions()[0].merchant).toEqual('Second Merchant'); 
    });

});