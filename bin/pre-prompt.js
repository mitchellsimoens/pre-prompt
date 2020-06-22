#! /usr/bin/env node

// eslint-disable-next-line import/no-unresolved,@typescript-eslint/no-var-requires
const { default: prompt } = require('../lib/index.js');

prompt(process.argv.slice(2));
