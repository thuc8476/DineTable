var items = document.querySelectorAll(".item");

var menu = document.querySelectorAll(".left-conten");
var login = document.querySelector(".login-menu");
let leftmenu = document.querySelector(".menu-left");
function handelmenu() {
    items.forEach(item => {
        item.classList.toggle("hidden");
    })
   leftmenu.classList.toggle("menu-left");
}
document.querySelector(".use-img").addEventListener("click",() => { 
        login.classList.toggle("hidden")
})
   
   
var boxs = document.querySelectorAll(".box");
menu.forEach((item,index) => {
    item.addEventListener("click",() =>{
        menu.forEach(item => item.style.color = "white");
        item.style.color = "black";
        boxs.forEach(item =>  item.style.display = "none");
        boxs[index].style.display = "block";
    });
  
})

