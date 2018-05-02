const packageJson = require('./package');

console.log(packageJson.name, ': ', packageJson.version);
console.log('modify 1');

require('lerna_package3');