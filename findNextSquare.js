//Complete the findNextSquare function that finds the next integral perfect square after 
//the one passed as a parameter. Recall that an integral perfect square is an integer 
//n such that sqrt(n) is also an integer.

//If the parameter is itself not a perfect square, than -1 should be returned. 
//You may assume the parameter is positive.

var findNextSquare = function (sq) {

	//a bin to store all the squared numbers
	var zeroToThousandSquaredArray = []; 

	//a for loop that will push all all numbers from 1 to 129999 squared
	for (var a = 0; a < 130000; a++) {

		var square = function (num) {

			return num * num;
		};

		zeroToThousandSquaredArray.push(square(a));
	};

	//takes the number that is squared and tried to finds it in the squared array
	var indexOfN = zeroToThousandSquaredArray.indexOf(sq);

	//if indexOfN isn't found then return -1
	// else return next squared number in the array
	if (indexOfN === -1) {

		return -1;

		} else {

			return zeroToThousandSquaredArray[indexOfN + 1];

	};

};

findNextSquare(64);