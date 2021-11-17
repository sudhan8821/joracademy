let burger=document.querySelector(".burger");
let nav_bar=document.querySelector(".nav-bar");
let nav_list=document.querySelector(".nav-list");
let right_nav=document.querySelector(".left-logo")
burger.addEventListener('click',()=>{
    right_nav.classList.toggle('v-class-resp');
    nav_list.classList.toggle('v-class-resp');
    nav_bar.classList.toggle('h-nav-resp');
})