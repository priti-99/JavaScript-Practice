// **Impure Function

let a = 7;

function addNum(b) {
    console.log('The Sum is', a+b)
}
addNum(2);  
addNum(2);  // depend on external factor (ie variable = a);


// **Pure Function

function addNumber(a , b) {
    return a+b
    // console.log('The Sum is', a+b);   //side effect
}
console.log(addNumber(2, 3));

// A pure function is a function that will always return same result for the same set of arguments.