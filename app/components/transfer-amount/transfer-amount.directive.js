angular.module('transferAmount').directive('remainingBalance', ['ledgerService',function (ledgerService) {
    return {
        require: 'ngModel',
        link: function (_scope, _elm, _attrs, ctrl) {
            ctrl.$validators.validBalance = function (modelValue) {
                return modelValue > 0 && ledgerService.isValidAmount(modelValue)
            }
        }
    }
}])