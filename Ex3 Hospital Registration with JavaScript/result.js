var Name_F = localStorage.getItem('Name_F');
var Name_L = localStorage.getItem('Name_L');
var Email  = localStorage.getItem('Email');
var Phone  = localStorage.getItem('Phone');
var DOB  = localStorage.getItem('DOB');
var Age  = localStorage.getItem('Age');
var Gender = localStorage.getItem('Gender');
var Marital = localStorage.getItem('Marital');
var Address = localStorage.getItem('Address');
var Addiction = localStorage.getItem('Addiction');

document.write("<h3 class='display_cont'>");
document.write("<a class='text_box'>Name:</a> "+Name_F+" "+Name_L);
document.write("<br><a class='text_box'>Email:</a>"+Email);
document.write("<br><a class='text_box'>Phone Number:</a>"+Phone);
document.write("<br><a class='text_box'>DOB:</a>"+DOB);
document.write("<br><a class='text_box'>Age: </a>"+Age);
document.write("<br><a class='text_box'>Marital Status: </a>"+Marital);
document.write("<br><a class='text_box'>Address:</a> "+Address);
document.write("<br><a class='text_box'>Addiction(s): </a>"+Addiction);
document.write("</h3>");


/* DIGITAL CLOCK */
function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime(); /* calling currentTime() function to initiate the process */