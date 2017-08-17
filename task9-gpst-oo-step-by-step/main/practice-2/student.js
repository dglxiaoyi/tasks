const Person = require('./person');

module.exports = class Student extends Person{
    constructor (name,age,clazz,id){
        super (name,age,id);
        this.clazz = clazz;
    }
    introduce(){
        return super.introduce()+this.clazz.introduce();
    }
}