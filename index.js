

// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#wrapper"),
//     smooth: true
// });



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