const classes = require('./classdate.js');
const students = require('./studentdate.js');

module.exports = function printStudentTranscripts(ids){
    // console.log('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
    let idArry = ids.split(',');
    idArry = deteleWrongIds(idArry);
    if(judgement(idArry)){
        let transcript = getTranscript(idArry);
        return transcript;
    }else{
        return('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
    }
}

function judgement(arr){
    if(arr.length==0){
        console.log('\n---无该学生---\n');
        return false;
    }
    return !(arr.some(num=>num*0!==0));
}
function deteleWrongIds(idArry){
    let ids = [];
    idArry.forEach(id=>{
        if(students[id]&&ids.indexOf(id)===-1){
            ids.push(id);
        }
    })
    return ids;
}
function getclazzes(idArry){
    let clazzes = [];
    idArry.forEach(item=>{
        if(clazzes.indexOf(students[item].clazz)===-1){
            clazzes.push('class'+students[item].clazz);
        }
    });
    return clazzes;
}
function getTranscript(idArry){
    let transcript = [];
    let clazzes = getclazzes(idArry);
    transcript.push('成绩单');
    transcript.push('姓名|数学|语文|英语|编程|平均分|总分 ');
    transcript.push('========================');
    idArry.forEach(item=>{
        transcript.push(getPersonTranscript(item));
    },this);
    transcript.push('全班总分平均数：'+classes[clazzes[0]].aver);
    transcript.push('全班总分中位数：'+classes[clazzes[0]].median);
    console.log(transcript.join('\n'));
    return transcript.join('\n');
}

function getPersonTranscript(id){
    let personTranscript = [];
    let person = students[id];
    for(var key in person){
        personTranscript.push(person[key]);
    }
    personTranscript.shift();
    return personTranscript.join('|');
}
