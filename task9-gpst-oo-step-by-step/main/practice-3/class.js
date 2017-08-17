// Write your code here
module.exports = class Class {
    constructor (number) {
        this.number = number;
        this.students = [];
    }
    teacherOfClass(teacher){
        this.teacher = teacher;
    }
    appendMember(student){
        this.students.push(student.name);
        notifyStudentAppended(this.teacher,student.name,this.number);
    }
    assignLeader(student){
        this.leader = student.name;
        if(this.students.includes(student.name)){
            notifyLeader(this.teacher,student.name,this.number);
            return "Assign team leader successfully.";
        }
        return "It is not one of us.";
    }
    hasStudent(student){
        return this.students.includes(student.name)?true:false;
    }
    introduce(){
        if(this.leader === 'Tom'){
            return ' I am a Student. I am Leader of Class '+this.number+'.';
        }
        return ' I am a Student. I am at Class '+this.number+'.';
    }
}
function notifyLeader(teacher,name,num){
    if(teacher){
        teacher.notifyLeaderAssigned (name+" become Leader of Class "+num) ;
    }
}
function notifyStudentAppended(teacher,name,num){
    if(teacher){
        teacher.notifyStudentAppended (name+" has joined Class "+num) ;
    }
}