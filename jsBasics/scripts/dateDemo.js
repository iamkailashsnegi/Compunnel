// Question 1

// function today(x){  
//  var givenDate  = new Date(x)
// var currentDay = givenDate.getDay();
// var dateIsInWeekend = (currentDay === 6) || (currentDay === 0);
// if(dateIsInWeekend==true){
//    console.log("Weekend");
// } else {
//    console.log("Not Weekend");
// }
// }

//Question 2

// const date1 = new Date('12/13/2010');
// const date2 = new Date('12/15/2010');
// const diffTime = Math.abs(date2 - date1);
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// console.log(diffTime + " milliseconds");
// console.log(diffDays + " days");

//Question 3

// var is_date = function(input) {
//     if ( Object.prototype.toString.call(input) === "[object Date]" ) 
//       return true;
//     return false;   
//       };
//   console.log(is_date("October 13, 2014 11:13:00"));
//   console.log(is_date(new Date(86400000)));
//   console.log(is_date(new Date(99,5,24,11,33,30,0)));
//   console.log(is_date([1, 2, 4, 0]));

//Question 4

// function diff_to_GMT(dt) 
// { 
//    return (-dt.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(dt.getTimezoneOffset() / 60)) + '00';
// }
// dt = new Date(); 
// console.log(diff_to_GMT(dt)); 
// dt = new Date(1990, 10, 1); 
// console.log(diff_to_GMT(dt));

//Question 5

// var dob = new Date("06/24/2008");    
// var month_diff = Date.now() - dob.getTime();  
// var age_dt = new Date(month_diff);        
// var year = age_dt.getUTCFullYear();   
// var age = Math.abs(year - 1970);  
// console.log("Age of the date entered: " + age + " years");
