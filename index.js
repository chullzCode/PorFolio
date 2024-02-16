

// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#wrapper"),
//     smooth: true
// });



const closeMenu = document.querySelector("#close-menu");
const openMenu = document.querySelector("#open-menu");
closeMenu.addEventListener("click",show)
openMenu.addEventListener("click",close)
function show(){
    openMenu.style.display = "flex"
    openMenu.style.top = "0"
}
function close(){
    openMenu.style.display = "none"
}





let tabLinks = document.getElementsByClassName("tab-links")
let tabContents = document.getElementsByClassName("tab-contents")


function openTab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link")
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-Tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-Tab")
}