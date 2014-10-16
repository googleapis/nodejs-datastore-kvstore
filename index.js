'use strict';

var invalidKeyError = 'Invalid key. Only a string or number may be used.';
function isValidKey(key) {
  return typeof key === 'string' || typeof key === 'number';
}

function KeyStore(dataset) {
  if (!(this instanceof KeyStore)) {
    return new KeyStore(dataset);
  }

  this.dataset = dataset;
}

KeyStore.prototype.delete = function(key, callback) {
  if (!isValidKey(key)) {
    throw new Error(invalidKeyError);
  }
  key = this.dataset.key(['KeyValue', key]);
  this.dataset.delete(key, callback);
};

KeyStore.prototype.get = function(key, callback) {
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

KeyStore.prototype.set = function(key, value, callback) {
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

module.exports = KeyStore;