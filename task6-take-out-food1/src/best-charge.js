const items = require('./items.js');
const promotions = require('./promotions.js');
var loadAllItems = items.loadAllItems;
var loadPromotions = promotions.loadPromotions;

module.exports = function bestCharge(selectedItems) {
    let allItems = loadAllItems();
    let loadPromotion = loadPromotions();
    function statistics(items){
    	var result = [];
    	items.forEach(item=>{
    		var id = item.split(" x ")[0];
    		var num = parseInt(item.split(" x ")[1]);
    		var result1 = loadAllItem(id,num);
    		result.push(result1);
    	});
    	return result;
    }
    function loadAllItem(id,count){
    	var result = {};
    	var index = allItems.findIndex(ele => ele.id === id);
    	result = {
    		id: id,
    		name: allItems[index].name,
    		price: allItems[index].price,
    		count: count,
    		subtotal : allItems[index].price * count
    	}
    	return result;
    }
    function Promotion(arr){
    	var promotion = [];
    	var save = 0;
    	arr.forEach(item => {
    		if(loadPromotion[1].items.includes(item.id)){
    			promotion.push(item.name);
    			save +=	item.price/2;
    		}
    	});
    	promotion.push(save);
    	if (save<=6)
    		return [0];
    	return promotion;
    }
    function summary(arr){
    	var sum = 0;
    	arr.forEach(item => {
    		sum += item.subtotal;
    	});
    	return sum ;
    }
    var result = statistics(selectedItems);
    var promotion = Promotion(result);
    var save = promotion.pop();
    var sum = summary(result);
    // console.log(result);
    // console.log(promotion);
    // console.log(save);
    // console.log(sum);
    // console.log(a);
    var str = '============= 订餐明细 =============\n';
    result.forEach(item =>{
    	str += item.name + ' x ' + item.count + ' = ' + item.subtotal + '元\n';
    });
    if (save>0) {
    	str += '-----------------------------------\n使用优惠:\n' +
    	'指定菜品半价(' + promotion.join('，') + ')，省13元\n-----------------------------------\n' +
    	'总计：' + (sum - save) + '元\n===================================';
    } else if( sum >= 30) {
    	str += '-----------------------------------\n使用优惠:\n' +
    	 '满30减6元，省6元\n-----------------------------------\n' +
    	 '总计：' + (sum - 6) + '元\n===================================';
    }else{
    	str += '-----------------------------------\n' +
	   '总计：' + sum + '元\n===================================';
    }
//    console.log(str);
    return str;
}
