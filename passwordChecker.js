// I was setting up one of my password for an acc & as I was going through the password reset
// process. It was then I realzed that I could recreate the same application.
// the user has to create a  password that has atleast one of [upperscase, lowercase, number, special symbol]
// 	alert("Hey!....Sorry there's seems to be a problem with the network. It seems the network has been compromised. We have to do a system reset to ensure all of our users data aren't vulnerable");
	//alert("Don't forget to ensure your safty you'll have to diversify your passowrd by incorporating everything you can from uppercase & lowercase varters, numbers, and special symbols");
//	var userPassword = prompt("Please input your New Password.");

const passwordStrengthChecker = (userPassword) => {
	console.log(
		[
			"abcdefghijklmnopqrstuvwxyz".split("")
				.filter((value) => userPassword.indexOf(value) !== -1)
				.length
			,
			"abcdefghijklmnopqrstuvwxyz".toUpperCase()
				.split("")
				.filter((value) => userPassword.indexOf(value) !== -1)
				.length
			,
			"0123456789".split("")
				.filter((value) => userPassword.indexOf(value) !== -1)
				.map((value) => parseFloat(value))
				.length
			,
			"!@€£#$%^&*()_-+=}{[]|':;?/>.<,~".split("")
				.filter((value) => userPassword.indexOf(value) !== -1)
				.length
		]
		.indexOf(0) === -1 // statement
			? "Thank you. Your new password has been set up. Sorry for the inconvenience" // run if true
			: "Sorry. Please try again."); // run if false
};

passwordStrengthChecker("P@ssword123!@#"); // "Thank you. Your new password has been set up. Sorry for the inconvenience"
passwordStrengthChecker("PASSword123#@~"); //"Thank you. Your new password has been set up. Sorry for the inconvenience"
passwordStrengthChecker("p@ssword123"); //"Sorry. Please try again."
passwordStrengthChecker("Password123"); //"Sorry. Please try again."
