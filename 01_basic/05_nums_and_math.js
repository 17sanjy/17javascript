let score = 400;  // automatically assume to bea number
// console.log(score);

let account = new Number(499); // we explicitly put a number type

// console.log(account);

// we can convert a number to a string and perform all operation of string.
// console.log((account.toString().length));

// it return with 2 decimal points after the integer 100.00
// console.log((account.toFixed(2)));

let number = 10000000000;

// console.log(number.toPrecision(3));

// to better visibilty of vast number of zeros that looked ugly while counting
// console.log(number.toLocaleString());

// +++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-7));
// console.log(Math.ceil(4.10));
// console.log(Math.floor(4.99));
// console.log(Math.round(4.5));
console.log(Math.random() * 10 + 1);