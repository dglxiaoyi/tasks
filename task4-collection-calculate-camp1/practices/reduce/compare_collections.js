'use strict';

function compare_collections(collection_a, collection_b) {
  var result = true;
		for(var i in collection_a){
			if(collection_a[i]===collection_b[i])result=true;
			else{result=false;break;}
		}
		return result;
}

module.exports = compare_collections;


