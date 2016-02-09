//Write a function that takes a single string (word) as argument. 
//The function must return an ordered list containing the indexes 
//of all capital letters in the string.


var findAllCapitals = function (word) {

	var lowercaseAlphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var capitalsLettersArray = [];

	var indexOfAllCapitalsArray = [];

	//for loop that goes over each index of word
	for (var a = 0; a < word.length; a++) {

		var searchWord = word.slice(a, (a + 1));

		//a for loop that compares each letter of word to all the 
		//uppercase letters in the alphabet. Then pushes the match to
		//capital letter array 
		for (var b = 0; b < lowercaseAlphabetArray.length; b++) {

			if (searchWord === lowercaseAlphabetArray[b].toUpperCase()) {

				capitalsLettersArray.push(searchWord);
			};
		};
	};

	//for loop that gets the index of each capital letter in word 
	//by using indexOf() method with each element in the capital array
	for (var a = 0; a < capitalsLettersArray.length; a++) {

		var getIndexOfCapitals = word.indexOf(capitalsLettersArray[a]);

		indexOfAllCapitalsArray.push(getIndexOfCapitals); 
	};

	console.log(indexOfAllCapitalsArray);
	console.log(capitalsLettersArray);
};

findAllCapitals("King DaViD MarTINs");