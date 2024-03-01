// for of

const states = ["Meghalaya", "Nagaland", "Manipur"];
for (const state of states) {
    // console.log(state);
}

const string = "My State";
for (const character of string) {
    if(character == " "){
        // console.log("Space Detected.");
        continue;
    }
    // console.log(`Character is ${character}`);
}

// Maps
//holds as key value pairs an remembers the insertion order of keys.Must be unique
// don't take duplicate key.

const map = new Map();
map.set("Meghalaya", "Shillong");
map.set("Nagaland", "Kohima");
map.set("Manipur", "Imphal");

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key}'s capital is ${value}`);
}

// NOTE: for-of does not work on object.




