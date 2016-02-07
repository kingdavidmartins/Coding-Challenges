//Write a function insertDash(num) that will insert dashes ('-') 
//between each two odd numbers in num. For example: if num is 454793 
//the output should be 4547-9-3. Don't count zero as an odd number.
//Code challenge from code wars


var insertDash = function (str) {

	//Turns the the argument that is passed to a string
	var newStr = str.toString();

	//Array to store the result of fash array
	var numberDashArray = [];

	//For loop that loops through a screen 
	for (var a = 0; a < newStr.length; a++) {

		var searchLettersString = newStr.slice(a, (a + 1));
		var searchNextLettersString = newStr.slice((a + 1), (a + 2));

		//Mudo % 2 checks if it is even. Therefore when I am passing
		//my statements it will be against so it can be odd
		var oddNumber = searchLettersString % 2;
		var oddNumberNextNumber = searchNextLettersString % 2;

		//compares if the current number and the following number at the same time
		//to see if they are odd. if they are odd it inserts a Dash between the numbers
		if (oddNumber !== 0 && oddNumberNextNumber !== 0) {

			numberDashArray.push(searchLettersString);
			numberDashArray.push("-");
			} else {

				numberDashArray.push(searchLettersString);

		};
	};

	//turns the array to string 
	var numberDashArrayString = numberDashArray.toString();

	//replaces commas with empty space.
	var finishedNumberDashArrayString = numberDashArrayString.replace(/,/g, "");

	console.log(finishedNumberDashArrayString);
};

insertDash(454793);