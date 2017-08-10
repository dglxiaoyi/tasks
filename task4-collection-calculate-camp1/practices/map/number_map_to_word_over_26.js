'use strict';
var number_map_to_word_over_26 = function(collection){
 var result = collection.map( function change(num) {
	   var str = '';
	  	var t = parseInt((num-1)/26) ;
		num=(num%26)?num%26:26;
		if(t){str+=change(t);}
		str+=String.fromCodePoint(num + 64).toLocaleLowerCase();
		return str;
	});
return result;
};

module.exports = number_map_to_word_over_26;
