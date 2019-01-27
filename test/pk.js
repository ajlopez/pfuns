
const pfuncs = require('..');

exports['first pks'] = function (test) {
    test.equal(pfuncs.pk(1,1), 1);
    test.equal(pfuncs.pk(2,1), 1);
    test.equal(pfuncs.pk(2,2), 1);
    test.equal(pfuncs.pk(3,1), 1);
    test.equal(pfuncs.pk(3,2), 1);
    test.equal(pfuncs.pk(3,3), 1);
}

