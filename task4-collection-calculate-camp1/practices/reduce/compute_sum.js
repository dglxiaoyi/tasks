'use strict';

function calculate_elements_sum(collection) {
  var sum = collection.reduce((sum,arr)=>{
			return sum = sum + arr;
		});
		return sum;
}

module.exports = calculate_elements_sum;

