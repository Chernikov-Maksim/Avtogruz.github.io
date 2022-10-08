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