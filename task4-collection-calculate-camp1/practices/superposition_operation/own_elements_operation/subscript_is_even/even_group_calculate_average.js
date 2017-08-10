'use strict';
var even_group_calculate_average = function(collection){
    var arr = [];
	var result = [];
	for(var i = 1;i < collection.length;i+=2){
		arr.push(collection[i]);
	}
	arr = arr.sort((a,b)=>a-b).filter(num=>num%2===0);
	if(arr.length>0){
		var arr1 = arr.filter(num=>num<10);
		var arr2 = arr.filter(num=>num<100&&num>9);
		var arr3 = arr.filter(num=>num<1000&&num>99);
		if (arr1.length>0) {
			var aver1 = Math.floor(arr1.reduce((sum,arr)=>sum+arr)/arr1.length);
			result.push(aver1);
		}
		if (arr2.length>0) {
			var aver2 = Math.floor(arr2.reduce((sum,arr)=>sum+arr)/arr2.length);
			result.push(aver2);
		}
		if (arr3.length>0) {
			var aver3 = Math.floor(arr3.reduce((sum,arr)=>sum+arr)/arr3.length);
			result.push(aver3);
		}
		
	}else{
		result.push(0);
	}
	return result;
};
module.exports = even_group_calculate_average;
