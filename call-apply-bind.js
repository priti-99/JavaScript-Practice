// Call, apply and Bind function

let person1 = {
    name : 'Adam',
    age : 24
}


let person2 = {
    name : 'Steve',
    age : 26
}


// let showDetails = function(){
//     console.log(this.name + "is" + this.age + "years old");
// }

let showDetails = function(city, car){  // call function with external arguments
    console.log(`${this.name} is ${this.age} years old, he lives in ${city} and he drives ${car}`);
}



showDetails.call(person1, "delhi", "BMW");  // call function
showDetails.call(person2, "Assam", "Audi");
console.log('```````````````````````````````````````````````````');


showDetails.apply(person1, ['delhi', 'BMW']);  // apply function
showDetails.call(person2, ['Assam', 'Audi']);
console.log('```````````````````````````````````````````````````');
// The only difference in apply function is -> we have to provide external arguments in array form


let showDetailsBind = showDetails.bind(person1, 'delhi', 'BMW');  // Bind function
showDetailsBind();
// Bind -> It stored the function as a bound function, and whenever need call the function