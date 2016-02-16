//Hangman is a paper and pencil guessing game for two or more players.
//One player thinks of a word, phrase or sentence and the other tries to guess it 
//by suggesting letters, within a certain number of guesses.
//Everytime the player misses a word, a part of the sketch is drawn: 
//Which represents each part of the mans body

//You have to implement a class Hangman that receives a word in it's constructor and 
//has the method guess, that will be used by the player to try to guess the word.

//Your method guess will receive a letter as parameter and has this return behaviour:

//if the player found the word: You found the word! ({word})
//if the player got hung: You got hung! The word was {word}.
//if the game still on: {game state}
//if the game has ended already: The game has ended.
//important: if the player guesses a letter that was already guessed, you should ignore
//it and return the {game state}

//{game state}
//The {game state} is the word to be found with all letters separated by white space.
// The letters that weren't found yet will be replaced with _ and, if the player had 
//missed one or more letters, we will keep this record adding # to the output followed
//by a string with all missed letters in order of occurence.
//Ex. If the player is trying to guess the word codewars and attempts with the letters
//d,w,u,a,c,g,s, respectively, he would guess the letters d,w,a,c,s right and miss 
//the letters u,g. The game state at this point should look like:
//c _ d _ w a _ s # ug


//-----------------------------

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

				console.log("The game has ended.");

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

							console.log("Awwwww shucks try again you guess wrong try again. It' ok you got " + (6 - gameTries) + " left");
						};

						var wrongLetterUsedArrayToString = wrongLetterUsedArray.toString();

						//this replaces all the , in the strings with nothing leaving it a regular string
						var wrongLetterUsedFinished = wrongLetterUsedArrayToString.replace(/,/g, "");

						var rightLetterUsedArrayToString = rightLetterUsedArray.toString();

						var rightLetterUsedFinished = rightLetterUsedArrayToString.replace(/,/g, " ");


						var outputGameState = rightLetterUsedFinished + " " + wrongLetterUsedFinished;

						console.log(outputGameState);

				

					};


					if (indexOfLetter !== -1) {

						var indexOfLetterOfRightLetterUsedArray = rightLetterUsedArray.indexOf(letter);


						if (indexOfLetterOfRightLetterUsedArray === -1) {

							//makes sure it ignores if user uses the same letter 
							rightLetterUsedArray[indexOfLetter] = letter;

							gameOver += 1;

						};

						var rightLetterUsedArrayToString = rightLetterUsedArray.toString();

						var rightLetterUsedFinished = rightLetterUsedArrayToString.replace(/,/g, " ");

						var wrongLetterUsedArrayToString = wrongLetterUsedArray.toString();

						//this replaces all the , in the strings with nothing leaving it a regular string
						var wrongLetterUsedFinished = wrongLetterUsedArrayToString.replace(/,/g, "");

						var outputGameState = rightLetterUsedFinished + " " + wrongLetterUsedFinished;

						if (gameOver === this.word.length) {

							console.log("you found the word! " + this.word);

							} else if (wrongLetterUsedArray.length === 1) {

								console.log(rightLetterUsedFinished);

								} else {

									console.log(outputGameState);
						};
					};



			};

			} else {

				return "You got hung! The word was " + this.word + ".";
		};
	};
};



//test works 
var king = new Hangman("wars");
console.log(king.word);
king.guess("w");
king.guess("u");
king.guess("s");
king.guess("a");
king.guess("r");
king.guess("g");
//king.guess("v");
//king.guess("e");
//king.guess("w");
//king.guess("z");
//king.guess("k");



//Example:

//let hangman = new Hangman('wars');

//hangman.guess('w')
//w _ _ _
//hangman.guess('u')
//w _ _ _ # u
//hangman.guess('s')
//w _ _ s # u
//hangman.guess('a')
//w a _ s # a
//hangman.guess('r')
//# You found the word! (wars)
//hangman.guess('g')
//# The game has ended.
