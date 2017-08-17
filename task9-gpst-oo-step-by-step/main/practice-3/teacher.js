const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor (name,age,clazzes,id){
        super (name,age,id);
        this.clazzes = clazzes;
        this.clazzes.forEach( ele =>{
            ele.teacherOfClass(this);
        });
    }
    isTeaching(student){
        for (var item of this.clazzes){
            if(item.hasStudent(student)){
                return true;
            }
        }
        return false;
    }
    notifyStudentAppended(value){
        console.log(value);
    }
    notifyLeaderAssigned(value){
        console.log(value);
    }
    introduce(){
        return super.introduce()+ teachClasses(this.clazzes);
    }
}
function teachClasses(arr){
    if(arr.length < 1){
        return ' I am a Teacher. I teach No Class.'
    }
    var result = '';
    arr.forEach( ele =>{
        result += ele.number;
    });
    return ' I am a Teacher. I teach Class '+result.split('').join(',')+'.';
}
