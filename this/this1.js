// **This keyword in node with non Strict mode**

// console.log(this)  //-> Returns an empty object


function showThis(){
    console.log(this)
}
showThis();  // Returns global object with function



let object ={
    name : 'adam',
    age : 34,
    f : function(){
        console.log(this)
    }
}
object.f();  // Returns Object itself (object-function)


let object1 ={
    name : 'adam',
    age : 34,
    f : function(){
        function g(){
            console.log(this)
        }
        g();
    }
}
object1.f(); // Returns Global object (object-function-function)