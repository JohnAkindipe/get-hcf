const assert = require('assert');
const getHCF = require('./index');

// Common cases
assert.strictEqual(getHCF(40, 48), 8,  'HCF of 40 and 48 should be 8');
assert.strictEqual(getHCF(12, 18), 6,  'HCF of 12 and 18 should be 6');
assert.strictEqual(getHCF(100, 75), 25, 'HCF of 100 and 75 should be 25');

// Coprime numbers (HCF = 1)
assert.strictEqual(getHCF(7, 13), 1, 'HCF of two primes should be 1');
assert.strictEqual(getHCF(8, 9),  1, 'HCF of consecutive integers should be 1');

// One number is a multiple of the other
assert.strictEqual(getHCF(6, 36), 6,  'HCF when one divides the other should be the smaller');
assert.strictEqual(getHCF(15, 5), 5, 'HCF when one divides the other should be the smaller');

// Same number
assert.strictEqual(getHCF(7, 7),   7,  'HCF of equal numbers should be that number');
assert.strictEqual(getHCF(100, 100), 100, 'HCF of equal numbers should be that number');

// Argument order should not matter
assert.strictEqual(getHCF(48, 40), getHCF(40, 48), 'HCF should be commutative');
assert.strictEqual(getHCF(18, 12), getHCF(12, 18), 'HCF should be commutative');

console.log('All tests passed.');
