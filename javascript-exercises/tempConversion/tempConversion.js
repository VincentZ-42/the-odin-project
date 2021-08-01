const ftoc = function(F) {
	return Math.round((F - 32)	* (5/9) * 10) / 10;
}

const ctof = function(C) {
	return Math.round(((C * 9/5) + 32) * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
