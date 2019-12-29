const {memorize, calcFuctorial} = require('./memo');
const {printUsed, memorySizeOf} = require('./size');

let res = null;

console.clear();

try {
	const factorial = memorize((n) => calcFuctorial(n));
	res = factorial(10);
	res = factorial(20);
	res = factorial(30);
	res = factorial(10);
	res = factorial(30);
	res = factorial(50);
	console.log("\nDone:, result: ", res);
} catch (e) {
	console.log("\x1b[31m%s\x1b[0m", "ERROR:", e.message);
}

console.log("Memory res[obj] = ", memorySizeOf(res));

printUsed(process.memoryUsage());

