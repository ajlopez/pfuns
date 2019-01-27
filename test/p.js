
var pfuns = require('..');

exports['first partition numbers'] = function (test) {
    test.equal(pfuns.p(1), 1);
    test.equal(pfuns.p(2), 2);
    test.equal(pfuns.p(3), 3);
    test.equal(pfuns.p(4), 5);
    test.equal(pfuns.p(5), 7);
};