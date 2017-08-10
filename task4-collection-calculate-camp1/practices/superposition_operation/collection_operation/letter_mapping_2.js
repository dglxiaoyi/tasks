'use strict';

function average_to_letter(collection) {

  var length = collection.length;
		var aver = Math.ceil(collection.reduce((sum,num)=>sum+num)/length);
		var result = String.fromCodePoint(aver + 64).toLocaleLowerCase();
		return result;
}

module.exports = average_to_letter;

