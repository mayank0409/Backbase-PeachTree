angular.
    module('transactionsList')
    .filter('searchTransactions', function () {
        return function (transactions, keyWord) {
            if (!keyWord) {
                return transactions;
            }
            else {
                return transactions.filter((transaction) => {
                    const searchedWord = keyWord.toLowerCase();
                    const { merchant, transactionType } = transaction;
                    return merchant.toLowerCase().includes(searchedWord) || transactionType.toLowerCase().includes(searchedWord);
                })
            }
        }
    })