// var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
// var bubbleGum = require('../js/bubble_sort.js');

describe('bubbleSort', function() {

  var gumMachine;
  var count;

  beforeEach(function () {
    gumMachine = [9, 3, 1, 10, 5];
    count = 0;
  });

  it('function that takes in an argument', function() {
    expect(bubbleSort).to.be.a('function');
  });

  it('bubbles array with lowest values in the beginning', function() {
    bubbleSort(gumMachine);
    expect(gumMachine).to.have.length(5);
    expect(gumMachine).to.deep.equal([1, 3, 5, 9, 10]);
  });

  it('should have a count of number of interations', function() {
    expect(bubbleSort).to.equal(7);
  });

});