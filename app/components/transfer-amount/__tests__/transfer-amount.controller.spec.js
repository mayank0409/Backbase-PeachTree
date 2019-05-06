describe('transferAmountCtrl controller', function () {
  var TransferAmountController;
  var form;
  var LedgerService;
  var TransactionsService;
  beforeEach(angular.mock.module('transferAmount'));
  beforeEach(angular.mock.module('transactionsList'));

  beforeEach(inject(function (_ledgerService_) {
    LedgerService = _ledgerService_;
  }));
  beforeEach(inject(function (_transactionsService_) {
    TransactionsService = _transactionsService_;
  }));
  beforeEach(inject(function ($rootScope, $controller, $templateCache, $compile) {
    TransferAmountController = $controller('transferAmountCtrl');
    form = jasmine.createSpyObj('form', ['$setPristine', '$setUntouched'])
  }));

  it('should exist', function () {
    expect(TransferAmountController).toBeDefined();
    expect(LedgerService).toBeDefined();
  });
  it('should reset the form', function () {
    TransferAmountController.resetForm(form)
    expect(form.$setPristine).toHaveBeenCalled();
    expect(form.$setPristine).toHaveBeenCalled();
  });
  it('should transact and reset the form', function () {
    spyOn(TransferAmountController, 'resetForm');
    spyOn(LedgerService, 'transact');
    spyOn(TransactionsService, 'addTransaction');

    TransferAmountController.transact(form);
    expect(LedgerService.transact).toHaveBeenCalled();
    expect(TransactionsService.addTransaction).toHaveBeenCalled();
    expect(TransferAmountController.resetForm).toHaveBeenCalled();
  });
});