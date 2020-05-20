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

const invalidKeyError = 'Invalid key. Only a string or number may be used.';
function isValidKey(key: Key) {
  return typeof key === 'string' || typeof key === 'number';
}

export type Key = string | number;
export type DeleteCallback = (err?: Error) => void;
export type SetCallback = (err?: Error) => void;
export type GetCallback = (err: Error | null, entity?: Entity) => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  delete(key: Key, callback?: DeleteCallback): void | Promise<void> {
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
  get(key: Key, callback?: GetCallback): void | Promise<Entity> {
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
  set(key: Key, value: Value, callback?: SetCallback): void | Promise<void> {
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
