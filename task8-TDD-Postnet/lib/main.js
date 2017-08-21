

var NumberToBarcode = require("../lib/NumberToBarcode.js");
var NumToBar = NumberToBarcode();
//定义数组 存储每个数字对应的条码

function main(input){
    if(!input) return '';
    //如果输入为空 返回空
    var output = '';
    output = input.length < 20? NumtoBarcode(input):BarcodeToZip(input);
    //判断输入类型 长度小于20为  邮编转条码    反之   条码转邮编
    return output;
}

function NumtoBarcode(num){
    //邮编转条码
    if(num.length>1){
        //如果输入多位邮编（5,9,10）
        var arr = num.split('-').join('').split('');
        //将字符串转换为数组
        var barcode = '|';
        arr.forEach(function(item) {
            barcode += NumToBar[item*1];
            //通过数组，将每个数字转换为对应条码 并进行拼接
        });
        var sum = arr.reduce((sum,value)=>sum*1 + value*1);
        var CD = sum%10? 10-sum%10 : 0;
        //计算 校验码的值
        barcode += NumToBar[CD] + '|';
        return barcode;
    }
    if(num){
        //如果只输入一个字符，将这个数字转换成对应条码  
        return NumToBar[num*1];
    }
}

function BarcodeToZip(bar){
    //条码转邮编
    var zip =[];
    for(var i = 1,len = bar.length; i < len-1; i+=5){
        zip.push(NumToBar.indexOf(bar.substr(i,5)));
    }
    //忽略第一个，每五个一组，通过数组下标将之转换成数字
    if(isWrongBarcode(zip)!==0)return 'This is wrong';
    zip.pop();
    if(zip.length===9){
        zip.splice(5,0,'-');
    }
    //如果得出的邮编为九位，添加‘-’
    return zip.join('');
}
function isWrongBarcode(zip){
    return zip.reduce((sum,arr)=>sum+arr)%10;
}

module.exports = main;
