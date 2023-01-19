//nav
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})






//button

let emailbtn = document.querySelector(".emailbtn");
let emailinp = document.querySelector(".emailinp");
let emailerrortxt = document.getElementById("emailerrortxt");


emailbtn.addEventListener("click",()=>{

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailinp.value.match(mailformat))
      {
        window.location.replace("./login-part2/login2.html");
      }
    else
      { 
        emailerrortxt.style.display = "block";
}})













