'use strict';

function spilt_to_zero(number, interval) {
  var result = [];
		var start = number*10;
		var split = interval*10;
		for(;start>0;){
			result.push(start/10);
			start -= split;
		}
		result.push(start/10);
		return result;
}

module.exports = spilt_to_zero;
