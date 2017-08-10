function count_same_elements(collection) {
  var result = [];
  	collection.forEach(item=>{
  		if (result.some(ele=>ele.key===item)) {
  			++result.find(ele=>ele.key===item).count;
  			
  		} else {
  			result.push({key:item,count:1});
  		}
  	});
  	return result;
}

module.exports = count_same_elements;
