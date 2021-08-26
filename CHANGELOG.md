# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/google-cloud-kvstore?activeTab=versions

### [8.0.2](https://www.github.com/googleapis/nodejs-datastore-kvstore/compare/v8.0.1...v8.0.2) (2021-08-25)


### Bug Fixes

* **build:** migrate to using main branch ([#284](https://www.github.com/googleapis/nodejs-datastore-kvstore/issues/284)) ([ae2b381](https://www.github.com/googleapis/nodejs-datastore-kvstore/commit/ae2b3812d178ca9f2f8f2ba485bda760804d534c))

### [8.0.1](https://www.github.com/googleapis/nodejs-datastore-kvstore/compare/v8.0.0...v8.0.1) (2020-07-09)


### Bug Fixes

* typeo in nodejs .gitattribute ([#222](https://www.github.com/googleapis/nodejs-datastore-kvstore/issues/222)) ([57648f3](https://www.github.com/googleapis/nodejs-datastore-kvstore/commit/57648f308c4e5844378015ef83a783eb66d6cd20))

## [8.0.0](https://www.github.com/googleapis/nodejs-datastore-kvstore/compare/v7.0.2...v8.0.0) (2020-06-04)


### ⚠ BREAKING CHANGES

* drop support for node.js 8 (#204)

### Bug Fixes

* apache license URL ([#468](https://www.github.com/googleapis/nodejs-datastore-kvstore/issues/468)) ([#201](https://www.github.com/googleapis/nodejs-datastore-kvstore/issues/201)) ([7504954](https://www.github.com/googleapis/nodejs-datastore-kvstore/commit/7504954fb48d8ce72631af62134fa03af517aba8))
* update license to Apache-2.0 ([#213](https://www.github.com/googleapis/nodejs-datastore-kvstore/issues/213)) ([db76512](https://www.github.com/googleapis/nodejs-datastore-kvstore/commit/db76512c417322d6dead25e971d4dac720b1d110))
* **deps:** update dependency @google-cloud/datastore to v6 ([#215](https://www.github.com/googleapis/nodejs-datastore-kvstore/issues/215)) ([3128a65](https://www.github.com/googleapis/nodejs-datastore-kvstore/commit/3128a65358c550aa8314ccfd2494be4d72057608))


### Build System

* drop support for node.js 8 ([#204](https://www.github.com/googleapis/nodejs-datastore-kvstore/issues/204)) ([d906d2a](https://www.github.com/googleapis/nodejs-datastore-kvstore/commit/d906d2a6275fc814a17698581b675e7415be562f))

### [7.0.2](https://www.github.com/googleapis/nodejs-datastore-kvstore/compare/v7.0.1...v7.0.2) (2020-01-06)


### Bug Fixes

* add repo metadata ([#159](https://www.github.com/googleapis/nodejs-datastore-kvstore/issues/159)) ([6eafd3a](https://www.github.com/googleapis/nodejs-datastore-kvstore/commit/6eafd3aff81227bff44ee40e8042c258e807cae4))
* **deps:** pin TypeScript below 3.7.0 ([1ade865](https://www.github.com/googleapis/nodejs-datastore-kvstore/commit/1ade86535d173aae0b4a1ab649eea43fd286d099))
* **deps:** update dependency @google-cloud/datastore to v5 ([#166](https://www.github.com/googleapis/nodejs-datastore-kvstore/issues/166)) ([8addcc7](https://www.github.com/googleapis/nodejs-datastore-kvstore/commit/8addcc7f225ed832629e659078bf5ac5a8ce0bb1))
* **docs:** add jsdoc-region-tag plugin ([#162](https://www.github.com/googleapis/nodejs-datastore-kvstore/issues/162)) ([9429c5f](https://www.github.com/googleapis/nodejs-datastore-kvstore/commit/9429c5f080f18cf852c7d9cedc4f7e92f30e96a2))

### [7.0.1](https://www.github.com/googleapis/google-cloud-kvstore/compare/v7.0.0...v7.0.1) (2019-06-26)


### Bug Fixes

* **docs:** make anchors work in jsdoc ([#141](https://www.github.com/googleapis/google-cloud-kvstore/issues/141)) ([f27fa8c](https://www.github.com/googleapis/google-cloud-kvstore/commit/f27fa8c))

## [7.0.0](https://www.github.com/googleapis/google-cloud-kvstore/compare/v6.0.0...v7.0.0) (2019-05-17)


### Bug Fixes

* **deps:** update dependency @google-cloud/datastore to v4 ([#131](https://www.github.com/googleapis/google-cloud-kvstore/issues/131)) ([6a55055](https://www.github.com/googleapis/google-cloud-kvstore/commit/6a55055))


### Build System

* upgrade engines field to >=8.10.0 ([#124](https://www.github.com/googleapis/google-cloud-kvstore/issues/124)) ([afd86da](https://www.github.com/googleapis/google-cloud-kvstore/commit/afd86da))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#124)

## v6.0.0

01-31-2019 23:20 PST

### Dependencies
- fix(deps): update dependency @google-cloud/datastore to v3 ([#93](https://github.com/googleapis/google-cloud-kvstore/pull/93))
- fix(deps): update dependency @google-cloud/datastore to v2 ([#53](https://github.com/googleapis/google-cloud-kvstore/pull/53))

### Internal / Testing Changes
- chore(deps): update dependency eslint-config-prettier to v4 ([#95](https://github.com/googleapis/google-cloud-kvstore/pull/95))
- build: ignore googleapis.com in doc link check ([#94](https://github.com/googleapis/google-cloud-kvstore/pull/94))
- build: check broken links in generated docs ([#91](https://github.com/googleapis/google-cloud-kvstore/pull/91))
- test: add sample tests ([#90](https://github.com/googleapis/google-cloud-kvstore/pull/90))
- chore(build): inject yoshi automation key ([#89](https://github.com/googleapis/google-cloud-kvstore/pull/89))
- chore: update nyc and eslint configs ([#88](https://github.com/googleapis/google-cloud-kvstore/pull/88))
- chore: fix publish.sh permission +x ([#86](https://github.com/googleapis/google-cloud-kvstore/pull/86))
- fix(build): fix Kokoro release script ([#85](https://github.com/googleapis/google-cloud-kvstore/pull/85))
- build: add Kokoro configs for autorelease ([#84](https://github.com/googleapis/google-cloud-kvstore/pull/84))
- chore: always nyc report before calling codecov ([#82](https://github.com/googleapis/google-cloud-kvstore/pull/82))
- chore: nyc ignore build/test by default ([#81](https://github.com/googleapis/google-cloud-kvstore/pull/81))
- chore: clean up usage of prettier and eslint ([#80](https://github.com/googleapis/google-cloud-kvstore/pull/80))
- chore: update synth metadata and templates ([#78](https://github.com/googleapis/google-cloud-kvstore/pull/78))
- fix(build): fix system key decryption ([#73](https://github.com/googleapis/google-cloud-kvstore/pull/73))
- chore(deps): update dependency typescript to ~3.2.0 ([#72](https://github.com/googleapis/google-cloud-kvstore/pull/72))
- chore: add synth.metadata
- chore(deps): update dependency gts to ^0.9.0 ([#69](https://github.com/googleapis/google-cloud-kvstore/pull/69))
- chore: update eslintignore config ([#68](https://github.com/googleapis/google-cloud-kvstore/pull/68))
- chore: use latest npm on Windows ([#67](https://github.com/googleapis/google-cloud-kvstore/pull/67))
- chore: update CircleCI config ([#66](https://github.com/googleapis/google-cloud-kvstore/pull/66))
- chore: include build in eslintignore ([#63](https://github.com/googleapis/google-cloud-kvstore/pull/63))
- chore(deps): update dependency eslint-plugin-node to v8 ([#59](https://github.com/googleapis/google-cloud-kvstore/pull/59))
- chore: update issue templates ([#58](https://github.com/googleapis/google-cloud-kvstore/pull/58))
- chore: remove old issue template ([#56](https://github.com/googleapis/google-cloud-kvstore/pull/56))
- build: run tests on node11 ([#55](https://github.com/googleapis/google-cloud-kvstore/pull/55))
- chores(build): run codecov on continuous builds ([#49](https://github.com/googleapis/google-cloud-kvstore/pull/49))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#52](https://github.com/googleapis/google-cloud-kvstore/pull/52))
- chore(deps): update dependency typescript to ~3.1.0 ([#51](https://github.com/googleapis/google-cloud-kvstore/pull/51))
- chores(build): do not collect sponge.xml from windows builds ([#50](https://github.com/googleapis/google-cloud-kvstore/pull/50))
- chore: update new issue template ([#48](https://github.com/googleapis/google-cloud-kvstore/pull/48))
- build: fix codecov uploading on Kokoro ([#45](https://github.com/googleapis/google-cloud-kvstore/pull/45))

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
