//Write a function called checkCoupon to verify that a coupon is valid and not expired.
//If the coupon is good, console.log(true). Otherwise, console.log(false).
//A coupon expires at the END of the expiration date.
//All dates will be passed in as strings in this format: "June 15, 2014"

var checkCoupon = function (enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode !== correctCode) {
		console.log(false);
	} else {
		var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		function convertDate(value, index) {
			if (index === 1) {
				return value.slice(0, 1);
			} else {
				return value;
			};
		};
		function convertDayMonthToFloatNumber(value, index) {
			if (index > 0) {
				return parseFloat(value);
			} else {
				return value;
			};
		};
		var currentDateArray = currentDate.split(" ").map(convertDate).map(convertDayMonthToFloatNumber);
		var expirationDateArray = expirationDate.split(" ").map(convertDate).map(convertDayMonthToFloatNumber);
		if (currentDateArray[2] <= expirationDateArray[2]) {
			var currentIndexOfMonth = monthArray.indexOf(currentDateArray[0]);
			var expirationIndexOfMonth = monthArray.indexOf(expirationDateArray[0]);
			if (currentIndexOfMonth < expirationIndexOfMonth) {
				console.log(true);
			} else if (currentIndexOfMonth === expirationIndexOfMonth) {
				if (currentDateArray[1] <= expirationDateArray[1]) {
					console.log(true);
				} else {
					console.log(false);
				};
			} else {
				console.log(false);
			};
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
