const formatBytes = (bytes) => {
	if(bytes < 1024) return bytes + " bytes";
	else if(bytes < 1048576) return(bytes / 1024).toFixed(3) + " KiB";
	else if(bytes < 1073741824) return(bytes / 1048576).toFixed(3) + " MiB";
	else return(bytes / 1073741824).toFixed(3) + " GiB";
};

const memorySizeOf = (obj) => {
	let bytes = 0;

	const sizeOf = (obj) => {
		if(obj !== null && obj !== undefined) {
			switch(typeof obj) {
				case 'number':
					bytes += 8;
					break;
				case 'string':
					bytes += obj.length * 2;
					break;
				case 'boolean':
					bytes += 4;
					break;
				case 'object':
					var objClass = Object.prototype.toString.call(obj).slice(8, -1);
					if(objClass === 'Object' || objClass === 'Array') {
						for(var key in obj) {
							if(!obj.hasOwnProperty(key)) continue;
							sizeOf(obj[key]);
						}
					} else bytes += obj.toString().length * 2;
					break;
			}
		}
		return bytes;
	};

	return formatBytes(sizeOf(obj));
};

const printUsed = (used) => {
	for (let key in used) {
		console.log(` - ${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
	}
};

module.exports = {
	memorySizeOf,
	formatBytes,
	printUsed,
};
