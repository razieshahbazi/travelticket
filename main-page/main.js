
//Nav
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.ad pushdEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

//Date picker

$(function () {
  $('input[name="datetimes"]').daterangepicker({
    timePicker: true,
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
      format: "  Y/M/DD",
    },
  });
});





// drop down of number of people

var num = document.querySelector("#num");
const incbtn = document.querySelector("#incbtn");
const decbtn = document.querySelector("#decbtn");
var firstnum = 0;
num.innerHTML = 0;

incbtn.addEventListener("click", function (event) {
  event.preventDefault();

  firstnum += 1;
  num.value = firstnum;
});

decbtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (num.value > 0) {
    firstnum -= 1;
    num.value = firstnum;
  }
});



var num2 = document.querySelector("#num2");
const incbtn2 = document.querySelector("#incbtn2");
const decbtn2 = document.querySelector("#decbtn2");
var firstnum2 = 0;
num2.innerHTML = 0;

incbtn2.addEventListener("click", function (event) {
  event.preventDefault();

  firstnum2 += 1;
  num2.value = firstnum2;
});

decbtn2.addEventListener("click", function (event) {
  event.preventDefault();
  if (num2.value > 0) {
    firstnum2 -= 1;
    num2.value = firstnum2;
  }
});



var num3 = document.querySelector('#num3');
const incbtn3 = document.querySelector("#incbtn3");
const decbtn3 = document.querySelector("#decbtn3");
var firstnum3 = 0;
num3.innerHTML = 0;

incbtn3.addEventListener("click", function (event) {
  event.preventDefault();

  firstnum3 += 1;
  num3.value = firstnum3
});

decbtn3.addEventListener("click", function (event) {
  event.preventDefault();

  if (num3.value > 0) {
    firstnum3 -= 1;
    num3.value = firstnum3;
  }
});






//photo slider

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



// subscibe section

let offer = document.getElementById('form-side-section');
let offerbtn = document.getElementById('offerbtn');
offerbtn.addEventListener('click',()=>{
offer.style.display = 'none';

})