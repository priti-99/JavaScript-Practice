// Strings

let singleQuotes = '   Hello! How are you ?   '
let doubleQuotes = "Hello! How are you ?"

console.log(singleQuotes);

let char = singleQuotes.charAt(4);
console.log(char);

let ascii = singleQuotes.charCodeAt(4);  //ascii code
console.log(ascii);

let substr = singleQuotes.substring(2, 8);
console.log(substr);

// split (separator)

let arrstr = doubleQuotes.split("H");
// let arrstr = doubleQuotes.split(" ");
console.log(arrstr);

// join

let arrstr1 = arrstr.join("+");
console.log(arrstr1);

// trim (remove spaces from starting and ending)

singleQuotes = singleQuotes.trim();
console.log(singleQuotes);