
var index = require('../index.js');
var expect = require('chai').expect;

describe('numbersToWords', function() {

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

  it('should return "fifty cents"', function() {
    expect(index.convert(.50)).to.equal("fifty cents")
  });

  it('should return "one billion two hundred thirty four million four hundred fifty six thousand seven hundred eighty nine and 66/100 dollars"', function() {
    expect(index.convert(123456789.66)).to.equal("one billion two hundred thirty four million four hundred fifty six thousand seven hundred eighty nine and 66/100 dollars")
  });



});
