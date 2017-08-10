function create_updated_collection(collection_a, object_b) {
 var arr = [];
  	collection_a.forEach(item=>{
  		if (arr.some(ele=>ele.key===item)) {
  			++arr.find(ele=>ele.key===item).count;
  		} else {
  			arr.push({key:item,count:1});
  		}
  	});
	
  	function jian(result,object_b) {
		result.forEach(item=>{
			if(object_b.value.includes(item.key))
				item.count-= Math.floor(item.count/3);
		});
	return result;
}

	var result = jian(arr,object_b);
	return result;
}

module.exports = create_updated_collection;
