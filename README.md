<h1 align="center">Welcome to pre-prompt 👋</h1>

[![npm](https://img.shields.io/npm/v/@mitchellsimoens/pre-prompt.svg)](https://www.npmjs.com/package/@mitchellsimoens/pre-prompt)
[![npm](https://img.shields.io/npm/dm/@mitchellsimoens/pre-prompt.svg)](https://www.npmjs.com/package/@mitchellsimoens/pre-prompt)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![MIT Licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](./LICENSE)

> Asks the user for confirmation to proceed in a pre script.

### 🏠 [Homepage](https://github.com/mitchellsimoens/pre-prompt#readme)

## Install

```sh
npm install --save-exact @mitchellsimoens/pre-prompt
```

## Usage

```json
{
  "scripts": {
    "predeploy": "pre-prompt",
    "deploy": "...."
  }
}
```

When `npm run deploy` is run, the user will be asked to proceed. The user can type any of the following choices
(case-insenstive):

- `ok`
- `sure`
- `yep`
- `yes`

## Author

👤 **Mitchell Simoens &lt;mitchellsimoens@gmail.com&gt;**

- Twitter: [@LikelyMitch](https://twitter.com/LikelyMitch)
- Github: [@mitchellsimoens](https://github.com/mitchellsimoens)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/mitchellsimoens/pre-prompt/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Mitchell Simoens &lt;mitchellsimoens@gmail.com&gt;](https://github.com/mitchellsimoens).

This project is [MIT](./LICENSE) licensed.
