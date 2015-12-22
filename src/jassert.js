export default function jassert(condition, errMsg = '') {
    if (!condition) {
        throw new Error('__assert__ failed. ' + errMsg);
    }
}