# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/google-cloud-kvstore?activeTab=versions

## v5.0.0

**BREAKING CHANGES**. The import style of this library has changed to support es-module style syntax.

#### Old code
```js
const kvstore = require('google-cloud-kvstore');
const store = kvstore(datastore);
```

#### New Code
```js
const {KVStore} = require('google-cloud-kvstore');
const store = new KVStore(datastore);
```

### New Features
- feat: add promise support, samples, and system tests ([#38](https://github.com/googleapis/google-cloud-kvstore/pull/38))
- feat: convert to TypeScript ([#14](https://github.com/googleapis/google-cloud-kvstore/pull/14))

### Internal / Testing Changes
- Update kokoro config ([#37](https://github.com/googleapis/google-cloud-kvstore/pull/37))
- Update kokoro config ([#36](https://github.com/googleapis/google-cloud-kvstore/pull/36))
- test: remove appveyor config ([#35](https://github.com/googleapis/google-cloud-kvstore/pull/35))
- Update kokoro config ([#34](https://github.com/googleapis/google-cloud-kvstore/pull/34))
- Enable prefer-const in the eslint config ([#33](https://github.com/googleapis/google-cloud-kvstore/pull/33))
- Enable no-var in eslint ([#32](https://github.com/googleapis/google-cloud-kvstore/pull/32))
- Move to the new github org ([#31](https://github.com/googleapis/google-cloud-kvstore/pull/31))
- Update CI config ([#30](https://github.com/googleapis/google-cloud-kvstore/pull/30))
- Retry npm in CI ([#28](https://github.com/googleapis/google-cloud-kvstore/pull/28))
- Update CI config ([#25](https://github.com/googleapis/google-cloud-kvstore/pull/25))
- Add common CI config ([#24](https://github.com/googleapis/google-cloud-kvstore/pull/24))
- chore(deps): update dependency nyc to v13 ([#23](https://github.com/googleapis/google-cloud-kvstore/pull/23))
- update synth file
- Update the CI config ([#22](https://github.com/googleapis/google-cloud-kvstore/pull/22))
- chore: update CircleCI config
- chore(deps): update dependency eslint-config-prettier to v3 ([#20](https://github.com/googleapis/google-cloud-kvstore/pull/20))
- chore: ignore package-lock.json ([#19](https://github.com/googleapis/google-cloud-kvstore/pull/19))
- chore(deps): lock file maintenance ([#18](https://github.com/googleapis/google-cloud-kvstore/pull/18))
- chore: improve types, enable noImplicitAny ([#15](https://github.com/googleapis/google-cloud-kvstore/pull/15))
- chore: update renovate config ([#11](https://github.com/googleapis/google-cloud-kvstore/pull/11))
- chore: upgrade to es6 ([#13](https://github.com/googleapis/google-cloud-kvstore/pull/13))
- chore: enable CI and add a synth file ([#12](https://github.com/googleapis/google-cloud-kvstore/pull/12))
- chore: Configure Renovate ([#10](https://github.com/googleapis/google-cloud-kvstore/pull/10))
- package.json: Update main file and files array ([#9](https://github.com/googleapis/google-cloud-kvstore/pull/9))
- chore: reorganize the files ([#8](https://github.com/googleapis/google-cloud-kvstore/pull/8))
- fixy
- chore: make it OSPO compliant
- RENAME to google-cloud-kvstore

## v4.0.0

**BREAKING CHANGES**. The import style of this library has changed to support es-module style syntax.

#### Old code
```js
const kvstore = require('google-cloud-kvstore');
const store = kvstore(datastore);
```

#### New Code
```js
const {KVStore} = require('google-cloud-kvstore');
const store = new KVStore(datastore);
```

### New Features
- feat: add promise support, samples, and system tests ([#38](https://github.com/googleapis/google-cloud-kvstore/pull/38))
- feat: convert to TypeScript ([#14](https://github.com/googleapis/google-cloud-kvstore/pull/14))

### Internal / Testing Changes
- Update kokoro config ([#37](https://github.com/googleapis/google-cloud-kvstore/pull/37))
- Update kokoro config ([#36](https://github.com/googleapis/google-cloud-kvstore/pull/36))
- test: remove appveyor config ([#35](https://github.com/googleapis/google-cloud-kvstore/pull/35))
- Update kokoro config ([#34](https://github.com/googleapis/google-cloud-kvstore/pull/34))
- Enable prefer-const in the eslint config ([#33](https://github.com/googleapis/google-cloud-kvstore/pull/33))
- Enable no-var in eslint ([#32](https://github.com/googleapis/google-cloud-kvstore/pull/32))
- Move to the new github org ([#31](https://github.com/googleapis/google-cloud-kvstore/pull/31))
- Update CI config ([#30](https://github.com/googleapis/google-cloud-kvstore/pull/30))
- Retry npm in CI ([#28](https://github.com/googleapis/google-cloud-kvstore/pull/28))
- Update CI config ([#25](https://github.com/googleapis/google-cloud-kvstore/pull/25))
- Add common CI config ([#24](https://github.com/googleapis/google-cloud-kvstore/pull/24))
- chore(deps): update dependency nyc to v13 ([#23](https://github.com/googleapis/google-cloud-kvstore/pull/23))
- update synth file
- Update the CI config ([#22](https://github.com/googleapis/google-cloud-kvstore/pull/22))
- chore: update CircleCI config
- chore(deps): update dependency eslint-config-prettier to v3 ([#20](https://github.com/googleapis/google-cloud-kvstore/pull/20))
- chore: ignore package-lock.json ([#19](https://github.com/googleapis/google-cloud-kvstore/pull/19))
- chore(deps): lock file maintenance ([#18](https://github.com/googleapis/google-cloud-kvstore/pull/18))
- chore: improve types, enable noImplicitAny ([#15](https://github.com/googleapis/google-cloud-kvstore/pull/15))
- chore: update renovate config ([#11](https://github.com/googleapis/google-cloud-kvstore/pull/11))
- chore: upgrade to es6 ([#13](https://github.com/googleapis/google-cloud-kvstore/pull/13))
- chore: enable CI and add a synth file ([#12](https://github.com/googleapis/google-cloud-kvstore/pull/12))
- chore: Configure Renovate ([#10](https://github.com/googleapis/google-cloud-kvstore/pull/10))
- package.json: Update main file and files array ([#9](https://github.com/googleapis/google-cloud-kvstore/pull/9))
- chore: reorganize the files ([#8](https://github.com/googleapis/google-cloud-kvstore/pull/8))
- fixy
- chore: make it OSPO compliant
- RENAME to google-cloud-kvstore

