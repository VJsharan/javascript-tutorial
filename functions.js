/*
// creating a func and passing values to it 
function greet(name) {
    console.log("hello my name is " + name);
}

// calling the function 
greet("vijay");
greet("arun mozhi");

 
// in js the functions can be called before it is defined too 

print("name"); // this can be done

function print(name) {
    console.log(name);
}

// similarly the variables can also be printed or accessed before they are declared 
// but it will lead to those variables being undefined

console.log(age); //undefined

let age = 12; // undefined -> number (datatype)

console.log(typeof(age))


hoisting - memory is allocated to vars before it is being initialized
temporal dead zone - is the period when the var is unavailable in its scope before its undefined and then goes on to be initialized



meaning here 
a and c cant be accessed before they are declared 
but b can be, and it will return undefined when accessed 


also vars are in global scope while rest 2 are block scope (accessed only within their block)
{
    let a = "vijay";
    var b = 12;
    const c = 4;
}

a block is anything within {}
console.log(a); //throws error 
console.log(b); //12 
console.log(c); //throws error


whereas this works without any problem 
cuz they are in the same damn block

 
{
    let a = "vijay";
    var b = 12;
    const c = 4;
    console.log(a); //throws error 
    console.log(b); //12 
    console.log(c);
}
*/

