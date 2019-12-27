// Copyright 2018 Google LLC
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

const {KVStore} = require('google-cloud-kvstore');
const {Datastore} = require('@google-cloud/datastore');

const datastore = new Datastore();

/**
 * Create the store
 */
const store = new KVStore(datastore);

/**
 * Set an item in the datastore.
 */
async function set() {
  await store.set('todos', ['eat', 'sleep', 'repeat']);
  console.log('Set some values in the datastore.');
}

/**
 * Get an item from datastore.
 */
async function get() {
  const todos = await store.get('todos');
  console.log('Got todos: ', todos);
}

/**
 * Delete the item from datastore.
 */
async function remove() {
  await store.delete('todos');
  console.log('todos deleted!');
}

/**
 * Set a value, get it, and delete it.
 */
async function main() {
  await set();
  await get();
  await remove();
}

main().catch(console.error);
