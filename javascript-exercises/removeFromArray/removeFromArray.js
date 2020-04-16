const removeFromArray = function(array, ...theArgs) {
	let toRemove = Array.from(theArgs);
	let index = 0;
	
	for (i = 0; i < toRemove.length; i++) {
		index = array.indexOf(toRemove[i]);
		if (index < 0) continue;
		array.splice(index, 1);
	}
	return array;
};

module.exports = removeFromArray
