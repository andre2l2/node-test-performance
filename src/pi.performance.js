const pi = Math.PI;
const piConstant = 4;

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
