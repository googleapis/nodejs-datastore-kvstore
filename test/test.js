/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

'use strict';

var assert = require('assert');
var KVStore = require('../src');

function Dataset() {
  this.key = function() {};
  this.delete = function() {};
  this.get = function() {};
  this.save = function() {};
}

it('KVStore is a function', function() {
  assert.equal(typeof KVStore, 'function');
});

it('a KVStore instance has a delete, get, and set method', function() {
  var kvstore = new KVStore(new Dataset());

  assert.equal(typeof kvstore.delete, 'function');
  assert.equal(typeof kvstore.get, 'function');
  assert.equal(typeof kvstore.set, 'function');
});

it('delete, get, and set throw with invalid key', function() {
  var kvstore = new KVStore(new Dataset());

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

it('delete, get, and set pipe through calls to the dataset', function() {
  var deleteCalled = false;
  var getCalled = false;
  var saveCalled = false;

  var ds = new Dataset();
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

it('delete, get, and set create a key', function() {
  var keyCalled = false;

  var ds = new Dataset();
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
