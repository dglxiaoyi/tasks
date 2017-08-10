'use strict';

function compute_median(collection) {
  var num = collection.sort((a, b)=> a - b);
  	var length = collection.length;
  	var result = length % 2 ?
	 	num = num[Math.floor(length / 2)]: 
	 	 (num[length / 2] + num[length / 2 - 1]) / 2 ;
	 return result;
}

module.exports = compute_median;


