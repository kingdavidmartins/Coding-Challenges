var Hangman = function (word) {
	this.word = word;

	//this counter keeps track of the amount of times the code is excuted
		var gameTries = 0;

		var rightLetterUsedArray = [];

		var gameOver = 0;

		//bin to store wrong letters & place hashtag to let user know the following
		//is wrong letters that were used
		var wrongLetterUsedArray = ["# "];

		//puts _ for every letter of word 
		for (var a = 0; a < this.word.length; a++) {
				
			rightLetterUsedArray.push("_");

		};


	this.guess = function (letter) {


		//this if statement limits the time of times you can run the game
		//after 6 times it returns you lose and the word 
		if (gameTries < 6) {

			if (gameOver === this.word.length) {

				return "The game has ended.";

				} else {

					//gets index of letter 
					var indexOfLetter = this.word.indexOf(letter);

			
					if (indexOfLetter === -1) {

						var indexOfLetterOfWrongLetterUsedArray = wrongLetterUsedArray.indexOf(letter);

						//makes sure it does push repeat letters into the wrongletterUsedArray
						if (indexOfLetterOfWrongLetterUsedArray === -1) {

							//stores wrong letters that were used in wrongLetterUsedArray
							wrongLetterUsedArray.push(letter);

							//adds to the +1 to the counter
							gameTries += 1;
						};

						var wrongLetterUsedArrayToString = wrongLetterUsedArray.toString();

						//this replaces all the , in the strings with nothing leaving it a regular string
						var wrongLetterUsedFinished = wrongLetterUsedArrayToString.replace(/,/g, "");

						var rightLetterUsedArrayToString = rightLetterUsedArray.toString();

						var rightLetterUsedFinished = rightLetterUsedArrayToString.replace(/,/g, " ");


						var outputGameState = rightLetterUsedFinished + " " + wrongLetterUsedFinished;

						return outputGameState;

				

					};


					if (indexOfLetter !== -1) {

						var indexOfLetterOfRightLetterUsedArray = rightLetterUsedArray.indexOf(letter);


						if (indexOfLetterOfRightLetterUsedArray === -1) {

//__________________________________________testing purposes
							var catchRepeatedLetters = function (letterYouWantToInsert, arrYouWantToReplace, origanlWord) {

								var repeatedLetter = [];

								for (var a = 0; a < origanlWord.length; a++) {

									var searchForLetter = origanlWord.slice(a,(a + 1));

									if (searchForLetter === letterYouWantToInsert) {

										repeatedLetter.push(a);
									};
								};

								for (var a = 0; a < repeatedLetter.length; a++) {

									var index = repeatedLetter[a];

									arrYouWantToReplace[index] = letterYouWantToInsert;
								};

								//
								arrYouWantToReplace = arrYouWantToReplace;

							};

							//makes sure it ignores if user uses the same letter 
							//rightLetterUsedArray[indexOfLetter] = letter;

							catchRepeatedLetters(letter, rightLetterUsedArray, this.word);


							gameOver += 1;

						};

						var rightLetterUsedArrayToString = rightLetterUsedArray.toString();

						var rightLetterUsedFinished = rightLetterUsedArrayToString.replace(/,/g, " ");

						var wrongLetterUsedArrayToString = wrongLetterUsedArray.toString();

						//this replaces all the , in the strings with nothing leaving it a regular string
						var wrongLetterUsedFinished = wrongLetterUsedArrayToString.replace(/,/g, "");

						var outputGameState = rightLetterUsedFinished + " " + wrongLetterUsedFinished;

						if (gameOver === this.word.length) { return "You found the word! " + "(" + this.word + ")"; } else if (wrongLetterUsedArray.length === 1) {

							return rightLetterUsedFinished;

							} else {

								return outputGameState;
						};
					};



			};

			} else {

				return "You got hung! The word was " + this.word + ".";
		};
	};
};

var king = new Hangman("ababab");

king.guess("a");
king.guess("c");
king.guess("b");

var david = new Hangman("warsasaasasas");
david.guess("w");
david.guess("u");
david.guess("s");
david.guess("a");
david.guess("r");
david.guess("g");
//king.guess("v");
//king.guess("e");
//king.guess("w");
//king.guess("z");
//king.guess("k");