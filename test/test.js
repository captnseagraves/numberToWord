
var index = require('../index.js');
var expect = require('chai').expect;

describe('numbersToWords', function() {

  it('should return "Please, enter a number." if given a string.', function() {
      expect(index.convert('hello')).to.equal("Please, enter a number.")
  });

  it('should return "Please, enter a positive integer." if given 0.', function() {
      expect(index.convert(00000)).to.equal("Please, enter a positive integer.")
  });

  it('should return "Please, enter a positive integer." if given a negative number.', function() {
      expect(index.convert(-100)).to.equal("Please, enter a positive integer.")
  });

  it('should return "two thousand five hundred twenty three and 04/100 dollars"', function() {
      expect(index.convert(2523.04)).to.equal("two thousand five hundred twenty three and 04/100 dollars")
  });

  it('should return "fourteen dollars"', function() {
    expect(index.convert(14)).to.equal("fourteen dollars")
  });

  it('should return "ten thousand dollars"', function() {
    expect(index.convert(10000)).to.equal("ten thousand dollars")
  });

  it('should return "ten thousand eleven dollars"', function() {
    expect(index.convert(10011)).to.equal("ten thousand eleven dollars")
  });

  it('should return "one billion one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine and 66/100 dollars"', function() {
    expect(index.convert(1123456789.66)).to.equal("one billion one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine and 66/100 dollars")
  });

  it('should round decimal and return "six hundred seventy four thousand eight hundred thirty and 32/100 dollars"', function() {
    expect(index.convert(674830.32451)).to.equal("six hundred seventy four thousand eight hundred thirty and 32/100 dollars")
  });

  it('should return "fifty cents"', function() {
    expect(index.convert(.50)).to.equal("fifty cents")
  });

  it('should return "seventy two cents"', function() {
    expect(index.convert(.72)).to.equal("seventy two cents")
  });

  it('should round decimal and return "twenty eight cents"', function() {
    expect(index.convert(.279435)).to.equal("twenty eight cents")
  });

});
