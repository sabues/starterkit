// This file isn't transpiled, so must use ComonJS and ES5

// Register babel to transpile before our test run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand. If Mocha sees a .css import, it will treat it as an empty function
require.extensions['.css'] = function() {};
