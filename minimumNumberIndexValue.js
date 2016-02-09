//Given an array of integers, remove the smallest value. 
//Write a function that can return the smallest value of an array or 
//the index of that value. The function's 2nd parameter will tell 
//whether it should return the value or the index.


var minimumNumberIndexValue = function (arr, toReturn) {

	//get miinimum number from numebrs array
	var minimumNumber = Math.min.apply(null, arr);

	//get index of the minimum number in the array
	var indexOfMinimumNumber = arr.indexOf(minimumNumber);

	var valueOfMinimumArray = [];

	//for loop to go through each element of the array
	for (var a = 0; a < arr.length; a++) {

		var searchNumbersArray = arr[a];

		//if the position of minimum number in numbers array
		//equals the index and push the value to valueOfMinimumArray
		if (a === indexOfMinimumNumber) {

			valueOfMinimumArray.push(searchNumbersArray);

		};
	};

	//this compares toReturn to value and index to make sure
	//the correct result is printed 
	if (toReturn === "value") {

		console.log(valueOfMinimumArray[0]);
		} else if (toReturn === "index") {

			console.log(indexOfMinimumNumber);
	};


};

minimumNumberIndexValue([34534, 63, 46, 34, 563 ,3 , 6], "index");
