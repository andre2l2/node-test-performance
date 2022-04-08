<p align="center">
    <img src="./hero.svg">
</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/node-test-performance?color=blue&style=flat-square">
    <img src="https://img.shields.io/bundlephobia/min/node-test-performance?color=red">
</p>

## How to install with npm:

```bash
npm install node-test-performance
```

# Pi(π) Test

### How to run:

```javascript
const { piTest } = require('node-test-performance');
// Runing with 8 decimal place
// Show the time and pi number
piTest(8);
```

### List of the times

| CPU                  | KEY | TIME       | CLOCK  |
| -------------------- | --- | ---------- | ------ |
| Ryzen 3 2200g        | 8   | 0m 37s 875 | 3.6GHz |
| Raspberry PI 3       | 8   | 6m 44s 009 | 1.4GHz |
| Intel Core I5-1135G7 | 8   | 0m 45s 736 | 2.4GHz |

# Factorial test

### How to run

```javascript
const { factorialTest } = require('node-test-performance');
// Show a time after make factorial
factorialTest(10);
```

| CPU                  | KEY | TIME       | CLOCK  |
| -------------------- | --- | ---------- | ------ |
| Ryzen 3 2200g        | 10  | 0m 10s 852 | 3.6GHz |
| Raspberry PI 3       | 10  | 1m 06s 756 | 1.4GHz |
| Intel Core I5-1135G7 | 10  | 0m 20s 972 | 2.4GHz |

### How you can contibuinte

After you makad test you can open a pull request here, and add the name of your CPU and time in List of the times. Less time more performace
