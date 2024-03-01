for (let i = 1; i <= 10; i++) {
    // console.log(i);
    
};

for (let i = 1; i <= 10; i++) {
    // console.log(`table for: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);
        
    }
    
}

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        // console.log(`${i} will be detected and break keyword will throw control out of loop`);
        // break;
        continue; // continue will ignore i == 5 and continue its executing.
    }
    console.log(i);
    
}