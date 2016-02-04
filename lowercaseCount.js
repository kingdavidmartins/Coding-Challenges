//Your task is simply to count the total number 
//of lowercase letters in a string 

var lowercaseCount = function () {

	var userName = prompt("Welcome! My name is Prime - Newton. Whom do I have the pleasure of speaking to?");

	alert("Welcome " + userName + " I was created for on purpose and that purpose is identifying how many lowercase you have in a given set of strings.");

	//checking to see if countFunction works against all examples
	var t1 = "abc";
	var t2 = "abcABC123";
	var t3 = "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~";
	var t4 = "";
	var t5 = "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~";
	var t6 = "abcdefghijklmnopqrstuvwxyz";

	var c1 = 3;
	var c2 = 3;
	var c3 = 3;
	var c4 = 0;
	var c5 = 0;
	var c6 = 26;


	var checkerArray = [c1, c2, c3, c4, c5, c6];
	var testArray = [t1, t2, t3, t4, t5, t6];

	var totalTestTestArray = [];

	var countFunction = function (str) {

		var lowercaseAlphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

		var lowercaseCounterArray = [];

		for (var a = 0; a < str.length; a++) {

			var searchStrLetter = str.slice(a,(a + 1));

				for (var b = 0; b < lowercaseAlphabetArray.length; b++) {

					if (searchStrLetter === lowercaseAlphabetArray[b]) {

							lowercaseCounterArray.push(searchStrLetter);
					};
				};
		};
		
		totalTestTestArray.push(lowercaseCounterArray.length);

	};

	//looping through test array and running countFunctions on each value
	var totalTestArray = [countFunction(t1), countFunction(t2), countFunction(t3),countFunction(t4), countFunction(t5), countFunction(t6)];

	
	//then adding to total of letterscounted. Going to use it to compare to the
	//the total checkerArray. if equal then countFunction works against all use cases
	var totalTestArrayResult = totalTestTestArray.reduce(
		function (a,b) {
			return a + b;
		}
	);

	//adding all the expected results. 
	var totalCheckerArrayResult = checkerArray.reduce(
		function (a,b) {
			return a + b;
		}
	);



	console.log(totalTestArrayResult);
	console.log(totalCheckerArrayResult);
		//if the expected result equals the actual result then
		//countFunction must be true. Therefore can run it which ever way I want
		if (totalCheckerArrayResult === totalTestArrayResult) {
			
			var countFunction = function (str) {

				var str = prompt("What don't believe me? Try it out and input a string?");

				var lowercaseAlphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

				var lowercaseCounterArray = [];

					for (var a = 0; a < str.length; a++) {

						var searchStrLetter = str.slice(a,(a + 1));

							for (var b = 0; b < lowercaseAlphabetArray.length; b++) {

								if (searchStrLetter === lowercaseAlphabetArray[b]) {

									lowercaseCounterArray.push(searchStrLetter);
								};
							};
					};

				//prints the lowercase letters and the letters that was counted
				alert("these are the letters that are lowercase " + lowercaseCounterArray);
				alert("I counted about " + lowercaseCounterArray.length + " lowercase letters");

			
			};

		countFunction();

		};
		



};

lowercaseCount();