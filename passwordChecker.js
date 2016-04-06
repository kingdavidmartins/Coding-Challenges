// I was setting up one of my password for an acc & as I was going through the password reset
// process. It was then I realzed that I could recreate the same application.
// the user has to create a  password that has atleast one of [upperscase, lowercase, number, special symbol]
// 	alert("Hey!....Sorry there's seems to be a problem with the network. It seems the network has been compromised. We have to do a system reset to ensure all of our users data aren't vulnerable");
	//alert("Don't forget to ensure your safty you'll have to diversify your passowrd by incorporating everything you can from uppercase & lowercase letters, numbers, and special symbols");
//	let userPassword = prompt("Please input your New Password.");

let passwordStrengthChecker = (userPassword) => {
	let chrUsed = (value) => {
		for (var chr of userPassword) {
			if (value === chr) { return value;
			};
		};
	};
	let lowercaseUsed = "abcdefghijklmnopqrstuvwxyz".split("").filter(chrUsed).length;
	let uppercaseUsed = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").filter(chrUsed).length;
	let numbersUsed = "0123456789".split("").filter(chrUsed).map((value) => parseFloat(value)).length;
	let specialCharacterUsed = "!@€£#$%^&*()_-+=}{[]|':;?/>.<,~".split("").filter(chrUsed).length;
	console.log([lowercaseUsed, uppercaseUsed, numbersUsed, specialCharacterUsed].indexOf(0) === -1 ? "Thank you. Your new password has been set up. Sorry for the inconvenience" : "Sorry. Please try again.");
};

passwordStrengthChecker("P@ssword123!@#"); // "Thank you. Your new password has been set up. Sorry for the inconvenience"
passwordStrengthChecker("PASSword123#@~"); //"Thank you. Your new password has been set up. Sorry for the inconvenience"
passwordStrengthChecker("p@ssword123"); //"Sorry. Please try again."
passwordStrengthChecker("Password123"); //"Sorry. Please try again."
