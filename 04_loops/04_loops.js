// for-in (object)

const myStates = {
    Maghalaya: "Shillong",
    Nagaland: "Kohima",
    Manipur: "Imphal"
};

for (const state in myStates) {
    // console.log(` state ${state} and capital is ${myStates[state]}`);
}

//
const stateArray = ["Meghalaya", "Nagaland", "Manipur"];

for (const state in stateArray) {
    // console.log(stateArray[state]); // values
    // console.log(state); // return 0,1,2 as key index
}

// Note: for-in does not work on maps like for-of does.
