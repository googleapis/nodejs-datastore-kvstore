# gcloud-keystore
> Use a [gcloud-node](https://github.com/GoogleCloudPlatform/gcloud-node) dataset as a Key/Value store.


## Install
```sh
$ npm install --save gcloud-keystore
```


## Example
```js
var keystore = require('gcloud-keystore');
var gcloud = require('gcloud')(/*...*/);
var dataset = gcloud.datastore.dataset();

var keystore = keystore(dataset);

// Set an item.
keystore.set('todos', ['eat', 'sleep', 'repeat'], function(err, key) {});

// Get an item.
keystore.get('todos', function(err, todos) {
  // todos:
  //   ['eat', 'sleep', 'repeat']
});

// Delete an item.
keystore.delete('todos', function(err) {});
```


## How
[Google Cloud Datastore](https://cloud.google.com/datastore) is a managed, NoSQL, schemaless database for storing non-relational data. Datastore [entities](https://cloud.google.com/datastore/docs/concepts/entities) are complex objects. However, we can wrap this complexity to mimic a simple key/value store by storing a numeric or string "key" as the id of an entity.

The example below shows the complexity that is hidden with `gcloud-keystore`.

#### With `gcloud-node`:
```js
var key = dataset.key(['KeyValue', 'key']);

dataset.save({
  key: key,
  value: 'value'
}, function() {});

dataset.get(key, function() {});

dataset.delete(key, function() {});
```

#### With `gcloud-node` + `gcloud-keystore`:
```js
var keystore = require('gcloud-keystore')(dataset);

keystore.set('key', 'value', function() {});

keystore.get('key', function() {});

keystore.delete('key', function() {});
```


## API

### keystore(dataset)

#### dataset

A gcloud-node Datastore [Dataset](http://googlecloudplatform.github.io/gcloud-node/#/docs/master/datastore/dataset) instance.

### keystore#delete(key, callback)

#### key
Type: `String|Number`

#### callback
Type: `Function`
Executed with the same signature as [Dataset#delete](http://googlecloudplatform.github.io/gcloud-node/#/docs/master/datastore/dataset?method=delete).

### keystore#get(key, callback)

#### key
Type: `String|Number`

#### callback
Type: `Function`
Executed with (`err`, `value`)

### keystore#set(key, value, callback)

#### key
Type: `String|Number`

#### value
Type: `*`

#### callback
Type: `Function`
Executed with the same signature as [Dataset#save](http://googlecloudplatform.github.io/gcloud-node/#/docs/master/datastore/dataset?method=save).


## Credit

Concept originally created by [Patrick Costello](https://github.com/pcostell): https://github.com/GoogleCloudPlatform/gcloud-node/issues/256#issuecomment-58962323.


## License

MIT © Stephen Sawchuk