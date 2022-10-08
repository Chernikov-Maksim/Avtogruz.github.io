const headerBurgerMenu = document.querySelector('.headerBurgerMenu')
const menuClose = document.querySelector('.menuClose')
const headerBurger = document.querySelector('.headerBurger')


function showMenu() {
    headerBurger.onclick = function() {
        headerBurgerMenu.classList.toggle('headerBurgerMenuActive')
    }
    menuClose.onclick = function() {
        headerBurgerMenu.classList.toggle('headerBurgerMenuActive')
    }
}

showMenu()


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.8,
    spaceBetween: 30,
    centeredSlides: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
    },
    autoplay: {
        delay: 1000,
    },
    loop: true,
});