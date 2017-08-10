'use strict';
var calculate_median = function(collection){
    var arr = collection.filter(num=>num%2===0);
	var length = arr.length;
	var result = length % 2?
		arr[parseInt(length/2)]:
		(arr[length / 2 - 1] + arr[ length / 2])/2;
	return result;
};
module.exports = calculate_median;
