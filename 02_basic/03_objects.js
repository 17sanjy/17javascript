/* singleton in js : is a design pattern that tells us we can create only one insatnce of 
a class that can be acccessed globally. hwn we create an object with contrictor then only
singleton can be utilized that solves commonly problems to all components. If we create 
object with object literal then we cannot define singleton. */


const mySym = Symbol("Jaysan");
const str = "jam"

let userMe = {
    name: "Ironman",
    age: 24,
    [mySym]: "Hayword",
    "full Name" : "salar kumar singh",
    email: "ironman@marvel.com",
    location: "New York",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday"],
    [str]: "somejay"
}

// console.log((userMe.name));
// console.log((userMe["age"]));
// console.log(userMe["full Name"]);
// console.log(userMe[mySym]);
// console.log(userMe);

// Object.freeze(userMe); // it will freeze the object and cannot be altered afterwards.
userMe.name = "Spiderman"
// console.log(userMe);

userMe.greeting = function() {
    console.log("something");
}

userMe.greeting();

userMe.greetingTwo = function() {
    console.log(`My Name is ${this.name} and age is: ${this.age}`);
}
userMe.greetingTwo();

// this indicates same object reference.