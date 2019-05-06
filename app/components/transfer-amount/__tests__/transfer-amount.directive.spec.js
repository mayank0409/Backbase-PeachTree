describe('remainingBalance directive', function () {
  var $compile;
  var $rootScope;
  var LedgerService;
  beforeEach(angular.mock.module('transferAmount'));

  beforeEach(inject(function (_ledgerService_) {
    LedgerService = _ledgerService_;
  }));
  
  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should exist', function () {
    expect(LedgerService).toBeDefined();
  });
  it('should return the true as error', function() {
    var $scope = $rootScope;
    $scope.amount = 0;
    $compile("<form name='form'><input type='number' name='uAmount' ng-model='amount' remaining-balance></form>")($scope);
    $scope.$digest();
    expect($scope.form.uAmount.$error.validBalance).toBeTruthy();
  });
  it('should not have error for correct values', function() {
    var $scope = $rootScope;
    $scope.amount = 10;
    $compile("<form name='form'><input type='number' name='uAmount' ng-model='amount' remaining-balance></form>")($scope);
    $scope.$digest();
    expect($scope.form.uAmount.$error.validBalance).not.toEqual(jasmine.objectContaining({
      validBalance: true
    }))
  });
  it('should call the isValidAmount function', function() {
    var $scope = $rootScope;
    spyOn(LedgerService,'isValidAmount');
    $scope.amount = 10;
    $compile("<form name='form'><input type='number' name='uAmount' ng-model='amount' remaining-balance></form>")($scope);
    $scope.$digest();
    expect(LedgerService.isValidAmount).toHaveBeenCalled();
  });
 
});