let name = "sanjay";
let age = 20;
// console.log(`username is ${name} and his age is ${age}`);

let  userName = new String("The-quick-brown-fox");
let regex = /[A-Z]/g;
// console.log(userName);
// console.log(userName.match(regex));

// console.log(userName.charAt(3));
// console.log(userName.indexOf('y'));
// console.log(userName.length);
// console.log(userName.endsWith('y'));
// console.log(userName.startsWith('s'));
// console.log(userName.includes('jay'));
// console.log(userName.at(-7));
// console.log(userName.slice(-4, 2));
// console.log(userName.trim(userName));

let character = "sanjay-shandilya-kumar";
// console.log((character.split("-", 2)));

let trimChar = "sanjayshandliyakumar"
let trimChar2 = "       sanjayshandliyakumar      ";

// console.log(trimChar);
// console.log(trimChar2.trim());



// Using slice, create newCar from myCar.
const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
  };
  const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
  const newCar = myCar.slice(0, 2);
  
  console.log("myCar =", myCar);
  console.log("newCar =", newCar);
  console.log("myCar[0].color =", myCar[0].color);
  console.log("newCar[0].color =", newCar[0].color);
  
  // Change the color of myHonda.
  myHonda.color = "purple";
  console.log("The new color of my Honda is", myHonda.color);
  
  console.log("myCar[0].color =", myCar[0].color);
  console.log("newCar[0].color =", newCar[0].color);
  