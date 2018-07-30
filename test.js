/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

'use strict';

var assert = require('assert');
var KVStore = require('./index.js');
var successes = [];
var tests = [];

test('KVStore is a function', function() {
  assert.equal(typeof KVStore, 'function');
});

test('a KVStore instance has a delete, get, and set method', function() {
  var kvstore = new KVStore(createDataset());

  assert.equal(typeof kvstore.delete, 'function');
  assert.equal(typeof kvstore.get, 'function');
  assert.equal(typeof kvstore.set, 'function');
});

test('delete, get, and set throw with invalid key', function() {
  var kvstore = new KVStore(createDataset());

  [undefined, function() {}, {}, true].forEach(function(key) {
    assert.throws(function() {
      kvstore.delete(key);
    }, /invalid key/i);

    assert.throws(function() {
      kvstore.get(key);
    }, /invalid key/i);

    assert.throws(function() {
      kvstore.set(key);
    }, /invalid key/i);
  });
});

test('delete, get, and set pipe through calls to the dataset', function() {
  var deleteCalled = false;
  var getCalled = false;
  var saveCalled = false;

  var ds = createDataset();
  ds.delete = function() { deleteCalled = true; };
  ds.get = function() { getCalled = true; };
  ds.save = function() { saveCalled = true; };

  var kvstore = new KVStore(ds);

  kvstore.delete(1);
  assert.strictEqual(deleteCalled, true);

  kvstore.get(1);
  assert.strictEqual(getCalled, true);

  kvstore.set(1);
  assert.strictEqual(saveCalled, true);
});

test('delete, get, and set create a key', function() {
  var keyCalled = false;

  var ds = createDataset();
  ds.key = function() { keyCalled = true; };

  var kvstore = new KVStore(ds);

  kvstore.delete(1);
  assert.strictEqual(keyCalled, true);
  keyCalled = false;

  kvstore.get(1);
  assert.strictEqual(keyCalled, true);
  keyCalled = false;

  kvstore.set(1);
  assert.strictEqual(keyCalled, true);
});

function createDataset() {
  function Dataset() {
    this.key = function() {};
    this.delete = function() {};
    this.get = function() {};
    this.save = function() {};
  }
  return new Dataset();
}

function test(message, fn) {
  try {
    fn();
    tests.push({ success: true, fail: false, message: message });
  } catch(e) {
    tests.push({ success: false, fail: true, message: message, error: e });
  }
}

tests.forEach(function(test, index) {
  function black(message) {
    return '\u001b[30m' + message + '\u001b[39m';
  }
  function greenBg(message) {
    return '\u001b[42m' + message + '\u001b[49m';
  }
  function redBg(message) {
    return '\u001b[41m' + message + '\u001b[49m';
  }
  function bold(message) {
    return '\u001b[1m' + message + '\u001b[22m';
  }

  var icon, message;
  if (test.success) {
    icon = '✔︎';
    message = greenBg(black(' ' + icon + ' ' + test.message + ' '));
  } else {
    icon = '✖';
    message = redBg(bold(' ' + icon + ' ' + test.message + ' '));
  }

  console.log((index > 0 ? '\n' : '') + message);
  if (test.error) {
    console.log('  ' + test.error.stack);
  }
});
