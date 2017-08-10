'use strict';

function median_to_letter(collection) {

  var length = collection.length;
	 	var median = length%2?
	 		collection = collection[Math.floor(length/2)]: 
	 		(collection[length/2-1] + collection[length/2])/2;
		var median = Math.ceil(median);
		var result = change(median);
		function change(num) {
		   	var str = '';
		  	var t = parseInt((num-1)/26) ;
			num=(num%26)?num%26:26;
			if(t){str+=change(t);}
			str+=String.fromCodePoint(num + 64).toLocaleLowerCase();
			return str;
		};
		return result;
}

module.exports = median_to_letter;
