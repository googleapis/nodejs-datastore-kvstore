/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

const invalidKeyError = 'Invalid key. Only a string or number may be used.';
function isValidKey(key: Key) {
  return typeof key === 'string' || typeof key === 'number';
}

export type Key = string|number;
export type DeleteCallback = (err?: Error) => void;
export type SetCallback = (err?: Error) => void;
export type GetCallback = (err: Error|null, entity?: Entity) => void;

// tslint:disable-next-line no-any
export type Value = any;

export interface Entity {
  value: Value;
}

export interface SetRequest {
  key: Key;
  data: Value;
}

export interface DataSet {
  key(input: Key[]): Key;
  delete(key: Key): Promise<void>;
  delete(key: Key, callback: DeleteCallback): void;
  get(key: Key, callback: GetCallback): void;
  get(key: Key): Promise<[Entity]>;
  save(request: SetRequest, callback: SetCallback): void;
  save(request: SetRequest): Promise<void>;
}

export class KVStore {
  dataset: DataSet;
  constructor(dataset: DataSet) {
    this.dataset = dataset;
  }

  delete(key: Key): Promise<void>;
  delete(key: Key, callback: DeleteCallback): void;
  delete(key: Key, callback?: DeleteCallback): void|Promise<void> {
    if (!isValidKey(key)) {
      throw new Error(invalidKeyError);
    }
    key = this.dataset.key(['KeyValue', key]);
    if (!callback) {
      return this.dataset.delete(key);
    }
    this.dataset.delete(key, callback);
  }

  get(key: Key): Promise<Entity>;
  get(key: Key, callback: GetCallback): void;
  get(key: Key, callback?: GetCallback): void|Promise<Entity> {
    if (!isValidKey(key)) {
      throw new Error(invalidKeyError);
    }
    key = this.dataset.key(['KeyValue', key]);
    if (!callback) {
      return this.dataset.get(key).then(x => {
        return x[0] && x[0].value;
      });
    }
    this.dataset.get(key, (err, entity) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, entity && entity.value);
    });
  }

  set(key: Key, value: Value): Promise<void>;
  set(key: Key, value: Value, callback: SetCallback): void;
  set(key: Key, value: Value, callback?: SetCallback): void|Promise<void> {
    if (!isValidKey(key)) {
      throw new Error(invalidKeyError);
    }
    const request = {
      key: this.dataset.key(['KeyValue', key]),
      data: {
        value,
      },
    };

    if (!callback) {
      return this.dataset.save(request);
    }
    this.dataset.save(request, callback);
  }
}
