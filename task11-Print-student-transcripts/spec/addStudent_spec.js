"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var addStudent = require("../lib/addStudent.js");

describe("add student information", function(){
   
    it("while input wrong string", function(){

        var result = addStudent('Jack,111,1,a88,86,98,60');
        var expect_string = '请按正确的格式输入（格式：姓名, 学号, 班级, 学科: 成绩, ...）：';

        expect(expect_string).to.equal(result);
    });

    it("while input right string", function(){

        var result = addStudent('Jack,111,2,88,86,98,60');
        var expect_string = `学生Jack的成绩被添加`
        
        expect(expect_string).to.equal(result);
    });
});