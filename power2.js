let no=16
let start=0;
let flag=0,i=1;
while(start<=no){
    start = Math.pow(2,i)
    if(start==no){
        flag=1    
    }
        i++
}
flag==0?console.log("Not power of 2"):console.log("Power of 2")