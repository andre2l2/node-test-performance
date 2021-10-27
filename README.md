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

## PiTest

### How to run:

```javascript
const piTest = require('node-test-performance');
// runing with 8 decimal place
// Show the time and pi number
piTest(8);
```

### How to contibuinte

After your tast, you can open a pull request, added to name your CPU and time, and added in List of the times. Less time more performace

### List of the times

| CPU            | DECIMAL PLACE | TIME       | CLOCK  |
| -------------- | ------------- | ---------- | ------ |
| Ryzen 3 3200g  | 8             | 0m 37s 875 | 3.6GHz |
| Raspberry PI 3 | 8             | 6m 44s 009 | 1.4GHz |

## Factorial test

### How to run

```javascript
const factorialTest = require('../src/factorial.performace');
// Show a time after make factorial
factorialTest(10);
```

| CPU           | KEY | TIME       | CLOCK  |
| ------------- | --- | ---------- | ------ |
| Ryzen 3 3200g | 10  | 0m 10s 852 | 3.6GHz |
