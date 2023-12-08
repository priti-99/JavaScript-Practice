// Promise : starting state -> Pending (Token system)

let fs = require("fs");
// async code
console.log("Before");

let promise = fs.promises.readFile("f1.txt");
console.log(promise);  // state -> pending

// fullfilled, settled
promise.then(function (data){
    console.log("" + data);
})

// Rejected
promise.catch(function (err){
    console.log (err);
})

// promise
console.log("After");