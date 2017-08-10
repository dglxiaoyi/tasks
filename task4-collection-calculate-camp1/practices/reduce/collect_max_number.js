'use strict';

function collect_max_number(collection) {
  var result = [];
		result = collection.reduce((max,arr)=>Math.max(max,arr));
		return result;
}

module.exports = collect_max_number;
