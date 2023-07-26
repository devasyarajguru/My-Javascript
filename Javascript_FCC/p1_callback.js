function displaysum(numbers, callback)
{
    let sum = 0;

    for(let i = 0; i < numbers.length; i++)
    {
        sum+=numbers[i];
    }

    callback(sum);
}

function mycallback(result)
{
    console.log("The sum is " + result);
}

const myarray = [1,2,3,4,6];

displaysum(myarray, mycallback);