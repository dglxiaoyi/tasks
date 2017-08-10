'use strict';

function choose_no_repeat_number(collection) {

 let result = [];
	collection.forEach( item => {
		if (!result.includes(item)) {
			result.push(item);
		}
	});
	return result;
  
}

module.exports = choose_no_repeat_number;
