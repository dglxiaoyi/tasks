'use strict';

function hybrid_operation(collection) {

  var sum = collection.map(num=>num*3+2).reduce((sum,num)=>sum+num);
		return sum;
}

module.exports = hybrid_operation;

