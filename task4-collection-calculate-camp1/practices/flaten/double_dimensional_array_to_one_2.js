'use strict';

function double_to_one(collection) {
    collection = collection.join(",").split(",").map(x=>parseInt(x));
		var result = [];
		collection.forEach(num=>{
			if (!result.includes(num)) {
				result.push(num);
			} 
		});
	return result;
}

module.exports = double_to_one;
