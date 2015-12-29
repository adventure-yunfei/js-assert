# JS Assert

### What it does?

To add check on debug mode only (similar to java "assert" keyword) and being removed on production mode

### How to use it?

###### By Webpack:

Add webpack-assert-loader as the first loader of js;
Add webpack-assert-plugin in plugins section.

An example to config webpack:

```javascript
var WebpackAssertPlugin = require('js-assert/webpack-assert-plugin');

var webpackConfig = {
    /* ... other webpack config ...*/
    module: {
        loaders: {[
            test: /\.js$/,
            loader: 'js-assert/webpack-assert-loader'
        ]}
    },
    plugins: [
        new WebpackAssertPlugin(isDev) // isDev is a flag produced on building to indicate whether it's for debug mode
        /* ... other plugins ...*/
    ]
};
```

It's achieved by setting a global "__DEV__" boolean variable by webpack-assert-plugin,
and replace "__assert__" call to add "__DEV__" check,
so webpack will strip "__assert__" call on production mode as "__DEV__" is false there.

###### By UglifyJs Tool:

Set "compress.pure_func" to include "__assert__" on production building.

It's achieved by manually specifying the "__assert__" call doesn't affect anything.
So it'll be stripped out (if it's returned result is not saved to some local variable...).
