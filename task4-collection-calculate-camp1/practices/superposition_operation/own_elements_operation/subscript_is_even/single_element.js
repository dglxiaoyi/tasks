'use strict';
var single_element = function(collection){
    var arr = [];
	for(var i = 1;i < collection.length;i+=2){
		arr.push(collection[i]);
	}
	var array = [];
	var result = [];
	arr.forEach(item=>{
		if (array.includes(item)) {
			var index = result.indexOf(item);
			result.splice(index,1);
		} else {
			array.push(item);
			result.push(item);
		}
	});
	return result;
};
module.exports = single_element;
