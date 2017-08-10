'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  var result = [];
		collection_a.forEach(item => {
			if(collection_b.some(value=>!(item%value)))result.push(item);
		})
		return result;
}

module.exports = choose_divisible_integer;
