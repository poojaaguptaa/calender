
// Here is the JS of calender 


// date (variable) date from browser is stored

const date = new Date();

// renderCalender is a function in which whole calender is working

const renderCalender = () => {

// here the date is set to find the index number of day
date.setDate(1);
console.log(date.getDay());

// firstDayIndex variable is created (using const keyword) and the index number of day is stored in it
const firstDayIndex = date.getDay();

// here the array (months) is created and 12 months are in
const months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

// monthsDays variable is created  and the div(class name days) is get by using query selector method
const monthDays = document.querySelector(".days"); 

// (lastDay) date according to the index number of days in a month  
const lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();

// (prevLastDay) previous dates according to their respective days
const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

// (lastDayIndex) next dates of upcoming month with their respective days
const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0).getDay();
const nextDays = 7 - lastDayIndex - 1;

// here the values from array acoording month (h1 tag in html)
document.querySelector(".date h1").innerHTML = months[date.getMonth()];

// here the value of today date is print (p tag in html)
document.querySelector(".date p").innerHTML = new Date().toDateString();

// loops for months days 
let days = "";


// prev or last days
for(let x = firstDayIndex; x > 0;x--){
   days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
}


// here the today div is called and value is given using newDate()
for(let i = 1; i <= lastDay; i++){
   if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
   days +=`<div class="today">${i}</div>`   
   }else{
      days +=`<div>${i}</div>`
   }
   // x += 10 x = x + 10
  
} 

// nextDays variable and value is printed in div(next-date)
for(let j = 1; j <= nextDays; j++){
   // j++ means incremented by 1
   days += `<div class="next-date">${j}</div>`
   monthDays.innerHTML = days;   
}
}


// event listener is added to perv icon
document.querySelector(".prev").addEventListener('click',() =>{
   date.setMonth(date.getMonth() - 1)
   // -1 to go back to previous months
   renderCalender();
});


// event listener is added to next icon
document.querySelector(".next").addEventListener('click',() =>{
   date.setMonth(date.getMonth() + 1)
   //  +1 to go forward to next months
   renderCalender();
});

// global variable called
renderCalender();


