let arr=[5,12,7,18,3,20]
let result=arr.filter(num=>num%2===0).reduce((acc ,cElement)=>
    acc+cElement,0)
console.log(result);
