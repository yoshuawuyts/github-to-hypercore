# github-to-hypercore [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Stream a github event feed into a hypercore.

## Usage
```sh
$ SECRET=<cool-github-secret> PORT=<some-port> github-to-hypercore
# => <base64 key>
```

To apply to all of your projects, you need to create a new [github
integration](https://github.com/settings/installations) that can receive the
webhook events.

## Installation
```sh
$ npm install github-to-hypercore
```

## See Also
- https://developer.github.com/webhooks/#events
- https://github.com/settings/installations

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/github-to-hypercore.svg?style=flat-square
[3]: https://npmjs.org/package/github-to-hypercore
[4]: https://img.shields.io/travis/yoshuawuyts/github-to-hypercore/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/github-to-hypercore
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/github-to-hypercore/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/github-to-hypercore
[8]: http://img.shields.io/npm/dm/github-to-hypercore.svg?style=flat-square
[9]: https://npmjs.org/package/github-to-hypercore
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
