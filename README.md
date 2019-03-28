# win-screenoff [![Build Status](https://travis-ci.org/Sleavely/win-screenoff.svg?branch=master)](https://travis-ci.org/Sleavely/win-screenoff)

> NodeJS module/CLI for putting your Windows 10 monitor to sleep through PowerShell

[Github](https://github.com/Sleavely/win-screenoff) | [NPM](https://www.npmjs.com/package/win-screenoff) | [Travis](https://travis-ci.org/Sleavely/win-screenoff)

## Install

```
$ npm i -g win-screenoff
```


## Usage

In your shell:

```
$ screenoff
```

In your code:

```js
const screenoff = require('win-screenoff')

const main = async () => {
  await screenoff()
}
main()
```


## License

MIT © [Joakim Hedlund](https://joakimhedlund.com)
