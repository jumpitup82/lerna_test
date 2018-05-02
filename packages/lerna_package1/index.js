const packageJson = require('./package');

console.log('modify');
console.log(packageJson.name, ': ', packageJson.version);

require('lerna_package2');

