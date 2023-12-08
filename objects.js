//objects
// group of key : value pair,
// key : value -> property
// key : function -> method

let cap = {
    name : "Virat",
    age : 35,
    wife : "Anushka",
    address : {
        state : "UP",
        city : "Noida",
        pincode : 201301
    },
    friends : ["dhoni", "yuvi", "chahal"],
    sayHi : function() {
        console.log("cap says Hello");
    }
}
//  Get
console.log(cap.name);
console.log(cap.address);
console.log(cap.sayHi);

// SET/UPDATE
cap.age = 36;
cap.match = ["IPL", "WC"];
console.log(cap);
console.log(",,,,,,,,");

// DELETE
delete cap.wife;
delete cap.address;
console.log(cap);

let propkey = "age";
console.log(cap.age);  // . search direct as a value 
console.log(cap[propkey]); // first search the value which is in the square bracket
