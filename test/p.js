
const pfuns = require('..');

exports['first partition numbers'] = function (test) {
    test.equal(pfuns.p(1), 1);
    test.equal(pfuns.p(2), 2);
    test.equal(pfuns.p(3), 3);
    test.equal(pfuns.p(4), 5);
    test.equal(pfuns.p(5), 7);
    test.equal(pfuns.p(6), 11);
    test.equal(pfuns.p(7), 15);
    test.equal(pfuns.p(8), 22);
    test.equal(pfuns.p(9), 30);
};