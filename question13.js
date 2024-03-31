const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number"));
let rev=0;
while(n>0){
    let a=parseInt(n%10);
    rev=rev*10+a;
    n=parseInt(n/10);
}
console.log(rev);