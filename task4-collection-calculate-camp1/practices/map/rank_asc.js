'use strict';
var rank_asc = function(collection){
  var result = collection.sort(function(a, b) {
	  return b - a;
	});
return result;
};

module.exports = rank_asc;
