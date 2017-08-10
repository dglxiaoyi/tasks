'use strict';

function compute_average(collection) {
  var sum = collection.reduce((sum,arr)=>{
			return sum = sum + arr;
		});
		var result = sum/collection.length;
		return result;
}

module.exports = compute_average;

