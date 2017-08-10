'use strict';

function choose_multiples_of_three(collection) {

 var result = [];
  collection.forEach( item=> {
		if(!(item%3)){
        result.push(item);
		}
	});
	return result;

}

module.exports = choose_multiples_of_three;
