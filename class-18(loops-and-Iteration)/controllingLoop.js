
// /  Controlling Loops with break(stop) and continue(skip)

// stop when a number equals 3
for (let i  = 1; i <= 5 ; i++) {

    if(i === 3) continue;
    console.log(i)
}

// 1
// 2
// 4
// 5


const fruits = ["Apple", "Banana", "Cherry", "Strawberry"];

for(let i = 0; i<fruits.length; i++){

       if (fruits[i]==="Cherry")break; 
     console.log(fruits[i]);
}

// Apple
// Banana