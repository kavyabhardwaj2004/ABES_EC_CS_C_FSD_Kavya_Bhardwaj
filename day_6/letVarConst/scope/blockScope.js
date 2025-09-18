{
var a = 20; 
let b = 30;
const pi = 3.14; 
console.log("Global Scope");
console.log("value of a:",a);
console.log("value of b:",b);
console.log("value of pi:", pi);
}

    console.log("Outside Block");
    console.log("value of a outside the function:",a);
    console.log("valure of b outside the function:",b); //error
    console.log("valure of pi outside the function:", pi);  //error
