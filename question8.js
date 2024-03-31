let i=1;
let count=0;
let sum=0;
while(count<9){
    if(i%3==0){
        let a=i*i;
        sum=sum+a;
        count= count+1;
    }
    i=i+1;
}
console.log(sum);
