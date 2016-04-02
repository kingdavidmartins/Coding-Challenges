//Write a function called checkCoupon to verify that a coupon is valid and not expired.
//If the coupon is good, console.log(true). Otherwise, console.log(false). A coupon expires
//at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

let checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  if (enteredCode !== correctCode) {
		console.log(false);
	} else {
		let currentDateArray = currentDate.split(" ").map((value, index) => (index === 1) ? value.slice(0, 1) : value).map((value, index) => (index > 0) ? parseFloat(value) : value);
		let expirationDateArray = expirationDate.split(" ").map((value, index) => (index === 1) ? value.slice(0, 1) : value).map((value, index) => (index > 0) ? parseFloat(value) : value);
		if (currentDateArray[2] <= expirationDateArray[2]) {
			let currentIndexOfMonth = "January February March April May June July August September October November December".split(" ").indexOf(currentDateArray[0]);
			let expirationIndexOfMonth = "January February March April May June July August September October November December".split(" ").indexOf(expirationDateArray[0]);
			console.log(currentIndexOfMonth < expirationIndexOfMonth ? true : currentIndexOfMonth === expirationIndexOfMonth ? (currentDateArray[1] <= expirationDateArray[1] ? true : false) : false);
		} else {
			console.log(false);
		};
	};
};

checkCoupon('123','123','January 3, 2014','October 1, 2019'); // true
checkCoupon('123','123','February 1, 2014','October 21, 1915'); // false
checkCoupon('123','123','May 1, 2','October 1, 2014'); // true
checkCoupon('123','123','March 1, 2025','January 1, 2025'); // false
checkCoupon('123','123','December 1, 2101','December 2, 2101'); // true
checkCoupon('efwqef23452fw','123','January 1, 0','February 1, 0'); // false
