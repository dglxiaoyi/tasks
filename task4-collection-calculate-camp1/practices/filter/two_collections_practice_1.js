'use strict';

function choose_common_elements(collection_a, collection_b) {

  var result = [];
		collection_a.forEach(item => {
			if(collection_b.includes(item))result.push(item);
		})
		return result;
}

module.exports = choose_common_elements;
