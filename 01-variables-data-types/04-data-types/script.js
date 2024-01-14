// String
const firstName = 'Nam';

// Number
const age = 19;
const temp = 99.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 9007199254740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Nam',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);
