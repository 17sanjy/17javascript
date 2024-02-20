// we cant assign a value to a variable declared by const keyword.
const userId = 1234;

// prefer not to use because of the issues in block scope and functionl scope.
var emailId = "jai@mahakal.com";

// it has block scope and the value can be changed.
// let declaration declares reassignable, redeclarable block scoped local variable.
let userPassword = "12347890";
userPassword = "2222222"

/* (please dont wwrite like this , it wont throw an error but there is a reason why we
use let and const) */
placeToworship = "Mandir";

// in let we can reassign the value but not re-declare the same variable name
let humanity;

console.table([userId, emailId, userPassword, placeToworship, humanity]);

