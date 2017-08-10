'use strict';

function hybrid_operation_to_uneven(collection) {

  var result = [];
		collection.map(num=>{
			if(num%2===1){
				num = num*3+5;
				result.push(num);
			}
		});
		result = result.reduce((sum,num)=>sum+num);
		return result;
}

module.exports = hybrid_operation_to_uneven;

