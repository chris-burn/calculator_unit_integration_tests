var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  it ('should have working number buttons', function(){
    // put id into a variable
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#number9')).click();
    expect (running_total.getAttribute('value')).to.eventually.equal('19');
  });

  // write integration tests here in the form of "it should do something..."

  it ('should allow arithmetical operations to update the display with the result of the operation', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number6')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect (running_total.getAttribute('value')).to.eventually.equal('18');
  });

  it ('should allow multiple operations to be chained together', function(){
    element(by.css('#number6')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect (running_total.getAttribute('value')).to.eventually.equal('28');
  });

  it ('should work with a range of number possibilities (positive, negative, decimals, very large numbers)', function(){
    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect (running_total.getAttribute('value')).to.eventually.equal('-4');
    element(by.css('#clear')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect (running_total.getAttribute('value')).to.eventually.equal('2.5');
    element(by.css('#clear')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect (running_total.getAttribute('value')).to.eventually.equal('1000000000000');
  });

  it ('should display error when try to divide by zero', function(){
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect (running_total.getAttribute('value')).to.eventually.equal('Error');
  });


});