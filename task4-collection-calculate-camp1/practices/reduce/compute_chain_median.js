'use strict';

function compute_chain_median(collection) {
  var num = collection.split('->').map(num => parseInt(num)).sort((a, b)=> a - b);
	 let length = num.length;
	 var result = length%2?
	 	num = num[Math.floor(length/2)]: 
	 	( num[length / 2 - 1] + num[length / 2] ) / 2;
	 return result;
}

module.exports = compute_chain_median;
