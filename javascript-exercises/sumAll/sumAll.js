const sumAll = function(start, end) {
	let sum = 0;

	if (start < 0 || end < 0 ||
		 typeof start != 'number' ||
		 typeof end != 'number') {
		// Checks if we have negative or non0number parameters
		return 'ERROR';
	}

	if (start > end) {
		// Swaps the variables if the larger number comes first
		[start, end] = [end, start];
	}

	for (i = start; i <= end; i++) {
		sum += i;
	}
	return sum;
};

module.exports = sumAll
