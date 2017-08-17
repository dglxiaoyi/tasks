var NumberToBarcode = require("../lib/NumberToBarcode.js");
var NumToBar = NumberToBarcode();
function main(input){
    if(!input) return '';
    input += '';
    var output = '';
    output = input.length < 20? NumtoBarcode(input):BarcodeToZip(input);
    return output;
}
function NumtoBarcode(num){
    if(num.length>1){
        var arr = num.split('-').join('').split('');
        var barcode = '|';
        arr.forEach(function(item) {
            barcode += NumToBar[item*1];
        });
        var CD = 10 - arr.reduce(function(sum,value){
                return sum*1 + value*1;
            })%10;
        barcode += NumToBar[CD] + '|';
        return barcode;
    }
    if(num){
        return NumToBar[num*1];
    }
}
function BarcodeToZip(bar){
    var zip ='';
    for(var i = 1,len = bar.length; i < len-7; i+=5){
        zip += NumToBar.indexOf(bar.substr(i,5));
    }
    if(zip.length===9){
        var zip1 = zip.slice(0,5);
        var zip2 = zip.slice(5);
        zip1 += '-';
        zip = zip1.concat(zip2);
    }
    return zip;
}

module.exports = main;
