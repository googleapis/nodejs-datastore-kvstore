/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

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
