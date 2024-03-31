const prompt = require("prompt-sync")();
let n = parseInt(prompt("enter the number"))
let i=1;
let product=1;
while(i<n){
     product = product*i;
     i=i+1;
}
console.log("Product=",product);