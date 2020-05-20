/*!
 * Copyright 2018 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {KVStore, Key, DataSet} from '../src';

function getDataset(): DataSet {
  return {
    key: () => 0,
    delete: () => {},
    get: () => {},
    save: () => {},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;
}

function noop() {}

describe('datastore kvstore', () => {
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    ds.key = () => {
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
});
