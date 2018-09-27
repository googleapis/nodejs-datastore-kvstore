/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

'use strict';

import * as assert from 'assert';
import {KVStore, Key, DeleteCallback, GetCallback, SetCallback, SetRequest, DataSet} from '../src';

function getDataset(): DataSet {
  return {
    key: (input: Key[]) => 0,
    delete: (key: Key, callback: DeleteCallback) => {},
    get: (key: Key, callback: GetCallback) => {},
    save: (request: SetRequest, callback: SetCallback) => {}
    // tslint:disable-next-line no-any
  } as any;
}

function noop() {}

it('KVStore is a function', () => {
  assert.strictEqual(typeof KVStore, 'function');
});

it('a KVStore instance has a delete, get, and set method', () => {
  const kvstore = new KVStore(getDataset());
  assert.strictEqual(typeof kvstore.delete, 'function');
  assert.strictEqual(typeof kvstore.get, 'function');
  assert.strictEqual(typeof kvstore.set, 'function');
});

it('delete, get, and set throw with invalid key', () => {
  const kvstore = new KVStore(getDataset());

  [undefined, () => {}, {}, true].forEach(key => {
    assert.throws(() => {
      kvstore.delete(key as Key, noop);
    }, /invalid key/i);

    assert.throws(() => {
      kvstore.get(key as Key, noop);
    }, /invalid key/i);

    assert.throws(() => {
      kvstore.set(key as Key, null, noop);
    }, /invalid key/i);
  });
});

it('delete, get, and set pipe through calls to the dataset', () => {
  let deleteCalled = false;
  let getCalled = false;
  let saveCalled = false;

  // tslint:disable-next-line no-any
  const ds: any = getDataset();
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

  kvstore.delete(1, noop);
  assert.strictEqual(deleteCalled, true);

  kvstore.get(1, noop);
  assert.strictEqual(getCalled, true);

  kvstore.set(1, null, noop);
  assert.strictEqual(saveCalled, true);
});

it('delete, get, and set create a key', () => {
  let keyCalled = false;

  const ds = getDataset();
  ds.key = (input) => {
    keyCalled = true;
    return 0;
  };

  const kvstore = new KVStore(ds);

  kvstore.delete(1, noop);
  assert.strictEqual(keyCalled, true);
  keyCalled = false;

  kvstore.get(1, noop);
  assert.strictEqual(keyCalled, true);
  keyCalled = false;

  kvstore.set(1, null, noop);
  assert.strictEqual(keyCalled, true);
});
