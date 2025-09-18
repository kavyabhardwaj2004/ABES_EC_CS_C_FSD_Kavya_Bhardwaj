var a = 20;
let b = 30;
const pi = 3.14; 
console.log("Global Scope");
console.log("value of a:",a);
console.log("valure of b:",b);
console.log("valure of pi:", pi);

function callValues(a, b, pi) {
    console.log("Function Scope inside");
    console.log("value of a inside the function:",a);
    console.log("valure of b inside the function:",b);
    console.log("valure of pi inside the function:", pi);
}
callValues(a, b, pi);

