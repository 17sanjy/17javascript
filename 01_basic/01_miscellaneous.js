console.log("2" > 1); // true
console.log("02" > 1); // true
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// the reason is that the equality check(==) and comparison check(>, <, >=, <=) work diffrently
//that is why null >= 0 become true because comparison converts null to number 0 .

// == consider the value of same datatype whereas in === strictly check data types of both the value
console.log("2" == 2); // true
console.log("2" === 2); // false

// ********************* DATA TYPES SUMMARY ***********************

/* javascript is dynamically typed language whiich means data types of variables are determined
by thevalu they hold at the runtime and can be changed later */

// Primitive(call by value)

// Number, String, Boolean, Null, Undefined, Symbol, BigInt

//Non-primitive(call by reference)

// Object, Array, Functions

// ****************************************************************************************

// Heap and Stack Memory

// All the Primitive(call by value) data types get stored in stack memory whenever same variable
// with different value is created, it make a new memoryspace for it in the stack and does not 
//change the original value.

let someNumber = 200;
let anotherNumber = someNumber;
anotherNumber = 100;

console.log(someNumber);
console.log(anotherNumber);

// Non-Primitive(Reference)

// All the Non-Primitive(Reference) data types get stored in the Heap Memory and whenever a new 
// value is inserted to the same variable it will replace the original value with the latest value
// as in Heap memory the variable get a space by reference.

let obj = {
    name: "Sanjay",
    age: 20
}

let anotherObj = obj;
anotherObj.name = "Shandilya"

console.log(anotherObj);
console.log(obj);