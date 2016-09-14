'use strict';

const greet = require('../lib/greet');
const assert = require('assert');

describe('greet', function() {
  describe('#greet()', function() {
    it('should return hello lee', function() {
      let result = greet.greet('lee');
      assert.ok(result === 'hello lee', 'was not hello lee');
    });
  });
});

describe('greet', function() {
  describe('#greet()', function() {
    it ('should not be an empty string', function() {
      let result = greet.greet('lee');
      // assert.equal(result, 'hello lee', 'The string was empty');
      if (result === 'hello ') {
        assert.ifError('empty string');
      }
    });
  });
});
