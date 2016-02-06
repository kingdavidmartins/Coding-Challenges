//I was setting up one of my password for an acc
//& as I was going through the password reset process
//I knew I reproduce it all at a basic leve with what I currently know

alert("Hey!....Sorry there's seems to be a problem with the network. It seems the network has been compromised. We have to do a system reset to ensure all of our users data isn't compromised");

var userName = prompt("Please input the your New User Name,");

alert("Don't forget to ensure your safty you'll have to diversify your passowrd by incorporating everything you can from numbers, special symbols, lowercases and uppercase letters. You need to use a minimum of 3 out of the 4");




var passwordStrengthChecker = function () {

	var userPassword = prompt("Please input your New Password.");

	//what I would be comparing each character to so I can ensure 
	//the passsword contain atleast one of each min
	var lowercaseAlphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var lowercasesCounterArray = [];


	var uppercaseCounterArray = [];

	var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
	var numbersCounterArray = [];

	var specialCharacterArray = ["!", "@", "€", "£", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "}", "{", "[", "]", "|", "'", ":", ";", "?", "/", ">", ".", "<", ",", "~"];
	var specialCharacterCounterArray = [];

	//Creating a loop based the password taken from user
	for (var a = 0; a < userPassword.length; a++) {

		var searchUserPassword = userPassword.slice(a, (a + 1));

			//comparing all the lowercase character to each character in the password 
			//given by the user and after finding 1 
			//I store it and end the for loop with a break loop
			for (var b = 0; b < lowercaseAlphabetArray.length; b++) {

				if (searchUserPassword === lowercaseAlphabetArray[b]) {

					if (lowercasesCounterArray.length < 1) {

						lowercasesCounterArray.push(1);
						} else {

							break;
					};
				};
			};

			//comparing all the uppercase characters to each character in the password 
			//given by the user and after finding 1 
			//I store it and end the for loop with a break loop
			for (var b = 0; b < lowercaseAlphabetArray.length; b++) {

				//to make things easier for me I used all the lowercase letters
				//& looped through them to have uppercase letters
				if (searchUserPassword === lowercaseAlphabetArray[b].toUpperCase()) {

					if (uppercaseCounterArray.length < 1) {

						uppercaseCounterArray.push(1);
						} else {

							break;
					};
				};
			};

			//comparing all the numbers to each number in the password 
			//given by the user and after finding 1 
			//I store it and end the for loop with a break loop
			for (var b = 0; b < numbersArray.length; b++) {

				if (searchUserPassword === numbersArray[b]) {

					if (numbersArray.length < 1) {

						numbersCounterArray.push(1);
						} else {

							break;
					};
				};
			};

			//comparing all the special characters to each character in the password 
			//given by the user and after finding 1 
			//I store it and end the for loop with a break loop
			for (var b = 0; b < specialCharacterArray.length; b++) {

				if (searchUserPassword === specialCharacterArray[b]) {

					if (specialCharacterCounterArray.length < 1) {

						specialCharacterCounterArray.push(1);
						} else {

							break;
					};
				};
			}

	};

	var totalCounterArray = [lowercasesCounterArray, uppercaseCounterArray, numbersCounterArray, specialCharacterCounterArray];

	console.log(totalCounterArray);

	console.log(lowercasesCounterArray);
	console.log(uppercaseCounterArray);
	console.log(numbersCounterArray);
	console.log(specialCharacterCounterArray);



}; 

passwordStrengthChecker();