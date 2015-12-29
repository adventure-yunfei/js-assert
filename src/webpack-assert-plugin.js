/**
 * Created by yunfei on 12/29/15.
 */
import webpack from 'webpack';

// A plugin to define global "__DEV__" variable which indicates whether on debug mode
export default function (isDev) {
    return new webpack.DefinePlugin({
        '__DEV__': isDev
    });
}
