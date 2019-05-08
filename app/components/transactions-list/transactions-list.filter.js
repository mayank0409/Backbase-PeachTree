// Transactions List Filter on search

angular.module("transactionsList").filter("searchTransactions", function() {
  return function(transactions, keyWord) {
    if (!keyWord) {
      return transactions;
    } else {
      return transactions.filter(transaction => {
        const searchedWord = keyWord.toLowerCase(); //converted to lowercase inorder to match strings
        const { merchant, transactionType } = transaction;
        return (
          merchant.toLowerCase().includes(searchedWord) ||
          transactionType.toLowerCase().includes(searchedWord)
        );
      });
    }
  };
});
