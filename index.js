const iconMenu=document.getElementById("icon-menu");
const menu=document.querySelector(".menu-link");
const iconMenuClose=document.querySelector(".icon-menu-close");

iconMenu.addEventListener("click",function(){
    menu.classList.add("menu-show");    
});

iconMenuClose.addEventListener("click",function(){
    menu.classList.remove("menu-show");    
});


