//Write a function insertDash(num) that will insert dashes ('-')
//between each two odd numbers in num. For example: if num is 454793
//the output should be 4547-9-3. Don't count zero as an odd number.
//Code challenge from code wars

var insertDash = function (number) {
	var numberToString = number.toString();
  var numberDashArray = [];
  for (var chr in numberToString) {
    if ((string[chr] % 2) !== 0 && (string[parseFloat(chr) + 1] % 2) !== 0) {
      numberDashArray.push(string[chr]);
      numberDashArray.push("-");
    } else {
      numberDashArray.push(string[chr]);
    };
  };
    var removeLastElement = numberDashArray.pop();
  	var numberDashFinished = numberDashArray.toString().replace(/,/g, "");
    console.log(numberDashFinished);
};

insertDash(454793);
