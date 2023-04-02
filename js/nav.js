const navBtn = document.querySelector('.nav__mobile-btn')
const navMobile = document.querySelector('.nav__mobile-items')
const header = document.querySelector('header')

const showMobileNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav__mobile-items-active')
}

navBtn.addEventListener('click', showMobileNav)
