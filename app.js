
// Chap 38-42
// QUESTION 01
function power(x,y)
{
        var result = 1;
        for (var i =1; i <= y; i++)
        {
                result = x * result;        
        }
        return result;
}
x=+prompt("Enter base value ");
document.write("The base value is: "+x+"<br>");
y=+prompt("Enter exponent ");
document.write("Exponent is: "+y+"<br>");
document.write("Answer is: "+power(x, y)+"<br>");

// QUESTION 02

function leapyear(a) {
    if ((a % 100 === 0) || (a % 400 === 0) || (a % 4 === 0)) {
        alert("This year is a leap Year");
    }
    else {
        alert("This year is not a leap year");
    }
    return a;
}
var b = +prompt("Enter year " + "");
leapyear(b);

// QUESTION 03

var x=+prompt("enter length of first side of triangle");
var y=+prompt("enter length of second side of triangle");
var z=+prompt("enter length of third side of triangle");
function s(s){
    s=(x+y+z)/2;
    return s;
}
var k=s(s);
function areaOfTriangle(x,y,z){
var x=k-x;
var y=k-y;
var z=k-z;
var area=Math.sqrt(k*x*y*z);
document.write("Area of triangle is: "+area+"<br>");
return area;

}
var h=areaOfTriangle(x,y,z);


// QUESTION 04

function calculateavg(i,j,k){
    var avg=(i+j+k)/3;
    return avg;
}
function calculatepercent(avg,total){
    var percent=(avg/total)*100;
    return percent;
}
function main(){
    var a,b,c,total;
    var av,per;
   a= +prompt("Enter the marks received by the student in 1st subject");
   b= +prompt("Enter the marks received by the student in 2cnd subject");
   c= +prompt("Enter the marks received by the student in 3rd subject");
total=+prompt("Enter total possible marks for 1 paper");
var g=calculateavg(a,b,c,av);
var h=calculatepercent(g,total);
alert("The average marks is: "+g);
alert("The total percentage is: "+h+"%");
}
main();

// QUESTION 05

  function indexOf(string, character) {
    var i=0;
    while(i < string.length){
        if(string[i] == character){  
                      return i
        }
        i++                       
    }
    return -1;         
}
var string=prompt("Enter any string ");
  var character=prompt("Enter character to find its index ");
document.write( "The character you entered is at index: "+indexOf(string, character)+"<br>");

// QUESTION 06

function remove(string) {
    if (string.length > 25) {
        alert("Please enter string length between 1 to 25 alphabets including spaces ");
    }
    else { 
  document.write(string+"<br>");
    var arr1 = string.split("");
    var reg = /[aeiou]/ig
    var arr2 = string.match(reg);
    var noVowels = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            noVowels.push(arr1[i]);
        }
    }
   document.write(noVowels.join("")+"<br>");
}
}
string = prompt("Enter string");
remove(string);

// QUESTION 07

function findOccurrences() {
  var count = 0;
   vowelAvailable = false;
  for (const letter of string.toLowerCase()) {
    switch (letter) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
        {
          if (vowelAvailable) {
            count++;
            vowelAvailable = false;
          } else {
            vowelAvailable = true;
          }
          break;
        }
      default:
        vowelAvailable = false
    }
  }
  return count
}
var string = prompt("enter string")
document.write(findOccurrences(string)+"<br>");

// QUESTION 08

function convertMeters(km){
var m=km*1000;
return m;
}
function convertFeets(m){
    var f=m*3.28;
    return f;
}
function convertInches(f){
    var i=f*12;
    return i;
}
function convertCentimeters(i){
    var c=i*30;
    return c;
}
km=+prompt("Enter distance between two cities in km");
var n=convertMeters(km);
document.write("distanc between two cities in meters are: "+n+"meters <br>");
var n=convertFeets(n);
document.write("distanc between two cities in feets are: "+n+"feets <br>");
var n=convertInches(n);
document.write("distanc between two cities in inches are: "+n+"inches <br>");
var n=convertCentimeters(n);
document.write("distanc between two cities in centimeters are: "+n+"centimeters <br>");

// QUESTION 09
var overtimePay=0;
var overTime;
    var timeWorked=+prompt("enter the time employee worked in hour");
if(timeWorked>40){
    overTime=timeWorked-40;
    overtimePay=overtimePay+(12*overTime);
}
document.write("Total Overtime Pay  Is: "+overtimePay+"rupees<br>");


// QUESTION 10
function currencyDenomination() {
    var cash = +prompt("Enter amount to withdraw: ");
    var hundred =parseInt(cash / 100);
    var fifty = parseInt((cash-(hundred*100)) /50);
    var ten =parseInt( (cash-(hundred*100)-(fifty*50))/10 );
document.write("You will have "+hundred+" hundred notes "+fifty+" fifty notes "+ten+" ten notes and <br>")
}
currencyDenomination();



// CHAPTER 43-48
//   QUESTION # 03
function dltRow() {
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}

//   QUESTION # 04

function beforeImage(){
document.getElementById("image").src="images/11.jpg";
}
function afterImage(){
document.getElementById("image").src="images/3.jpg";
}
//   QUESTION # 05
function increaseValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
function decreaseValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
}
document.write("<hr>");
// CHAPTER 49-52
// QUESTION # 01
function data(){
    var name = document.getElementById("name").value;
    display_name.innerHTML = name;
}
// QUESTION # 02
 function seemore() {
     var listToPlace = "<ul><li>RAM : 04 GB</li><li>Core i5</li><li>15.6 inches</li><li>Full HD</li><li>optional ssd</li></ul>";
      document.getElementById("delldetails").innerHTML = listToPlace;
 }
    // QUESTION # 03


        // CHAPTER 52-57

        document.write("<hr>");
// CHAPTER 52-57
document.write("<hr>");
// QUESTION 01
function showImage(a){
var modalImage=document.getElementById('modalImage');
modalImage.src=a.src
}

// QUESTION 02
var fontSize = 1;
function zoomIn() {
	fontSize += 0.1;
	document.body.style.fontSize = fontSize + "em";
}

document.write("<hr>");

// CHAPTER 58-67
document.write("<hr>");

// QUESTION 01
// Q: i
document.write("<hr>");
var main=document.getElementById('main-content')
 // Q: ii
var render=console.log(main.childNodes)
// Q: iii
var show=main.getElementsByTagName('p')
var content =console.log(show[0].innerHTML)
document.write(show[0].innerHTML+"<br>")
document.write(show[1].innerHTML+"<br>")
document.write(show[2].innerHTML+"<br>")
document.write(show[3].innerHTML+"<br>")
document.write(show[4].innerHTML+"<br>")
var firstname=document.getElementById('first-name').value ="Sakina"
var lastname = document.getElementById('last-name').value ="Zahra"
var type=document.getElementById('form-content').nodeType;
document.write(type+"<br>");

var lasttype = document.getElementById('lastName').nodeType
document.write(lasttype+"<br>")
var lasttype = document.getElementById('lastName').childNodes[0].nodeType
document.write(lasttype+"<br>")

var lasttype = document.getElementById('lastName').childNodes[0].value="update value"
document.write(lasttype+"<br>")

var getfirst=document.getElementById('main-content').firstChild
document.write(getfirst+"<br>")
var getlast=document.getElementById('main-content').lastChild
document.write(getlast+"<br>")
var lname=document.getElementById('lastName')
var nsibling=lname.nextSibling
document.write(nsibling+"<br>")
var psibling=lname.previousSibling
document.write(psibling+"<br>")
var mail=document.getElementById('email')
var mtype=mail.nodeType
document.write(mtype+"<br>")
var pnode=mail.parentNode
console.log(pnode+"<br>");
document.write("<hr>")