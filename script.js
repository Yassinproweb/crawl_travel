const navbar = document.querySelector('nav')

window.addEventListener('scroll', ()=> {
    if (window.scrollY > 15) {
        navbar.classList.add('change')
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('change')
        navbar.classList.remove('sticky')
    }
})

const nav_menu = document.getElementById('menu')
const open_menu = document.querySelector('.open-menu')
const close_menu = document.querySelector('.close-menu')

navbar.addEventListener('click', ()=> {
    nav_menu.classList.toggle('flex')
    nav_menu.classList.toggle('hidden')
    open_menu.classList.toggle('hidden')
    close_menu.classList.toggle('hidden')
})