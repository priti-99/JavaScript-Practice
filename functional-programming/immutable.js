const person1 = {
    name : 'Adam',
    age : 34
};
// const person2 = person1 // Mutable code

// Immutable
// const person2 = Object.assign({}, person1)  // object.assign({empty string}, value) 
const person2 = {...person1}  // or using spread operator


person2.name = 'Steve';

console.log(person1)
console.log(person2)
