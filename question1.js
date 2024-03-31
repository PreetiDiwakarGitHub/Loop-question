const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number"));
let i=1;
let sum=0;
while(i<=n){
    sum=sum+i;
    i=i+1;
}
console.log(sum);