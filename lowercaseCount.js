//Your task is simply to count the total number
//of lowercase letters in a string

var lowercaseCount = function (str) {
	function getLowercase(value) {
		for (var letters in  str) {
			if (value === str[letters]) { return value;
			};
		};
	};
	return "abcdefghijklmnopqrstuvwxyz".toLowerCase().split("").filter(getLowercase).length;
};

lowercaseCount("THINADFasdcxTHIS SHOULDm RETURN 6");
