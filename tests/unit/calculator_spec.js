var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  // it('it has a sample test', function(){
  //   assert.equal(true, true)
  // });

  it('should be able to add', function(){
    assert.equal(calculator.runningTotal, 0);
    calculator.add(4);
    assert.equal(calculator.runningTotal, 4);
  });

  it('should be able to subtract', function(){
    calculator.previousTotal = 4;
    calculator.subtract(2);
    assert.equal(calculator.runningTotal, 2);
  });

  it('should be able to multiply', function(){
    calculator.previousTotal = 4;
    calculator.multiply(2);
    assert.equal(calculator.runningTotal, 8);
  });

  it('should be able to divide', function(){
    calculator.previousTotal = 8;
    calculator.divide(2);
    assert.equal(calculator.runningTotal, 4);
  });

  it('should clear running total, reset the new total flag and display number clicked when a number is clicked, if a previous operation has just been completed, or there is a zero in the running total', function(){
    calculator.add(4);
    assert.equal(calculator.runningTotal, 4);
    assert.equal(calculator.newTotal, true);
    calculator.numberClick(9);
    assert.equal(calculator.runningTotal, 9);
    assert.equal(calculator.newTotal, false);
  });

  it('should recognise operator being clicked previously and utilise associated function', function(){
    calculator.numberClick(6);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 12);
    assert.equal(calculator.newTotal, true);
  });

  it('should clear running total, and if running total is already zero, clears previous operator and previous total', function(){
    calculator.numberClick(6);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 12);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  });

});
