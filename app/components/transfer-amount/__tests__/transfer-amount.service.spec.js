describe('ledgerService service', function() {
    var LedgerService;
  
    beforeEach(angular.mock.module('transferAmount'));

    beforeEach(inject(function(_ledgerService_) {
        LedgerService = _ledgerService_;
    }));
  
    it('should exist', function() {
      expect(LedgerService).toBeDefined();
    });
    it('should give remaining balance as total balance on first call', function() {
        expect(LedgerService.getBalance()).toEqual(1000);
    });
    it('should give false for negative amount', function() {
        expect(LedgerService.isValidAmount(-1)).toBeFalsy();
    });
    it('should give false for amount greater than totalBalance + extraBalance', function() {
        expect(LedgerService.isValidAmount(1100+500)).toBeFalsy();
    });
    it('should give true for amount less than totalBalance', function() {
        expect(LedgerService.isValidAmount(200)).toBeTruthy();
    });
    it('should give true for amount equal to totalBalance', function() {
        expect(LedgerService.isValidAmount(1000)).toBeTruthy();
    });
    it('should deduce the amount from the totalBalance', function() {
        LedgerService.transact(200);
        expect(LedgerService.getBalance()).toEqual(1000-200);
    });
    it('should deduce the amount from the totalBalance and return negative for amount greater than totalBalance', function() {
        LedgerService.transact(1200);
        expect(LedgerService.getBalance()).toEqual(1000-1200);
    });
    it('should give the inital total amount it has', function() {
        expect(LedgerService.getTotalBalance()).toEqual(1000);
    });
  });