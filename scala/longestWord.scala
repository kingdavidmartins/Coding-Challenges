def longestWord(str: String) : String = {
  var longestWordStr = "";
  str
  	.split(" ")
    .toList
  	.foreach(word => if (word.length > longestWordStr.length) longestWordStr = word)
  return longestWordStr
}

println(
	longestWord("I wonder which is the longest word in the dictosgalksklsdjfakld asd asdf k") // -> "dictosgalksklsdjfakld"
)