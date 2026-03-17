// functions in js are called as first class citizens too
// functions can be assigned to a var too 
/*
let sum = function add(a,b){
    return a+b;
}
console.log(sum)
console.log(sum(1,2));
// when called via the var, it creates a scope  like "this" which is local to that function block alone
while the function is called and parameters are passed to the args


// nested functions TO DO -> [(5*4)-3]


function mul(a,b){
    return a*b;
}

function sub(a,b){
    return a-b;
}
console.log(sub(mul(5,4), 3));

// passing funcs as args to other funcs -> using a function by passing it as ARGS
//to call another function 
*/

function add(a,b){
    return a+b;
}

function div(a,b){
    return a/b;
}

function operationdeterminer(specificoperation, arg1, arg2) {
    return specificoperation(arg1, arg2);
}
console.log(operationdeterminer(div, 20, 5)); // this is a higher order function
console.log(operationdeterminer(add,1,4));

// we use that function to call the other defined functions 
// if the said function is not defined, then it will return no refernce found


// higher order function - any function which accepts one or more functions as its arguments or returns a function
