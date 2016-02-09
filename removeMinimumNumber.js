//Given an array of integers, remove the smallest value. 
//If there are multiple elements with the same value, remove the one with a lower index. 
//If you get an empty array/list, return an empty array/list.
//Don't change the order of the elements that are left.


var removeMinimumNumber = function (numbers) {

	//get miinimum number from numebrs array
	var minimumNumber = Math.min.apply(null, numbers);

	//get index of the minimum number in the array
	var indexOfMinimumNumber = numbers.indexOf(minimumNumber);

	var finishedArray = [];

	var garbageArray = [];

	//for loop to go through each element of the array
	for (var a = 0; a < numbers.length; a++) {

		var searchNumbersArray = numbers[a];

		//if the position of minimum number in numbers array
		//equals the index the throw it away in the garbage
		if (a === indexOfMinimumNumber) {

			garbageArray.push(searchNumbersArray);

			} else {

				finishedArray.push(searchNumbersArray);
		};
	};

	console.log(finishedArray);

};

removeMinimumNumber([34534, 63, 46, 34, 563 ,3 , 6]);
