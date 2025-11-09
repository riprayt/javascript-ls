let globalVar = 55; // global variable: declared outside of any function

function someFunc() {
    let localVar = 44 // local variable: declared inside a func
    console.log(localVar)
}

// console.log(localVar); // this will cause an error

if (true) {
    var varTest = 777;
}
// block example

{
    console.log("this is inside a block");
}


someFunc()
console.log(varTest) // var is not block-scoped, but only local to the function (or global) scope that the block resides between

let letVar;
var varVar;
const constVar = 3;

console.log(letVar, varVar, constVar);

// hoisting

