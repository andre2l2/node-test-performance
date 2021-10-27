/**
 *
 * @param number
 * Factorial example 5! = 5 * 4 * 3 * 2 * 1
 */
function factorialTest(initialNumber = 10) {
	let length = 10 ** initialNumber;
	let result = 1;

	console.time();
	while (length !== 1) {
		result = result * (length - 1);
		length = length - 1;
	}
	console.timeEnd();
}

module.exports = factorialTest;
