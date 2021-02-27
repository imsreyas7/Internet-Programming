/* MARITAL STATUS */
function marStatus() 
{
  var x = document.getElementById("Marital").value;
  document.getElementById("mStatus").innerHTML = "You are " + x;
}


/* DRAG AND DROP */
document.addEventListener('dragstart', function (event) 
{
      event.dataTransfer.setData('Text', event.target.innerHTML);
});


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


/* SUBMIT TO ANOTHER PAGE */
var Name_F,Name_L,Email,Phone,DOB,Age,Gender,Marital;
var Address,Addiction;

document.getElementById("patient_form").addEventListener('submit', function (e) {
      //prevent the normal submission of the form
      e.preventDefault();
      Name_F = document.getElementById("Name_F").value;
      Name_L = document.getElementById("Name_L").value;
      Email = document.getElementById("Email").value;
      Phone = document.getElementById("Phone").value;
      DOB = document.getElementById("DOB").value;
      Age = document.getElementById("Age").value;
      var Genders = document.getElementsByName('selector2');
      console.log(Genders[0]);
      for(var i = 0; i < Genders.length; i++)
      {
          if(Genders[i].checked)
          {
              Gender = Genders[i].value;
              break;
          }
      }
      Marital = document.getElementById("Marital").value;
      Address = document.getElementById("Address").value;
      Addiction = document.getElementById("Addiction").value;

      localStorage.setItem("Name_F",Name_F);
      localStorage.setItem("Name_L",Name_L);
      localStorage.setItem("Email",Email);
      localStorage.setItem("Phone",Phone);
      localStorage.setItem("DOB",DOB);
      localStorage.setItem("Age",Age);
      localStorage.setItem("Gender",Gender);
      localStorage.setItem("Marital",Marital);
      localStorage.setItem("Address",Address);
      localStorage.setItem("Addiction",Addiction);
      

      document.getElementById("patient_form").submit(); 
      //document.getElementById("name").value=nameInput;
}); 

