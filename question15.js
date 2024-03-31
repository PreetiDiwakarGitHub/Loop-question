const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number"));
let i=1;
while(i<=n){
    let j=1;
    let c=0;
    while(j<=i){
        if(i%j==0){
            c=c+1;
        }
        j=j+1;
    }
    if(c==2){
        console.log(i);
    }
    i=i+1;
}


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/PreetiDiwakarGitHub/Loop-question.git
// git push -u origin main