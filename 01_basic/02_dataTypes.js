"use strict"  // to make older version compatible with newer version.

/* 
by usinfg datatypes we specifies the intances a place to store data in the memory

There are 8 types of data in js among those 7 are premitive data Types.

1. Number - whole number 123,
2. BigInt - large number 1234........n,
3. String - set of characters "Sanjay",
4. Null - special standalone value but type of Object,
5. undefined - declared but not initialized,
6. Boolean - True/False,
7. Symbol - for uniqueness and it is mutable only

8. Object // Non-Premitive
*/

// let value = 24;
// let negValue = -value;
// console.log(negValue);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.