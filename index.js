const header = document.querySelector('.header');

window.onscroll = function(){
    var top = window.scrollY;
    if(top >= 100){
        header.classList.add('scroll');
    }else{
        header.classList.remove('scroll');
    }
}

