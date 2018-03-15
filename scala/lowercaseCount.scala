def lowercaseCount(str: String) = { 
  str
  	.split("")
    .toList
  	.filter(letter => letter == letter.toLowerCase && letter != " ")
    .length
}

println(
  lowercaseCount("THIS SHOULD print FIVE") // -> 5
)