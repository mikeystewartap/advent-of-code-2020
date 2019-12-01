const _ = require('lodash');
const main = input => _.chain(input).map(v => Math.floor(v/3)-2).sum().value();
module.exports = main;