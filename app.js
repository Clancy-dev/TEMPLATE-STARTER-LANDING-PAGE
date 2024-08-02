const popUp = document.querySelector(".pop-up-menu");
const overlay = document.querySelector(".overlay");
const btnOpenPopUpAndShowOverlay = document.querySelector(".nav-icon");
const btnClosePopUpAndHideOverlay = document.querySelector(".right-header-pop");
const linkBtns = document.querySelectorAll(".link-btn");


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
linkBtns.forEach((linkBtn) => {
    linkBtn.addEventListener("click",closePopUpAndHideOverlay);
    
});
console.log(linkBtns);

//SWIPER
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

     // Autoplay settings
    autoplay: {
     delay: 3000, // 3 seconds delay between slides
     disableOnInteraction: false, // Continue autoplay after interaction
            },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });




