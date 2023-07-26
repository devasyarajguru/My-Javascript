const arr = [4,6,8];

const myarr = arr.reduce((myaccumulator,currentValue) => 
{
    return myaccumulator + currentValue;
},3);

console.log(myarr);