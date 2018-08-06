/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

'use strict';

const invalidKeyError = 'Invalid key. Only a string or number may be used.';
function isValidKey(key: Key) {
  return typeof key === 'string' || typeof key === 'number';
}

export type Key = string|number;
export type DeleteCallback = (err?: Error) => void;
export type SetCallback = (err?: Error) => void;
export type GetCallback = (err: Error|null, entity?: Entity) => void;

export interface Entity {
  // tslint:disable-next-line no-any
  value: any;
}

export interface SetRequest {
  key: Key;
  // tslint:disable-next-line no-any
  data: any;
}

export interface DataSet {
  key(input: Key[]): Key;
  delete(key: Key, callback: DeleteCallback): void;
  get(key: Key, callback: GetCallback): void;
  save(request: SetRequest, callback: SetCallback): void;
}

export class KVStore {
  dataset: DataSet;
  constructor(dataset: DataSet) {
    if (!(this instanceof KVStore)) {
      return new KVStore(dataset);
    }
    this.dataset = dataset;
  }

  delete(key: Key, callback: DeleteCallback) {
    if (!isValidKey(key)) {
      throw new Error(invalidKeyError);
    }
    key = this.dataset.key(['KeyValue', key]);
    this.dataset.delete(key, callback);
  }

  get(key: Key, callback: GetCallback) {
    if (!isValidKey(key)) {
      throw new Error(invalidKeyError);
    }
    key = this.dataset.key(['KeyValue', key]);
    this.dataset.get(key, (err, entity) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, entity && entity.value);
    });
  }

  // tslint:disable-next-line no-any
  set(key: Key, value: any, callback: SetCallback) {
    if (!isValidKey(key)) {
      throw new Error(invalidKeyError);
    }
    this.dataset.save(
        {
          key: this.dataset.key(['KeyValue', key]),
          data: {
            value,
          },
        },
        callback || (() => {}));
  }
}
