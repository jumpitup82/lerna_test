const packageJson = require('./package');

console.log('modify');
console.log(packageJson.name, ': ', packageJson.version);
console.log('modify 1');

require('lerna_package2');

