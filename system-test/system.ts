// Copyright 2016 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

import * as assert from 'assert';
import {KVStore} from '../src';
const {Datastore} = require('@google-cloud/datastore');

const datastore = new Datastore();
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
