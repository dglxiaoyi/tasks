'use strict';

function get_intersection(collection_a, collection_b) {
  var result = [];
  collection_b.forEach(item => {
			if(collection_a.includes(item)){
				result.push(item);
			}
		});
		return result;
}

module.exports = get_intersection;
