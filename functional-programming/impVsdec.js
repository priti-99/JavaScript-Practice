// Is the square of the number is even :

// Imperative way
const x = 5;
const xsquare = x*x;
let isEven;

if (xsquare %2 ===0){
    isEven = true;
}
else{
    isEven = false;
}
console.log(isEven);



// Declarative way

const isSquareEven = (x)=> ((x*x)%2 === 0 ? true : false)   // ternary operator (is : else)
console.log(isSquareEven(4));