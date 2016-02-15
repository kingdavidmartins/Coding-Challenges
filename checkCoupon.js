//Write a function called checkCoupon to verify that a coupon is valid and not expired.
//If the coupon is good, console.log(true). Otherwise, console.log(false).
//A coupon expires at the END of the expiration date. 
//All dates will be passed in as strings in this format: "June 15, 2014"


var checkCoupon = function (enteredCode, correctCode, currentDate, expirationDate) {

	
//if enteredCode isn't equal to correctCode then console.log(false)
  if (enteredCode !== correctCode) {

		console.log(false);

		} else {

      		//Array of months. I placed months in order. So can use the index of the month
      		//to compare and figure out if the month is before, after, or current
			var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      		//convertDate function that takes Date and helps me split it by month, day, & year
      		//important so I  can help compare months, day, & year
			var convertDate = function (str, arr) {

				var newStr = " " + str + " ";

				newStrFindSpacesArray = [];

				for (var a = 0; a < newStr.length; a++) {

					var searchLettersNewStr = newStr.slice(a, (a + 1));

					if (searchLettersNewStr === " ") {

						newStrFindSpacesArray.push(a);
					};
				};

        		//a bin in where I can store the month, day, & year
				var monthDayYearSplitArray = []; 

        		//for loop that pushes the month, day, & year
				for (var a = 0; a < 3; a++) {

					var captureWords = str.slice(newStrFindSpacesArray[a], newStrFindSpacesArray[a + 1]);

					monthDayYearSplitArray.push(captureWords);
				};

        		//helps take out commas of date. & can now individually compare month, day, & year
				var convertDateMonth = monthDayYearSplitArray[0].slice(0, monthDayYearSplitArray[0].length - 1);
				var convertDateDay = monthDayYearSplitArray[1].slice(0, monthDayYearSplitArray[1].length - 2);
				var convertDateYear = monthDayYearSplitArray[2];

				//push the month, day, & year to arr
				arr.push(convertDateMonth);
				arr.push(convertDateDay);
				arr.push(convertDateYear);

			};

			//for testing purpose 
			//var testArray = [];
			//convertDate("September 5, 2014", testArray);
			//console.log(testArray);

			//month day, year
			var currentDateArray = [];
			var expirationDateArray = [];

			convertDate(currentDate, currentDateArray);
			convertDate(expirationDate, expirationDateArray);

			//compares years. If current date is less than or equal than then true
      		//so now have to compare month
			if (currentDateArray[2] <= expirationDateArray[2]) {

				var currentIndexOfMonth = monthArray.indexOf(currentDateArray[0]);
				var expirationIndexOfMonth = monthArray.indexOf(expirationDateArray[0]);

        		//compares to see if currentMonth is less than expirationMonth
        		//if true then console.log(true) because current didn't past the expirationMonth
				if (currentIndexOfMonth < expirationIndexOfMonth) {

					console.log(true);

          			//if currentMonth equals experationMonth then we now have to compare days
					} else if (currentIndexOfMonth === expirationIndexOfMonth) {

						//compare to see if currentDay is before or on the same day as
            			//expiredDay if true then console.log(true). else console.log(false) 
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

checkCoupon('123','123','January 3, 2014','October 1, 2014');
checkCoupon('123','123','February 1, 2014','October 21, 2015');
checkCoupon('123','123','May 1, 2','October 1, 2014');
checkCoupon('123','123','March 1, 0','March 1, 0');
checkCoupon('123','123','January 1, 0','January 2, 0');
checkCoupon('123','123','January 1, 0','February 1, 0');