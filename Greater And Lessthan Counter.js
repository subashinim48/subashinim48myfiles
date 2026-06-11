let arr=[12,5,8,3,15,6,2]
let count=0;
for(let i=0;i<arr.length;i++){
    if((arr[i]>10 || arr[i]%2===0) && (arr[i]<15)){
        count++
    }
}
console.log(count);
