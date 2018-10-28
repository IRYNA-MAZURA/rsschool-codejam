const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther');
const make = require('./src/make');
const recursion = require('./src/recursion');

describe('sumOfOther', () => {
  it('1', () => {
    assert.deepEqual(sumOfOther([1, 2, 3, 4, 5]), [14, 13, 12, 11, 10]);
  });
  it('2', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
});

describe('make', () => {
  it('1', () => {
    assert.equal(make(15)(34, 21, 666)(41)((a, b) => a + b), 777);
  });
  it('2', () => {
    assert.equal(make(15)(34, 21, 666)(41) instanceof Function, true);
  });
});

describe('make', () => {
  it('1', () => {
    assert.equal(make(15)(34, 21, 666)(41)((a, b) => a + b), 777);
  });
  it('2', () => {
    assert.equal(make(15)(34, 21, 666)(41) instanceof Function, true);
  });
});

describe('recursion', () => {
  it('1', () => {
    assert.deepEqual(recursion({
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 } },
    }),
    [[100], [90, 120], [70, 99, 110]]);
  });
  it('2', () => {
    assert.deepEqual(recursion({
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    }), [[100], [90, 120], [70, 99, 110, 130]]);
  });
});
