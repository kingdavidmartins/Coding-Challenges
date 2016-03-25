// I was setting up one of my password for an acc & as I was going through the password reset
// process. It was then I realzed that I could recreate the same application.
// the user has to create a  password that has atleast one of [upperscase, lowercase, number, special symbol]

var passwordStrengthChecker = function () {
	alert("Hey!....Sorry there's seems to be a problem with the network. It seems the network has been compromised. We have to do a system reset to ensure all of our users data aren't vulnerable");
	alert("Don't forget to ensure your safty you'll have to diversify your passowrd by incorporating everything you can from uppercase & lowercase letters, numbers, and special symbols");
	var userPassword = prompt("Please input your New Password.");
	function chrUsed(value) {
		for (var chr in userPassword) {
			if (value === userPassword[chr]) { return value;
			};
		};
	};
	function stringNumToNumber(value) { return parseFloat(value);
	};
	var lowercaseUsed = "abcdefghijklmnopqrstuvwxyz".split("").filter(chrUsed).length;
	var uppercaseUsed = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").filter(chrUsed).length;
	var numbersUsed = "0123456789".split("").filter(chrUsed).map(stringNumToNumber).length;
	var specialCharacterUsed = "!@€£#$%^&*()_-+=}{[]|':;?/>.<,~".split("").filter(chrUsed).length;
	alert([lowercaseUsed, uppercaseUsed, numbersUsed, specialCharacterUsed].indexOf(0) === -1 ? "Thank you. Sorry for the inconvenience" : "Sorry. Please try again.");
};

passwordStrengthChecker();
