const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number"));
let i=2;
while(i<=n){
    let sum=0;
    let j=1;
    while(j<i){
        if(i%j==0){
            sum=sum+j;
        }
        j=j+1;
    }
    if(i==sum){
        console.log(i);
    }
    i=i+1;
}
