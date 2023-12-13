// Arrays
// arr = [];

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);
console.log(array.length);  //Length of an Array
 let i = 0;
 while (i < array.length){
    console.log("Element at index", i, "is", array[i]);
    i++;
 }

//  PUSH, UNSHIFT (Add Value)

 array.push("last value");
 array.unshift("first value");
 console.log(array)
 console.log("```````````````````````");

//  POP, SHIFT (Remove Value)

array.pop();
array.shift();
console.log(array);
console.log("```````````````````````");

// slice

let partOfAnArray = array.slice(2,4);
console.log(partOfAnArray);
let partOfAnArray1 = array.slice(2);
console.log(partOfAnArray1);

// splice (Delete)

array.splice(2,3);
console.log(array);

// index of 
// contain