/*can-assign@1.1.0#can-assign*/
module.exports = function (d, s) {
    for (var prop in s) {
        d[prop] = s[prop];
    }
    return d;
};