# JS Assert

# What it does?

To add check on debug mode only (similar to java "assert" keyword) and being removed on production mode

# How to use it?

###### By Webpack:

Add webpack-assert-loader as the first loader of js, with "dev" query param specified.

An example to config webpack:

```javascript
var webpackConfig = {
    /* ... other webpack config ...*/
    module: {
        loaders: {[
            test: /\.js$/,
            loader: 'js-assert/webpack-assert-loader?dev=' + (isDev ? 'true' : 'false')
        ]}
    }
};
```

It's achieved by setting a global "__DEV__" boolean variable by webpack-assert-plugin,
and replace "__assert__" call to add "__DEV__" check,
so webpack will strip "__assert__" call on production mode as "__DEV__" is false there.

###### By UglifyJs Tool:

Set "compress.pure_func" to include "__assert__" on production building.

It's achieved by manually specifying the "__assert__" call doesn't affect anything.
So it'll be stripped out (if it's returned result is not saved to some local variable...).

# Changes Log

### [2.0.1](https://github.com/adventure-yunfei/js-assert/compare/1.0.3...2.0.1)

- Use a single webpack loader to strip `__assert__` call on production mode, instead of cooperated with another webpack plugin

### [1.0.3](https://github.com/adventure-yunfei/js-assert/tree/1.0.3)
