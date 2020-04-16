function repeatString(message, iterations) {
	let answer = "";
	
	if (parseInt(iterations) < 0) {
		return 'ERROR';
	}

	for (i = 0; i < iterations; i++)
		answer += message;
	return answer;
}

module.exports = repeatString
