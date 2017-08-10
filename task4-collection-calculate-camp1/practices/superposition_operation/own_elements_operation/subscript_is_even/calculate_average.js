'use strict';
var calculate_average = function(collection){
    var collection = collection.filter(num=>num%2===0);
	 var result = collection.reduce((sum,arr)=>sum+arr)/collection.length;
	 return result;
};
module.exports = calculate_average;
