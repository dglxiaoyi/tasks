"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("Barcode instead of zip code", function(){
    it("returns empty given empty", function(){
        var result = main();
        var expect_string = '';
        expect(expect_string).to.equal(result);
    });

    it("returns one sequence given a number", function(){
        var result = main('1');
        var expect_string = ':::||';
        expect(expect_string).to.equal(result);
    });

    it("returns Barcode given 5 Zip", function(){
        var result = main('12345');
        var expect_string = '|:::||::|:|::||::|::|:|:|::|:|:|';
        expect(expect_string).to.equal(result);
    });

    it("returns Barcode given 9 Zip", function(){
        var result = main('19104-2345');
        var expect_string = '|:::|||:|:::::||||::::|::|::|:|::||::|::|:|:|::::|||';
        expect(expect_string).to.equal(result);
    });
    it("returns Barcode given 10 Zip", function(){
        var result = main('1910402345');
        var expect_string = '|:::|||:|:::::||||::::|::|||:::::|:|::||::|::|:|:|::::|||';
        expect(expect_string).to.equal(result);
    });

    
});

describe("Barcode instead of zip code", function(){
    it("returns wrong given wrong Barcode",function(){
         var result = main('|:::|||:|:::::||||::::|::|||:::::|:|::||::|::|:|:|:|:|::|');
         var expect_string = 'This is wrong';
          expect(expect_string).to.equal(result);
    });

    it("returns Zip-10 given Barcode", function(){
        var result = main('|:::|||:|:::::||||::::|::|||:::::|:|::||::|::|:|:|::::|||');
        var expect_string = '1910402345';
        expect(expect_string).to.equal(result);
    });

    it("returns Zip-9 given Barcode", function(){
        var result = main('|:::|||:|:::::||||::::|::|::|:|::||::|::|:|:|::::|||');
        var expect_string = '19104-2345';
        expect(expect_string).to.equal(result);
    });

    it("returns Zip-5 given Barcode", function(){
        var result = main('|:::||::|:|::||::|::|:|:|::|:|:|');
        var expect_string = '12345';
        expect(expect_string).to.equal(result);
    });
});