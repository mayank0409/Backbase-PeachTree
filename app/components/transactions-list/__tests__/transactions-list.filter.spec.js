describe('searchTransactions filter', function () {
  var $filter;
  var mockTransactions = [{ merchant: 'a', transactionType: 'a' },{merchant: 'a', transactionType: 'b'}, { merchant: 'z', transactionType: 'z' }]
  beforeEach(angular.mock.module('transactionsList'));

  beforeEach(inject(function (_$filter_) {
    $filter = _$filter_;
  }));

  it('returns all transactions when given undefined', function () {
    var filteredTransactions = $filter('searchTransactions')(mockTransactions, undefined);
    expect(filteredTransactions).toEqual(mockTransactions);
  });
  it('returns all transactions when given null', function () {
    var filteredTransactions = $filter('searchTransactions')(mockTransactions, null);
    expect(filteredTransactions).toEqual(mockTransactions);
  });
  it('returns 2 transactions with a when searched for a', function () {
    var filteredTransactions = $filter('searchTransactions')(mockTransactions, 'a');
    expect(filteredTransactions).toEqual([{ merchant: 'a', transactionType: 'a' },{merchant: 'a', transactionType: 'b'}]);
  });
  it('returns 1 transaction with b when searched for b', function () {
    var filteredTransactions = $filter('searchTransactions')(mockTransactions, 'b');
    expect(filteredTransactions).toEqual([{merchant: 'a', transactionType: 'b'}]);
  });
  it('returns 1 transaction with z when searched for z', function () {
    var filteredTransactions = $filter('searchTransactions')(mockTransactions, 'z');
    expect(filteredTransactions).toEqual([{merchant: 'z', transactionType: 'z'}]);
  });
 
});
