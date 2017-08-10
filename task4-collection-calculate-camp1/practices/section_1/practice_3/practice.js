function collect_same_elements(collection_a, object_b) {
 var result = [];
		collection_a.forEach(item=>{
			if(object_b.value.includes(item))
				result.push(item);
		});
	return result;
}

module.exports = collect_same_elements;
