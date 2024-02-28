// Immediately Invoked Function Expresssion (IIFE)

// to avoid any mixup from global scope
// when we dont want to pollute this function from global scope we use iife
// it is untouched from global scope

(function one() {
    console.log("Something to Show");
})(); // to run two consecutive iife , note to put ";" after first iife

( (name) => {
    console.log(`${name}`);
})("Hello")