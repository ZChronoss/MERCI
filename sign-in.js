let emailPhone = document.getElementById("email-phone");
let password = document.getElementById("password");

emailPhone.addEventListener('focusout', e => {
    if(e.target.value == ''){
        e.target.style.borderColor = 'red';
        document.getElementById("alert1").innerHTML = "Input your email or phone number!"
    }else{
        e.target.style.borderColor = 'black';
        document.getElementById("alert1").innerHTML = ""
    }
})

password.addEventListener('focusout', e => {
    if(e.target.value == ''){
        e.target.style.borderColor = 'red';
        document.getElementById("alert2").innerHTML = "Input your password!"
    }else{
        e.target.style.borderColor = 'black';
        document.getElementById("alert2").innerHTML = ""
    }
})


