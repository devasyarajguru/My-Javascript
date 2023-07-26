const arr = [1,2,3,4,5];

const reducearr  = arr.reduce((accumulator,currentvalue) => {
    return accumulator + currentvalue;
}, 1);


console.log(reducearr);