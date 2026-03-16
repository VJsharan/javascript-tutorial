/* 
let data = {
    name: "vijay",
    age: 20,
    gender: 'M',
    isstudent: true
};

console.log(data);
console.log(typeof (data));
console.log(data.name);        //two ways to print its content
console.log(data['age']);

// this is how to declare an object and print its content 


// pass by value 


let x = 10; 
let y = x; 
x = "vijay"

console.log(x); //vijay
console.log(y); //10
// this is cuz the value of x is copied to y not its reference 

// pass by reference 

let a = {college :'mce'};
a.college = 'harvard';
let b = a;
console.log(a); //harvard
console.log(b); //harvard
// here its cuz the reference or memory address is copied to b not the value 
// so both becomes harvard


some reference types are objects, arrays, functions 


function sayhello(){
    var x = "vijayy";
    console.log("hi "+x);
    console.log("hi "+  y);
}
let y = "sharan";
sayhello();

// here what happens is that if there is x or y in the function, it will first
 check it if within the function, if not there na then it goes outside 
 the scope, 
 so ie x > y in terms of priority since x is local
this is called as LEXICAL SCOPE
 */

