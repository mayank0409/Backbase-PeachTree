//Service to transfer amount

angular.module('transferAmount').factory('ledgerService', function () {
    const totalBalance = 1000; //This is the maximum balance in the account
    const extraBalance = 500; //Since we can have a balance of extra 500 to transfer
    let remainingBalance = totalBalance;
    return {
        transact: transact,
        getBalance: getBalance,
        getTotalBalance: getTotalBalance,
        isValidAmount: isValidAmount
    };

    //get total balance 
    function getTotalBalance() {
        return totalBalance;
    }
    // Return true or false if the amount is valid or not
    function isValidAmount(userEnteredAmount) {
        return (userEnteredAmount > 0) && (userEnteredAmount <= totalBalance + extraBalance) && (remainingBalance + extraBalance >= userEnteredAmount)
    }

    // get available balance
    function getBalance() {
        return remainingBalance;
    }

    //get balance after transaction is done
    function transact(amountToDeduct) {
        remainingBalance = remainingBalance - amountToDeduct;
    }
})