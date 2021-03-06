# pfuns

Partition functions, number theory.

## Install

```
npm install pfuns
```

## Usage

```
const pfuns = require('pfuns');
```

## Functions

Number of partitions of n (natural number)

```
console.log(pfuns.p(n));
```

See [Sequence A000041](https://oeis.org/A000041)

Partitions of n

```
console.log(pfuns.ps(n));
```

It returns an array. Each element is an array representing
the partition.

Number of partitions of n with k elements:

```
console.log(pfuns.pk(n, k))
```

## Version

- 0.0.1 Initial version

## References

- [Partition (number theory)](https://en.wikipedia.org/wiki/Partition_(number_theory))

## License

MIT

## Contribution

Feel free to [file issues](https://github.com/ajlopez/pfuns) and submit
[pull requests](https://github.com/ajlopez/pfuns/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

