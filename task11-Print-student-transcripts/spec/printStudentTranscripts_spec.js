"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var printStudentTranscripts = require("../lib/printStudentTranscripts.js");

describe("print student transcript", function(){
   
    it("while input right ids", function(){

        var result = printStudentTranscripts('101');
        var expect_string = `成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
Jack|88|82|90|60|80|320
全班总分平均数：342.6
全班总分中位数：332`;

        expect(expect_string).to.equal(result);
    });
    
    it("while input wrong ids", function(){

        var result = printStudentTranscripts('id111');
        var expect_string = '请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';

        expect(expect_string).to.equal(result);
    });
});