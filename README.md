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

Number of partitions for natural natural

```
console.log(pfuns.p(n));
```

See [Sequence A000041](https://oeis.org/A000041)

Partitions for natural natural

```
console.log(pfuns.ps(n));
```

It returns an array. Each element is an array representing
the partition.

Number of partitions for natural number with k elements:

```
console.log(pfuns.pk(n, k))
```

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

