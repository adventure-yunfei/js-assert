/**
 * Created by yunfei on 12/29/15.
 */

// A loader to replace "__assert__" call to add debug mode check
export default function (source) {
    return source.replace(/__assert__\s*\(/g, '__DEV__ && __assert__(');
}
