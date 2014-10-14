'use strict';

var assert = require('assert');
var KeyStore = require('./index.js');
var successes = [];
var tests = [];

test('KeyStore is a function', function() {
  assert.equal(typeof KeyStore, 'function');
});

test('a KeyStore instance has a get and set method', function() {
  var keystore = new KeyStore(createDataset());

  assert.equal(typeof keystore.get, 'function');
  assert.equal(typeof keystore.set, 'function');
});

test('get and set throw with invalid key', function() {
  var keystore = new KeyStore(createDataset());

  [undefined, function() {}, {}, true].forEach(function(key) {
    assert.throws(function() {
      keystore.get(key);
    }, /invalid key/i);

    assert.throws(function() {
      keystore.set(key);
    }, /invalid key/i);
  });
});

test('get and set pipe through calls to the dataset', function() {
  var getCalled = false;
  var saveCalled = false;

  var ds = createDataset();
  ds.get = function() { getCalled = true; };
  ds.save = function() { saveCalled = true; };

  var keystore = new KeyStore(ds);
  keystore.get(1);
  assert.strictEqual(getCalled, true);

  keystore.set(1);
  assert.strictEqual(saveCalled, true);
});

test('get and set create a key', function() {
  var keyCalled = false;

  var ds = createDataset();
  ds.key = function() { keyCalled = true; };

  var keystore = new KeyStore(ds);

  keystore.get(1);
  assert.strictEqual(keyCalled, true);
  keyCalled = false;

  keystore.set(1);
  assert.strictEqual(keyCalled, true);
});

function createDataset() {
  function Dataset() {
    this.key = function() {};
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