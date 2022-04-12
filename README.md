<p align="center">
    <img src="./hero.svg">
</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/node-test-performance?color=blue&style=flat-square">
    <img src="https://img.shields.io/bundlephobia/min/node-test-performance?color=red">
</p>

This project was make to test your node perfomance before you run your project.

## How to install with npm:

```bash
npm install node-test-performance
```

-   Node versions:
    -   [14.x.x](#node-v14)
    -   [16.x.x](#node-v16)

## Pi(π) test

```javascript
const { piTest } = require('node-test-performance');
// Runing with 8 decimal place
// Show the time and pi number
piTest(8);
// Wait this finish
```

## Node v14.x.x

| CPU                  | KEY | TIME       | CLOCK  |
| -------------------- | --- | ---------- | ------ |
| Ryzen 3 2200g        | 8   | 0m 37s 875 | 3.6GHz |
| Raspberry PI 3       | 8   | 6m 44s 009 | 1.4GHz |
| Intel Core I5-1135G7 | 8   | 0m 45s 736 | 2.4GHz |

## Node v16.x.x

| CPU           | KEY | TIME       | CLOCK  |
| ------------- | --- | ---------- | ------ |
| Ryzen 3 2200g | 8   | 0m 36s 561 | 3.6GHz |

## How to you can contibuinte with this project :)

After you makad test you can open a pull request here, and add the name of your CPU and time in List of the times. Less time more performace
