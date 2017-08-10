function count_same_elements(collection) {
  var result = [];
  	collection.forEach(item=>{
  		if(item.length>1){
  			var num = parseInt(item.replace(/[^0-9]/ig,""));
			var string = item.replace(/[^a-z]/ig,"");
  			tongji1(string,num);
  		}else{
  			tongji1(item,1);
  		}
  	});
  	function tongji1(string,num){
  		if (result.some(ele=>ele.key===string)) {
  			result.find(ele=>ele.key===string).count+=num;
  		} else {
  			result.push({key:string,count:num});
  		}
  	}
  	return result;
}

module.exports = count_same_elements;
