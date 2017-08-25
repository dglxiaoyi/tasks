const classes = require('./classdate.js');
const students = require('./studentdate.js');

module.exports = function addStudent(info){
    let infoArr = info.split(',');
    if(judgment(infoArr)){
        loadInfo(infoArr);
        return `学生${infoArr[0]}的成绩被添加`;
    }
    else{
        return '请按正确的格式输入（格式：姓名, 学号, 班级, 学科: 成绩, ...）：';
    }
}
function judgment(infoArr){
    return (infoArr.length >=7 && !(infoArr.slice(1,7).map(num=>num*1).some(num=>num*0!==0)))
}
function loadInfo(arr){
    let sum = arr.slice(3,7).reduce((sum,num)=>sum*1+num*1);
    let id = arr[1];
    let clazz = classes['class'+arr[2]];
    students[id]= {
        'clazz': arr[2],
        'name': arr[0],
        '数学': arr[3],
        '语文': arr[4],
        '英语': arr[5],
        '编程': arr[6],
        'aver': sum/4,
        'sum': sum
    };
    clazz[id] = {'sum': sum};
    let title = getTranscriptOfTitleClass(clazz);
    clazz.aver = title.length>1?(title.reduce((sum,num)=>sum*1+num*1)/title.length).toFixed(2):title[0];
    clazz.median = medianNumber(title);
}
function getTranscriptOfTitleClass(clazz){
    let title = [];
    for(var key in clazz){
        title.push(clazz[key].sum);
    }
    return title.slice(0,-2);
}

function medianNumber(array) {
    let arr = array.sort((a,b)=>a-b);
    let len = arr.length;
    return len%2?arr[Math.floor(len/2)]:(arr[ len/2 - 1] + arr[ len / 2])/2;
}

