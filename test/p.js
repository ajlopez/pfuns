
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

// from https://oeis.org/A000041

exports['next partition numbers'] = function (test) {
    const expected = [  42, 56, 77, 101, 135, 176, 231, 297, 385, 490, 627, 792, 1002, 1255, 1575, 1958 ];

    for (var k = 0; k < expected.length; k++)
        test.equal(pfuns.p(k + 10), expected[k]);
};
