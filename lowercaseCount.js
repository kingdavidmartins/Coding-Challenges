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

		console.log(lowercaseCounterArray.length);
	};

	countFunction(t6);

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
			console.log(lowercaseCounterArray);
			console.log(lowercaseCounterArray.length);

			
		};

		countFunction();



};

lowercaseCount();