'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result = [];
  var num1 = number_a;
  var num2 = number_b;
		if( num1<num2 ){
			num1=(num1%2===1)?num1+1:num1;
			for (; num1 <= num2;) {
				result.push(num1);
				num1+=2;
			}
		}else if(num1>num2){
			num1=(num1%2===1)?num1-1:num1;
			for (; num1 >= num2;) {
				result.push(num1);
				num1-=2;
			}
		}else{
		    if(num1%2===0)
				result.push(num1);
			}
		return result;
}

module.exports = get_integer_interval_2;
