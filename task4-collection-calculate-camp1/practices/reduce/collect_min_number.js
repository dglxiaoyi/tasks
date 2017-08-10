'use strict';

function collect_min_number(collection) {
  var result = [];
		result = collection.reduce((max,arr)=>Math.min(max,arr));
		return result;
}

module.exports = collect_min_number;

