const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number"));
let i=0;
while(i<n){
    let k=1;
    while(k<=i){
        process.stdout.write("*")
        k=k+1;
    }
    console.log("")
    i=i+1;
}