/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

'use strict';

const assert = require('assert');
const KVStore = require('../src');

function Dataset() {
  this.key = () => {};
  this.delete = () => {};
  this.get = () => {};
  this.save = () => {};
}

it('KVStore is a function', () => {
  assert.strictEqual(typeof KVStore, 'function');
});

it('a KVStore instance has a delete, get, and set method', () => {
  const kvstore = new KVStore(new Dataset());
  assert.strictEqual(typeof kvstore.delete, 'function');
  assert.strictEqual(typeof kvstore.get, 'function');
  assert.strictEqual(typeof kvstore.set, 'function');
});

it('delete, get, and set throw with invalid key', () => {
  const kvstore = new KVStore(new Dataset());

  [undefined, () => {}, {}, true].forEach(key => {
    assert.throws(() => {
      kvstore.delete(key);
    }, /invalid key/i);

    assert.throws(() => {
      kvstore.get(key);
    }, /invalid key/i);

    assert.throws(() => {
      kvstore.set(key);
    }, /invalid key/i);
  });
});

it('delete, get, and set pipe through calls to the dataset', () => {
  let deleteCalled = false;
  let getCalled = false;
  let saveCalled = false;

  const ds = new Dataset();
  ds.delete = () => {
    deleteCalled = true;
  };
  ds.get = () => {
    getCalled = true;
  };
  ds.save = () => {
    saveCalled = true;
  };

  const kvstore = new KVStore(ds);

  kvstore.delete(1);
  assert.strictEqual(deleteCalled, true);

  kvstore.get(1);
  assert.strictEqual(getCalled, true);

  kvstore.set(1);
  assert.strictEqual(saveCalled, true);
});

it('delete, get, and set create a key', () => {
  let keyCalled = false;

  const ds = new Dataset();
  ds.key = () => {
    keyCalled = true;
  };

  const kvstore = new KVStore(ds);

  kvstore.delete(1);
  assert.strictEqual(keyCalled, true);
  keyCalled = false;

  kvstore.get(1);
  assert.strictEqual(keyCalled, true);
  keyCalled = false;

  kvstore.set(1);
  assert.strictEqual(keyCalled, true);
});
