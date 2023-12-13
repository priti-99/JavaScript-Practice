// function scope -> if any variable is define under function so we can not access that variable outside the function.

function calculate (a, b){
    let result = a+b
    return result
}
console.log(calculate(6,7));
// console.log(result)  // getting error



// lexical scope -> if declare any variable under parent function, child function can access that variable

function add(){
    let a = 4

    function addChild(){
        console.log(a + 5);
    }
    addChild();
}
add();



// closure -> A function always bundled with its lexical scope forms a closure

function add(){
    let a = 4

    function addChild(){
        console.log(a + 5);
    }
    return addChild
}
add();

let catchAdd = add();
console.log(catchAdd);
catchAdd();
