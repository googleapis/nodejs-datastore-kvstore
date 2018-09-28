/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

import * as assert from 'assert';
import {KVStore} from '../src';
const datastore = require('@google-cloud/datastore')();

const key = 'todos';
const value = ['eat', 'sleep', 'repeat'];
const store = new KVStore(datastore);

it('should set values', async () => {
  await store.set(key, value);
});

it('should get the same values', async () => {
  const todos = await store.get(key);
  assert.deepStrictEqual(todos, value);
});

it('should remove the data', async () => {
  await store.delete(key);
  const data = await store.get(key);
  assert.strictEqual(data, undefined);
});
