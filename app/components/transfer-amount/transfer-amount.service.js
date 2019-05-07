angular.module('transferAmount').factory('ledgerService', function () {
    const totalBalance = 1000;
    const extraBalance = 500;
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
        return (userEnteredAmount > 0) && (userEnteredAmount <= totalBalance + extraBalance) && (remainingBalance + extraBalance >= userEnteredAmount)
    }
    function getBalance() {
        return remainingBalance;
    }
    function transact(amountToDeduct) {
        remainingBalance = remainingBalance - amountToDeduct;
    }
})