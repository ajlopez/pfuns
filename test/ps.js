
const pfuns = require('..');

exports['partitions for 1'] = function (test) {
    var result = pfuns.ps(1);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 1);
    test.deepEqual(result[0], [ 1 ]);
};

exports['partitions for 2'] = function (test) {
    var result = pfuns.ps(2);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 2);
    test.deepEqual(result[0], [ 2 ]);
    test.deepEqual(result[1], [ 1, 1 ]);
};

