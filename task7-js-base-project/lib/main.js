function main(num){
    var word = '';
    for(;num>0;num--){
        word += add(num);
    }
   word += 'No more bottles of beer on the wall, no more bottles of beer.\n'+
        'Go to the store and buy some more, 99 bottles of beer on the wall.';
    return word;
};
function add(num){
    if(num>2)
        return num+' bottles of beer on the wall, '+num+' bottles of beer.\n'+
            'Take one down and pass it around, '+(num-1)+' bottles of beer on the wall.\n';
    if(num===2)
    return num+' bottles of beer on the wall, '+num+' bottles of beer.\n'+
        'Take one down and pass it around, 1 bottle of beer on the wall.\n';
    return num+' bottle of beer on the wall, '+num+' bottle of beer.\n'+
        'Take one down and pass it around, no more bottles of beer on the wall.\n';
}

module.exports = main;
