//Write a function called checkCoupon to verify that a coupon is valid and not expired.
//If the coupon is good, console.log(true). Otherwise, console.log(false). A coupon expires
//at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

var checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  if (enteredCode !== correctCode) {
		console.log(false);
	} else {
		var currentDateArray = currentDate.split(" ")
      .map((value, index) => (index === 1) ? value.slice(0, 1) : value)
      .map((value, index) => (index > 0) ? parseFloat(value) : value);
		var expirationDateArray = expirationDate.split(" ")
      .map((value, index) => (index === 1) ? value.slice(0, 1) : value)
      .map((value, index) => (index > 0) ? parseFloat(value) : value);
		var currentIndexOfMonth = "January February March April May June July August September October November December".split(" ").indexOf(currentDateArray[0]);
		var expirationIndexOfMonth = "January February March April May June July August September October November December".split(" ").indexOf(expirationDateArray[0]);
    (currentDateArray[2] <= expirationDateArray[2]) // statement 1
      ? console.log( // run if statement 1 is true
        (currentIndexOfMonth < expirationIndexOfMonth) // statement 2
          ? true //run if statement 2 is true
          : (currentIndexOfMonth === expirationIndexOfMonth) // if statement 2 false run statement 3
            ? (currentDateArray[1] <= expirationDateArray[1]) // if statement 3 is true run statement 4
                ? true  // run if statement 4 is true
                : false // run if statement 4 is false
            : false) // run if statement is false
		  : console.log(false) // run if statement 1 is false
	};
};

checkCoupon('123','123','January 3, 2014','October 1, 2019'); // true
checkCoupon('123','123','February 1, 2014','October 21, 1915'); // false
checkCoupon('123','123','May 1, 2','October 1, 2014'); // true
checkCoupon('123','123','March 1, 2025','January 1, 2025'); // false
checkCoupon('123','123','December 1, 2101','December 2, 2101'); // true
checkCoupon('efwqef23452fw','123','January 1, 0','February 1, 0'); // false
