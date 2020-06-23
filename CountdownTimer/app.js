const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4'); //Returns all h4 under .deadline-format

let tempDate= new Date();
let tempYear= tempDate.getFullYear();
let tempMonth= tempDate.getMonth();
let tempdate= tempDate.getDate();

//No parameter in date returns current date
//let futureDate=new Date(2020,5,27,11,30,0); //Here the months they are 0 indexed base. Therefore jan = 0;Last 3 are time

//To keep the countdown set to ten days later ie keep the timer going
let futureDate=new Date(tempYear,tempMonth,tempdate+10,11,37,17);

const year= futureDate.getFullYear();
const hours = futureDate.getHours();
const mints = futureDate.getMinutes();

let month = futureDate.getMonth();//returns a number. So we use the months array 
month=months[month];
const date= futureDate.getDate();

let day= futureDate.getDay();
day= weekdays[day];
giveaway.textContent=`Giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}:${mints} am`

//future time in ms
const futureTime= futureDate.getTime();
//console.log(futureTime);

function getRemainingTime(){
  const today= new Date().getTime();
  const diff= futureTime-today;

  //values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute=60*1000;

  //Calculate all values
  let days= Math.floor(diff/oneDay);
  let hrs=Math.floor((diff % oneDay)/oneHour);
  let mints = Math.floor((diff%oneHour)/oneMinute);
  let secs = Math.floor((diff%oneMinute)/1000);

  //Set array values
  const values=[days,hrs,mints,secs];

  function format(item){
    if(item<10)
    return item=`0${item}`;
    else
    return item; 
  }

  items.forEach(function(item,index){
    item.innerHTML=format(values[index]);
  });
  if(diff<0){
    clearInterval(countdown);
    deadline.innerHTML= `<h4 class="expired">Giveaway expired!</h4>`
  }
}
//countdown

let countdown=setInterval(getRemainingTime,1000); // 1000 is time interval in ms
getRemainingTime();