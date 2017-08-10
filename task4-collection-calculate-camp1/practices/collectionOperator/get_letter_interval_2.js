'use strict';

function get_letter_interval_2(number_a, number_b) {
 var result = [];
 var str = '';
		function change(num){
			var t = parseInt((num-1)/26) ;
			num=(num%26)?num%26:26;
		if(t){str+=change(t);}
		str+=String.fromCodePoint(num + 64).toLocaleLowerCase();
		return str;
		}
		if (number_a<number_b) {
			for (; number_a <= number_b; number_a++) {
				str = '';
				result.push(change(number_a));
			}
		} else if (number_a>number_b) {
			for (; number_a >= number_b; number_a--) {
				str = '';
				result.push(change(number_a));
			}
			return result;
		} else {
			str = '';
			result.push(change(number_a));
		}
		return result;
}

module.exports = get_letter_interval_2;

