let inp1 = document.getElementById("inp1");
let inp2 = document.querySelector("#inp2");
const loginbtn = document.querySelector(".loginbtn");
let correctpassword = document.querySelector(".correctpassword");
let wrongpassword = document.querySelector(".wrongpassword");
let match2password = document.querySelector(".match2password");



loginbtn.addEventListener("click",()=>{

    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(inp1.value.match(passw)) 
    { 
        correctpassword.style.display ="block";
    }

   else
    { 
        wrongpassword.style.display ="block";
    }
    

});


 