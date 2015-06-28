'use strict';

var invalidKeyError = 'Invalid key. Only a string or number may be used.';
function isValidKey(key) {
  return typeof key === 'string' || typeof key === 'number';
}

function KVStore(dataset) {
  if (!(this instanceof KVStore)) {
    return new KVStore(dataset);
  }

  this.dataset = dataset;
}

KVStore.prototype.delete = function(key, callback) {
  if (!isValidKey(key)) {
    throw new Error(invalidKeyError);
  }
  key = this.dataset.key(['KeyValue', key]);
  this.dataset.delete(key, callback);
};

KVStore.prototype.get = function(key, callback) {
  if (!isValidKey(key)) {
    throw new Error(invalidKeyError);
  }
  key = this.dataset.key(['KeyValue', key]);
  this.dataset.get(key, function(err, entity) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, entity && entity.data.value);
  });
};

KVStore.prototype.set = function(key, value, callback) {
  if (!isValidKey(key)) {
    throw new Error(invalidKeyError);
  }
  this.dataset.save({
    key: this.dataset.key(['KeyValue', key]),
    data: {
      value: value
    }
  }, callback || function() {});
};

module.exports = KVStore;
