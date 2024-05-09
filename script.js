let signupbtn = document.querySelector("#signupbtn");
let signinbtn = document.querySelector("#signinbtn");
let namefield = document.querySelector("#namefield");
let title = document.querySelector("#title");

signinbtn.onclick = function(){
    namefield.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
}

signupbtn.onclick = function(){
    namefield.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signinbtn.classList.remove("disable");
    signupbtn.classList.add("disable");
}

