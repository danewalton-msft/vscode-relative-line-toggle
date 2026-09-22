const test = require('node:test');
const assert = require('node:assert/strict');
const { getNextLineNumberMode } = require('./lineNumbers');

test('changes absolute line numbers to relative', () => {
  assert.equal(getNextLineNumberMode('on'), 'relative');
});

test('changes relative line numbers to absolute', () => {
  assert.equal(getNextLineNumberMode('relative'), 'on');
});

test('enables relative line numbers from other modes', () => {
  assert.equal(getNextLineNumberMode('off'), 'relative');
  assert.equal(getNextLineNumberMode('interval'), 'relative');
});
