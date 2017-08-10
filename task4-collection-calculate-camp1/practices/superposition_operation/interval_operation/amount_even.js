'use strict';

function amount_even(collection) {

  var arr = [];
		collection.map(num=>{
			if(num%2===0)
				arr.push(num);
		});
		var result = arr.reduce((sum,num)=>sum+num);
		return result;
}

module.exports = amount_even;
