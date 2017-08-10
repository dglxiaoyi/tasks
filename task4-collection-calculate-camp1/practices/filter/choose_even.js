'use strict';

function choose_even(collection) {
    var result = [];
  collection.forEach( item=> {
		if(!(item%2)){
        result.push(item);
		}
	});
	return result;
}

module.exports = choose_even;
