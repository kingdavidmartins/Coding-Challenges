//write a function that takes the 1st argument as your budget 
//the 2nd argument is all the prices
//the function should search and return all the prices that is in your budget
//should be in chronc order
//Code Challenge taken from code wars

var budgetSearch = function (budget, prices) {

	//Creates a affordable price array to store information 
	var affordablePricesArray = [];

	//a loop that search through each element in the array
	
	for (var a = 0; a < prices.length; a++) {

		var seachPricesArray = prices.slice(a, (a + 1));

			//and compares if it less than or equal to your budget
			if (budget >= seachPricesArray) {

				//in which it will push & stores the prices that fit to affordable price array
				affordablePricesArray.push(seachPricesArray);
			};
	};


	var affordablePricesArrayString = affordablePricesArray.toString();

	console.log(affordablePricesArrayString);

};

budgetSearch(5, [4, 2, 7, 9, 756, 35, 3, 5, 5]);