reverseString = function(string) {
	let stringArray = string.split("");
	let reverseArray = stringArray.reverse();
	let reverseString = reverseArray.join("");
	return reverseString;
}

module.exports = reverseString
