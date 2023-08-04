const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate()
{

// for seconds
const curdate = new Date();
const sec = curdate.getSeconds(); 
const SecondDegree = ((sec/60) * 360) + 90;
secondHand.style.transform = `rotate(${SecondDegree}deg)`;

// for minutes
const curmin = new Date();
const min = curmin.getMinutes(); 
const MinuteDegree = ((min/60) * 360) + 90;
minHand.style.transform = `rotate(${MinuteDegree}deg)`;

// for Hour
const curhour = new Date();
const hour = curmin.getHours(); // for hours
const HourDegree = ((hour/60) * 360) + 90;
hourHand.style.transform = `rotate(${HourDegree}deg)`;

}

setInterval(setDate,1000);





