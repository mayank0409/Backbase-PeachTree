angular.module('transferAmount').controller('transferAmountCtrl', ['ledgerService','transactionsService', function (ledgerService,transactionsService) {
    this.remaining = ledgerService.getBalance();
    this.amount = 0;
    this.merchant = '';
    this.resetForm = function (form) {
        if (form) {
            this.amount = 0;
            this.merchant = '';
            form.$setPristine();
            form.$setUntouched();
        }
    }
    this.transact = function (form) {
        ledgerService.transact(this.amount);
        const transactionTimestamp = + new Date()
        transactionsService.addTransaction(this.merchant,this.amount,transactionTimestamp);
        this.remaining = ledgerService.getBalance();
        this.resetForm(form);
    }
}])