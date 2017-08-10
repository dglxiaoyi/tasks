'use strict';

function even_to_letter(collection) {

  var result = [];
		collection.forEach(num=>{
			if(num%2===0){
				num=(num%26)?num%26:26;
				result.push(String.fromCodePoint(num + 64).toLocaleLowerCase());
			}
		});
	return result;
}

module.exports = even_to_letter;
