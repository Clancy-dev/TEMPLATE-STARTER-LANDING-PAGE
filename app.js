const popUp = document.querySelector(".pop-up-menu");
const overlay = document.querySelector(".overlay");
const btnOpenPopUpAndShowOverlay = document.querySelector(".nav-icon");
const btnClosePopUpAndHideOverlay = document.querySelector(".right-header-pop");


function closePopUpAndHideOverlay(){
    popUp.classList.add("close-pop-up-menu");
    overlay.classList.add("hide-overlay");
}
closePopUpAndHideOverlay()

function openPopUpAndShowOverlay(){
    popUp.classList.remove("close-pop-up-menu");
    overlay.classList.remove("hide-overlay");
}

btnOpenPopUpAndShowOverlay.addEventListener("click",openPopUpAndShowOverlay);
btnClosePopUpAndHideOverlay.addEventListener("click",closePopUpAndHideOverlay);





