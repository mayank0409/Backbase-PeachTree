angular.module('transferAmount').factory('ledgerService', function () {
    const totalBalance = 500;
    let remainingBalance = totalBalance;
    return {
        transact: transact,
        getBalance: getBalance,
        getTotalBalance: getTotalBalance,
        isValidAmount: isValidAmount
    };
    function getTotalBalance() {
        return totalBalance;
    }
    function isValidAmount(userEnteredAmount) {
        return (userEnteredAmount > 0) && (userEnteredAmount <= totalBalance) && (remainingBalance >= userEnteredAmount)
    }
    function getBalance() {
        return remainingBalance;
    }
    function transact(amountToDeduct) {
        remainingBalance = remainingBalance - amountToDeduct;
    }
})