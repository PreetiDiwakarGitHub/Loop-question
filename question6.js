const prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter the number"));
let b = parseInt(prompt("enter the number"));
while(a<=b){
    if(a%7==0){
        console.log(a);
    }
    a=a+1;
}