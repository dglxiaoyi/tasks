'use strict';

function get_integer_interval(number_a, number_b) {
  var result = [];
	if( number_a<number_b ){
		for (; number_a <= number_b;) {
			result.push(number_a);
			number_a++;
		}
	}else if(number_a>number_b){
		for (; number_a >= number_b;) {
			result.push(number_a);
			number_a--;
		}
	}else{
			result.push(number_a);
		}
	return result;
}

module.exports = get_integer_interval;

