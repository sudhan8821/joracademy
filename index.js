let burger=document.querySelector(".burger");
let nav_bar=document.querySelector(".nav-bar");
let nav_list=document.querySelector(".nav-list");
let right_nav=document.querySelector(".left-logo")
burger.addEventListener('click',()=>{
    right_nav.classList.toggle('v-class-resp');
    nav_list.classList.toggle('v-class-resp');
    nav_bar.classList.toggle('h-nav-resp');
})
let frmlogin=document.frmlogin;
let phone=document.getElementById('phone');
let perror=document.getElementById('perror');
phone.addEventListener('keypress',(e)=>{
    
    if(e.charCode<48 || e.charCode>75)
    {
        perror.innerHTML='Phone Number Can not be AlphaNumeric!';
        perror.style.color='red';
        perror.style.fontWeight='bold';
        e.preventDefault();
    }
    else
    {
        perror.innerHTML='';
    }
})
