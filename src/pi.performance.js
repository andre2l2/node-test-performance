const pi = Math.PI;
const piConstant = 4;

/**
 *
 * @param { decimalPlace } number
 * Is the length of the pi, for example 3.1415 have four decimalPlace.
 */
function piTest(decimalPlace = 8) {
	let contollerCounter = 0;
	let result = 0;
	let divider = 1;

	console.time();

	while (result.toFixed(decimalPlace) !== pi.toFixed(decimalPlace)) {
		if (contollerCounter % 2 === 0) {
			result += piConstant / divider;
		} else {
			result -= piConstant / divider;
		}

		divider += 2;
		contollerCounter++;
	}

	console.timeEnd();
	console.log(result.toFixed(decimalPlace));
}

module.exports = piTest;
