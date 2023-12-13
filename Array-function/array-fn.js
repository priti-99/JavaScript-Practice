// map, filter, reduce

// map 
let myArr = [5, 6, 7, 8, 9];

let newArr = myArr.map(function(x){
    return x*x
});

console.log(myArr);
console.log(newArr);


// filter
let filteredArr = myArr.filter(function(x){
    return x%2 ===0
});

console.log(filteredArr);


// Reduce
let sumArr = myArr.reduce(function(accumulator, x){
    return accumulator + x
} , 2);   // accumulator value

console.log(sumArr);