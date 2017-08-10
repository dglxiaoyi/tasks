function create_updated_collection(collection_a, object_b) {
  var arr = [];
  	collection_a.forEach(item=>{
  		if(item.length>1){
  			var num = parseInt(item.replace(/[^0-9]/ig,""));
			var string = item.replace(/[^a-z]/ig,"");
  			tongji(string,num);
  		}else{
  			tongji(item,1);
  		}
  	});
  	function tongji(string,num){
  		if (arr.some(ele=>ele.key===string)) {
  			arr.find(ele=>ele.key===string).count+=num;
  		} else {
  			arr.push({key:string,count:num});
  		}
  	}
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
