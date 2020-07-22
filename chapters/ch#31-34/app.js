// CHAPTER NO # 31-34 DATE METHODS


//QUESTION NO#01:
//Write a program that displays current date and time inyour browser.


//ANSWER:

//var rightNow = new Date();
//document.write(rightNow);

//QUESTION NO#02:

//Write a program that alerts the current month in words.For example December.

//ANSWER:

//var month = new Array();
  //month[0] = "January";
 // month[1] = "February";
 // month[2] = "March";
 // month[3] = "April";
 // month[4] = "May";
 // month[5] = "June";
 // month[6] = "July";
 // month[7] = "August";
 // month[8] = "September";
 // month[9] = "October";
 // month[10] = "November";
 // month[11] = "December";

 // var d = new Date();
 // var n = month[d.getMonth()];
 // document.write('Current Month:' +n);


//QUESTION NO#03:
//Write a program that alerts the first 3 letters of the currentday, 
//for example if today is Sunday then alert will show Sun.

//ANSWER:

//var d = new Date();
//  var weekday = new Array(7);
//  weekday[0] = "Sun";
//  weekday[1] = "Mon";
//  weekday[2] = "Tue";
//  weekday[3] = "Wed";
//  weekday[4] = "Thu";
// weekday[5] = "Fri";
// weekday[6] = "Sat";

// var n = weekday[d.getDay()];
// document.write('Today is:' + n);

  //QUESTION NO#04:
 // Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

  //ANSWER:
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "It’s Fun day";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "It’s Fun day";

  var n = weekday[d.getDay()];
  document.write(n);




  //QUESTION NO#05:
  //Write a program that shows the message “First fiftee days of the month” if the date is less than
 //16th of the month else shows “Last days of the month”.

 //ANSWER:

 