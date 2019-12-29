const memorize = (fn) => {

	if (typeof fn !== "function") {
		throw new Error("memorize(): expecting 1st argument to be a function type");
	}

	const cache = {};

	return (...args) => {
		const key = JSON.stringify(args);
		if (key in cache) {
			console.log('From cache', key, "res=", cache[key]);
		}
		else {
			let result = fn.apply(this, args);
			console.log('Calculating', key, "res=", result);
			cache[key] = result;
		}
		return cache
	}
};

function calcFuctorial(num) {
	if(!num) return 1;
	return num * calcFuctorial(num - 1);
}

module.exports = {
	memorize,
	calcFuctorial,
};

