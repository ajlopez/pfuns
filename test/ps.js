
const pfuns = require('..');

exports['partitions for 1'] = function (test) {
    var result = pfuns.ps(1);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 1);
    test.deepEqual(result[0], [ 1 ]);
};

