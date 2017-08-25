const readline = require('readline');
const classes = require('./classdate.js');
const students = require('./studentdate.js');

main();
function main() {
    let totalList = readline.createInterface(process.stdin, process.stdout);
    totalList.question('\n******主菜单******\n1. 添加学生\n2.生成成绩单\n3. 退出\n请输入你的选择（1～3）：', function(firstInput) {
        switch (firstInput){
            case '1':
                totalList.close();
                console.log('\n请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...）\n示例：张三,111,2,99,99,99,99');
                addStudent();
                break;
            case '2':
                totalList.close();
                console.log('\n请输入要打印的学生的学号（格式： 学号, 学号,...）\n示例：101,102,103');
                printStudentTranscripts();
                break;
            case '3':
                console.log(`------欢迎下次再来------`);
                totalList.close();
                break;
            default:
                console.log('------请重新输入您的选择（1~3）： ');
                totalList.close();
                main();
        }
    });
}

function addStudent(){
    let add = readline.createInterface(process.stdin,process.stdout);

    add.question('按回车提交：',(info)=>{
        let infoArr = info.split(',');
        if(judgment(infoArr)){
            loadInfo(infoArr);
            console.log(`学生${infoArr[0]}的成绩被添加`);
            add.close();
            main();
        }
        else{
            console.log('\n请按正确的格式输入（格式：姓名, 学号, 班级, 学科: 成绩, ...）');
            add.close();
            addStudent();
        }
    });
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


function printStudentTranscripts(){
    let rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    rl.question('按回车提交：',ids=>{
        let idArry = ids.split(',');
        idArry = deteleWrongIds(idArry);
        if(judgement(idArry)){
            getTranscript(idArry);
            rl.close();
            main();
        }else{
            console.log('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...）');
            rl.close();
            printStudentTranscripts();
        }
    });
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
    transcript.push('\n成绩单');
    transcript.push('姓名|数学|语文|英语|编程|平均分|总分 ');
    transcript.push('========================');
    idArry.forEach(item=>{
        transcript.push(getPersonTranscript(item));
    },this);
    transcript.push('全班总分平均数：'+classes[clazzes[0]].aver);
    transcript.push('全班总分中位数：'+classes[clazzes[0]].median);
    console.log(transcript.join('\n'));
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
