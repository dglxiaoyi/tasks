'use strict';
var even_asc_odd_desc = function(collection){
    collection = collection.sort((a,b)=>a-b);
	var result1 = collection.filter(num=>num%2===0);
	collection = collection.reverse();
	var result2 = collection.filter(num=>num%2===1);
	return result1.concat(result2);
};
module.exports = even_asc_odd_desc;
