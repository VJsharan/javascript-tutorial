var myname = "vijay"; 
function agefunc(){
    var age = 21; 
    function mydegree(){
        var degree = "CSE";
        console.log(degree);
        college();
        function college(){
            var clg = 'MCE';
            console.log(clg);
        }
    }
    console.log(age);
    mydegree();
}
agefunc();
console.log(myname);