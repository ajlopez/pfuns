
const parts = [];

function generatePartitions(list, sum, n) {
    if (sum > n)
        return [];
    
    if (sum === n)
        return [ list ];
    
    var partitions = [];
    var last = list[list.length - 1];
    var from = Math.min(last, n - last);
    
    for (var k = from; k > 0; k--) {
        var newlist = list.slice();
        newlist.push(k);
        partitions = partitions.concat(generatePartitions(newlist, sum + k, n));
    }
    
    return partitions;
}

function partitions(n) {
    if (parts[n])
        return parts[n];
    
    var partitions = [];
    
    for (var k = n; k > 0; k--)
        partitions = partitions.concat(generatePartitions([ k ], k, n));
    
    parts[n] = partitions;
    
    return partitions;
}

function partitionNumber(n) {
    return partitions(n).length;
}

function partitionNumberK(n, k) {
    if (k > n)
        return 0;
    
    if (k === n)
        return 1;
    
    if (k === 1)
        return 1;
    
    var ps = partitions(n);
    
    var count = 0;
    
    for (n in ps)
        if (ps[n].length === k)
            count++;
        
    return count;
}

module.exports = {
    ps: partitions,
    p: partitionNumber,
    pk: partitionNumberK
}

