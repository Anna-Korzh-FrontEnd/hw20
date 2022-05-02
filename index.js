
require('./index.js')
// app/index.js

const calc = require('./calc');

console.log(calc.object.set(10))
console.log(calc.object.add(2)); // 12
console.log(calc.object.sub(5)); // 7
console.log(calc.object.mult(4)); // 28
console.log(calc.object.div(2)); // 14

