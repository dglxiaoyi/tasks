'use strict';
var is_exist_element = function(collection,element){
    var arr = [];
	for(var i = 0;i < collection.length;i+=2){
		arr.push(collection[i]);
	}
	var result = arr.some(num=>num===element);
	return result;
};
module.exports = is_exist_element;
