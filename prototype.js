// Prototype

Array.prototype.myfunction = function(){
    console.log(this)
}

let arr = [2,3,5,7,8]
arr.myfunction();
console.log("`````````````````````````````````````````````")



// Pollyfills of Map

Array.prototype.myMap = function(cb){   //cb = callback
    let newArr = []
    for(let i=0; i<this.length; i++){
        newArr.push(cb(this[i]))
    }
    return newArr
}
function square(x){
    return x*x
}
let mappedArr = arr.myMap(square)
console.log(mappedArr);