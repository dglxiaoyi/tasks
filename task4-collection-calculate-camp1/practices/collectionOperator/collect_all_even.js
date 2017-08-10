 'use strict';

function collect_all_even(collection) {
   var result = [];
  collection.forEach( item=> {
  		if(!(item%2))
  			result.push(item);
  	});
  	return result;
}

module.exports = collect_all_even;
