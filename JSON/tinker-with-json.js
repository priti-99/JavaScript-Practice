// JSON -> Format - Data store and data transmit

let fs = require("fs");
let buffer = fs.readFileSync("./example.json");
console.log(buffer);
console.log("````````````````````````````````");

let data = JSON.parse(buffer);
console.log(data);

// let data = require("./example.json");
// console.log(data);

// data GET -> parse or we can use require (direct);
// data ADD/Write -> push
// stringify -> to convert into string, so writeFileSync can access

data.push({
    "name" : "Deepali",
    "surname" : "bisht",
    "age" : 24,
    "isGirl" : true,
    "address" : {
        "city" : "nainital",
        "pincode" : 263132
    },
    "friends" : ["palu", "sneha", "muskan"]
})
let stringData = JSON.stringify(data);
fs.writeFileSync ("example.json", stringData);



