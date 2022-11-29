// Nav Menu Scripting
const menuBtn = document.querySelector('.menu-btn')
const navMenu = document.querySelector('.menu-on')
const menuO = document.querySelector('.open')
const menuP = document.querySelector('.close')

menuBtn.addEventListener('click', ()=> {
    navMenu.classList.toggle('hidden')
    navMenu.classList.toggle('flex')
    menuO.classList.toggle('hidden')
    menuP.classList.toggle('hidden')
})

// Sign-in/up Form Registration Toggler
const signIn = document.querySelector('.login')
const signUp = document.querySelector('.sign-up')
const signBtn = document.querySelector('.close-btn')

signIn.addEventListener('click', ()=> {
    signUp.classList.remove('hidden')
    signUp.classList.add('flex')
})

signBtn.addEventListener('click', ()=> {
    signUp.classList.add('hidden')
    signUp.classList.remove('flex')
})

// Navbar back color Styling
const navbar = document.querySelector('nav')

window.addEventListener('scroll', ()=> {
    if (window.scrollY > 50) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
})

// Like button Scripting
const likeBtn = document.querySelectorAll('.like-btn')
const heart = document.querySelectorAll('.heart')
const heartOut = document.querySelectorAll('.heart-out')

likeBtn[0].addEventListener('click', ()=> {
    heart[0].classList.toggle('hidden')
    heartOut[0].classList.toggle('hidden')
})

likeBtn[1].addEventListener('click', ()=> {
    heart[1].classList.toggle('hidden')
    heartOut[1].classList.toggle('hidden')
})

likeBtn[2].addEventListener('click', ()=> {
    heart[2].classList.toggle('hidden')
    heartOut[2].classList.toggle('hidden')
})

likeBtn[3].addEventListener('click', ()=> {
    heart[3].classList.toggle('hidden')
    heartOut[3].classList.toggle('hidden')
})

likeBtn[4].addEventListener('click', ()=> {
    heart[4].classList.toggle('hidden')
    heartOut[4].classList.toggle('hidden')
})

likeBtn[5].addEventListener('click', ()=> {
    heart[5].classList.toggle('hidden')
    heartOut[5].classList.toggle('hidden')
})

// Customers toggler Scripting
const pointer = document.querySelectorAll('.pointer')
const customers = document.getElementById('customers')

pointer[0].addEventListener('click', ()=> {
    customers.style.transform = 'translateX(268px)'
    for (let i = 0; i < pointer.length; i++) {
        pointer[i].classList.remove('on-active')
    }
    pointer[0].classList.add('on-active')
})

pointer[1].addEventListener('click', ()=> {
    customers.style.transform = 'translateX(0px)'
    for (let i = 0; i < pointer.length; i++) {
        pointer[i].classList.remove('on-active')
    }
    pointer[1].classList.add('on-active')
})

pointer[2].addEventListener('click', ()=> {
    customers.style.transform = 'translateX(-268px)'
    for (let i = 0; i < pointer.length; i++) {
        pointer[i].classList.remove('on-active')
    }
    pointer[2].classList.add('on-active')
})