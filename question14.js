const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number"));
let i=1;
while(i<=n){
    if(n%i==0){
        console.log(i);
    }
    i=i+1;
}