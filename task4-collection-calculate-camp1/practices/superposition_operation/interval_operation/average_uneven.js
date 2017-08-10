'use strict';

function average_uneven(collection) {

 var length = collection.length;
	 	var arr = [];
		collection.map(num=>{
			if(num%2===1)
				arr.push(num);
		});
		var result = Math.ceil((arr.reduce((sum,num)=>sum+num))/arr.length);
		return result;
}

module.exports = average_uneven;
