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
  		if (result.some(ele=>ele.name===string)) {
  			result.find(ele=>ele.name===string).summary+=num;
  		} else {
  			result.push({name:string,summary:num});
  		}
  	}
  	return result;
}

module.exports = count_same_elements;
