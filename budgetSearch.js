//write a function that takes the 1st argument as your budget
//the 2nd argument is all the prices
//the function should search and return all the prices that is in your budget
//should be in chronc order
//Code Challenge taken from code wars

var budgetSearch = function (budget, prices) {
  function getBudgetPrices(value) { return budget >= value;
  };
  var budgetList = prices.filter(getBudgetPrices);
  console.log(budgetList);
};

budgetSearch(5, [4, 2, 7, 9, 756, 35, 3, 5, 5]);
