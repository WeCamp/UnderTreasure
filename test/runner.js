
// require all test files using special Webpack feature
// https://webpack.github.io/docs/context.html#require-context
console.log('hellp');
var testsContext = require.context('.', true, /\.spec$/);
testsContext.keys().forEach(testsContext);