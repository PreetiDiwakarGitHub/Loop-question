const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number"));
let i=1;
let sum=0;
while(i<=n){
    let a=1/i;
    sum =sum+a;
    i=i+1;
}
console.log(sum);