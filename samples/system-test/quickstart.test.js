/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

const {assert} = require('chai');
const {execSync} = require('child_process');

describe('quickstart samples', () => {
  it('should run the quickstart', async () => {
    const stdout = execSync('node quickstart');
    assert.match(stdout, /Set some values/);
    assert.match(stdout, /Got todos:/);
    assert.match(stdout, /todos deleted/);
  });
});
