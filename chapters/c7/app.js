#Q No 07
 GUESS  GAME 
 var secretNumber=7;
 var guess=+prompt("Guess a number between 1-10");
 if(guess==secretNumber){
     document.write("Bingo!");
 }
 else if(guess==(secretNumber+1)){
   alert("Close enough to the correct answer.");
 }
 else{
     alert("You did'nt guess the right number");
 }

 #Q No 08
 #DIVISIBLE BY 3

var divisible_3=+prompt("Enter a number");
 if(divisible_3%3===0){
     alert(divisible_3+" is divisible by 3");
 }
 else{
     alert(divisible_3+" is not divisible by 3.");
 }

#Q No 09
 var check_number=+prompt("Enter any number to check it is even or odd.");
 if(check_number%2==0){
     alert(check_number+" is an even number.");
 }
 else{
     alert(check_number+" is an odd number.");
 }

 #Q No 10

 var temprature=+prompt("Enter today's temprature");
 if(temprature > 40){
     alert("Its too hot outside.");
 }
 else if(temprature > 30){
     alert("The Weather today is normal.");
 }
 else if(temprature > 20){
     alert("Today's Weather is cool.");
 }
 else if(temprature > 10){
     alert("OMG! Today's weather is so Cool.");
 }
 else{
     alert("ohh! its so cool");
 }

 #Q No 11

 var first_number = +prompt("Enter first number.");
 var operator = prompt("Enter Operator");
 var second_number = +prompt("Enter second number.");
 if (operator === '+') {
     alert(first_number + second_number);
 }
 else if (operator === '-') {
     alert(first_number - second_number);
 }
 else if (operator === '*') {
     alert(first_number * second_number);
 }
 else if (operator === '/') {
     alert(first_number / second_number);
 }
 else if(operator===  '%'){
     alert(first_number % second_number);
 }
 else{
     alert("Enter operators between + , - , * , / , %");
 }
