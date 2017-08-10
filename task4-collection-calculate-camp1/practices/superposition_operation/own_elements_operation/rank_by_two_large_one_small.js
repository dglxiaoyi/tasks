'use strict';
function rank_by_two_large_one_small(collection){
  var length = collection.length;
	var result = collection.sort((a,b)=>a-b);
	for(var i =0;i<length-length%3;i+=3){
		[result[i],result[i+1],result[i+2]]=[result[i+1],result[i+2],result[i]];
	}
	return result;
}
module.exports = rank_by_two_large_one_small;
