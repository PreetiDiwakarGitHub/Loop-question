const prompt = require("prompt-sync")();
let n = parseInt(prompt("inter the number"));
let  i=1;
let sum=0;
while(i<=n){
    if(i%2==0){
        sum = sum+i;
    }
    i=i+1;
}
console.log("Sum of even number=",sum);
