const assert = require('assert');
const ah = require('../lib/ah');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('ah', () => {
  it('should return a function', () => {
    assert.equal(ah([1]))
  });
})
