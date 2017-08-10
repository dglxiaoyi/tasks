'use strict';

function find_last_even(collection) {
 var result = collection.reduce(function(index,item){
  		if(item%2===0)
  			return collection.indexOf(item);
  		else
  			return index;
  	});
  	return result;
}

module.exports = find_last_even;
