'use strict';

function grouping_count(collection) {

  let result = [];
	collection.forEach(item =>{
		if(result.some((value,index)=>index===item)){
			result[item]++;
		}else{
			result[item]=1;
		}
	});
	var obj={}; 
	for(var i in result) 
	{
		obj[i]=result[i]; 
	} 
	return obj;
}

module.exports = grouping_count;
