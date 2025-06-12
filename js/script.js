// Prompt name
var name = prompt("Type in your name");
    document.getElementById("greet").innerText = name;   

// Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("banner-slideshow");
  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";
}

setInterval(function() {
  plusDivs(1);
}, 1000);

// Form validation function
function validateForm() {
  var name = document.forms["contact-form"]["name"].value;
  var date = document.forms["contact-form"]["birth-date"].value;
  var gender = document.forms["contact-form"]["gender"].value;
  var messages = document.forms["contact-form"]["message"].value;

  if (name == "" || date == "" || gender == "" || messages == "") {
    alert("Please fill out the form");
    return false;
  }
  document.getElementById("sent-name").innerText = name;
  document.getElementById("sent-birthdate").innerText = date;
  document.getElementById("sent-gender").innerText = gender;
  document.getElementById("sent-message").innerText = messages;
  return false;
} 