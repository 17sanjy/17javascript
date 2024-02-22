// console.log("2" > 1); // true
// console.log("02" > 1); // true
// console.log(null > 0); // false
// console.log(null < 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// the reason is that the equality check(==) and comparison check(>, <, >=, <=) work diffrently
//that is why null >= 0 become true because comparison converts null to number 0 .

// == consider the value of same datatype whereas in === strictly check data types of both the value
// console.log("2" == 2); // true
// console.log("2" === 2); // false

// ********************* DATA TYPES SUMMARY ***********************

/* javascript is dynamically typed language whiich means data types of variables are determined
by thevalu they hold at the runtime and can be changed later */

// Primitive(call by value)

// Number, String, Boolean, Null, Undefined, Symbol, BigInt

//Non-primitive(call by reference)

// Object, Array, Functions