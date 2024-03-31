const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number"));
let sum=0;
while(n>0){
    let a = parseInt(n%10);
    sum=sum+a;
    n=parseInt(n/10);
}
console.log("sum",(sum));