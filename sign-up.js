let uname = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confPass = document.getElementById("conf-pass");

uname.addEventListener('focusout', e => {
    if(e.target.value == ''){
        e.target.style.borderColor = 'red';
        document.getElementById("alert1").innerHTML = "Input your name!";
    }else{
        e.target.style.borderColor = 'black';
        document.getElementById("alert1").innerHTML = "";
    }
})

phone.addEventListener('focusout', e => {
    if(e.target.value == ''){
        e.target.style.borderColor = 'red';
        document.getElementById("alert2").innerHTML = "Input your phone number!";
    }else{
        e.target.style.borderColor = 'black';
        document.getElementById("alert2").innerHTML = "";
    }
})

email.addEventListener('focusout', e => {
    if(e.target.value == ''){
        e.target.style.borderColor = 'red';
        document.getElementById("alert3").innerHTML = "Input your email address!";
    }else{
        e.target.style.borderColor = 'black';
        document.getElementById("alert3").innerHTML = "";
    }
})

password.addEventListener('focusout', e => {

    if(e.target.value == ''){
        e.target.style.borderColor = 'red';
        document.getElementById("alert4").innerHTML = "Input your password!";
        return;
    }else{
        e.target.style.borderColor = 'black';
        document.getElementById("alert4").innerHTML = "";
    }
})

confPass.addEventListener('focusout', e => {
    if(e.target.value == ''){
        e.target.style.borderColor = 'red';
        document.getElementById("alert5").innerHTML = "This field must be filled!";
    }else{
        e.target.style.borderColor = 'black';
        document.getElementById("alert5").innerHTML = "";
    }
})

function validPass(){
    var radio = document.querySelector('input[name="gender"]:checked')
    let passwordVal = document.getElementById("password").value;
    let confPassVal = document.getElementById("conf-pass").value;

    if(!radio){
        event.preventDefault();
        alert("Please choose your gender!")
    }else if(passwordVal != confPassVal){
        event.preventDefault();
        alert("Password and Confirm Password must be same!");
    }
}