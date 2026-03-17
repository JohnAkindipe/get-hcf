# get-hcf

A lightweight utility to calculate the **Highest Common Factor (HCF)**, also known as the Greatest Common Divisor (GCD), of two integers.

## Installation

```bash
npm install get-hcf
```

or with Yarn:

```bash
yarn add get-hcf
```

## Usage

```js
const getHCF = require('get-hcf');

getHCF(40, 48); // 8
getHCF(12, 18); // 6
getHCF(7, 13);  // 1
```

## API

### `getHCF(a, b)`

| Parameter | Type     | Description              |
| --------- | -------- | ------------------------ |
| `a`       | `number` | A positive integer       |
| `b`       | `number` | A positive integer       |

**Returns:** `number` — the highest common factor of `a` and `b`.

## Testing

Tests use Node's built-in `assert` module and require no extra dependencies.

```bash
npm test
```

## License

ISC
