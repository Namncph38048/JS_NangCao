const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

// Lấy tổng
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// Lấy hiệu
const diff = x - y;
const diffOutput = `${x} - ${y} = ${diff}`;
console.log(diffOutput);

// lấy tích
const prod = x * y;
const prodOutput = `${x} * ${y} = ${prod}`;
console.log(prodOutput);

// Lấy thương
const quot = x / y;
const quotOutput = `${x} / ${y} = ${quot}`;
console.log(quotOutput);

// lấy %
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput);
