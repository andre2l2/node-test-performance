function isValidateForce(force) {
	if (typeof force === 'number' && force <= 8 && force > 0) return false;
	return true;
}

function fibonacciTest(force = 8) {
	if (isValidateForce(force))
		throw console.error('Please add a number from 1 to 8');

	const fibonacciArray = [1, 1];
	const calculateForce = 10 ** force;

	console.time();
	for (let c = 2; c < calculateForce; c++) {
		fibonacciArray[c] = fibonacciArray[c - 1] + fibonacciArray[c - 2];
	}
	console.timeEnd();
}

module.exports = fibonacciTest;
