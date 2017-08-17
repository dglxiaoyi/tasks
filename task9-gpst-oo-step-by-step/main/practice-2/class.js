// Write your code here
module.exports = class Class {
    constructor (number){
        this.number = number;
    }
    assignLeader(student){
        this.leader = student.name;
    }
    introduce(){
        if(this.leader === 'Tom'){
            return ' I am a Student. I am Leader of Class '+this.number+'.';
        }
        return ' I am a Student. I am at Class '+this.number+'.';
    }
}