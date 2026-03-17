/*
normal functions 

function add(a,b){
    return a+b;
}



// arrow funcs 
var add_func = (a,b) => a+b;
console.log(add_func(1,2))

// SYNTAX FOR ARROW FUNCS let/const/var func_name = (params..) => returnVALUE

// Point to note: let variables are not stored in global scope 

function veliya() {
    let greeting = "vanakkam da"; 

    function ullara() {
        // ullara is a closure function
        console.log(greeting + " function stuff");
    }

    // Changing the variable here will be reflected when x() is called
    // because ullara has a reference to the variable, not just a copy of the value.
    greeting = "hi bro"; 

    return ullara;
}
let greeting = "hi bro"
let x = veliya(); 
x(); 


// here ullara is a closure function, since it can access variables 
// which are even outside of its current local scope and remember them.
// Since there is a reference to the var <greeting>, even after its saved to x 
// it persists in memory and reflects the latest value from its lexical scope.
// Function + Lexical Scope == Closure
*/


function outer(){
    let count = 0;
    function inner(){
        count++
        console.log(count)
    }
    return inner
}

let newvar = outer()
newvar()
newvar()
newvar()
