

// let pic = document.getElementById("profile-pic")
// function img(){
//     // pic.src = "images/profolio.png","images/icon.png"
//     if (pic.src.match("images/icon.png")){
//         pic.src = "images/profolio.png"
//     } else {
//         pic.src = "images/icon.png"
//     }
// }
const scroll = new LocomotiveScroll({
    el: document.querySelector("#wrapper"),
    smooth: true
});



let tabLinks = document.getElementsByClassName("tab-links")
let tabContents = document.getElementsByClassName("tab-contents")


function openTab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link")
    }
    for(tabContent of tabContents){
        tabContents.classList.remove("active-Tab")
    }
    event.currentTarget.classList.add("active-link")
}