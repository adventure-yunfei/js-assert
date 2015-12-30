/**
 * Created by yunfei on 12/29/15.
 */
import loaderUtils from 'loader-utils';

/**
 * A loader to ensure "__assert__" call only exists on debug mode.
 * Require a boolean "dev" query indicating whether it's on debug mode
 */
export default function (source) {
    let {dev} = loaderUtils.parseQuery(this.query);
    if (typeof dev !== 'boolean') {
        console.log(`WARN: webpack-assert-loader requires a BOOLEAN "dev" param, but get "${dev}". Fallback to "true" instead`)
        dev = true;
    }
    return source.replace(/__assert__\s*\(/g, `${dev ? 'true' : 'false'} && __assert__(`);
}
