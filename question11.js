const prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter the number"));
let b = parseInt(prompt("Enter the number"));
let p = parseInt(prompt("Enter the number"));
let q = parseInt(prompt("Enter the number"));
while(a<=b){
    if(a%p==0 && a%q!=0){
        console.log(a);
    }
    a=a+1;
}






