const navBtn = document.querySelector('.nav__mobile-btn')
const navMobile = document.querySelector('.nav__mobile-items')
const header = document.querySelector('header')
const navMobileItems = document.querySelectorAll('.nav__mobile-item')
const navMobileShadow = document.querySelector('.nav__mobile-shadow')
const navDesktopShadow = document.querySelector('.nav__desktop-shadow')

document.addEventListener('DOMContentLoaded', function () {
	function addShadow() {
		if (window.scrollY >= 80) {
			navMobileShadow.classList.add('nav__mobile-shadow-show')
			navDesktopShadow.classList.add('nav__desktop-shadow-show')
		} else {
			navMobileShadow.classList.remove('nav__mobile-shadow-show')
			navDesktopShadow.classList.remove('nav__desktop-shadow-show')
		}
	}

	window.addEventListener('scroll', addShadow)
})

// New Function for Hamburger

const showMobileNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav__mobile-items-active')
	navMobileItems.forEach(item =>
		item.addEventListener('click', () => navMobile.classList.remove('nav__mobile-items-active'))
	)
	navMobileItems.forEach(item => item.addEventListener('click', () => navBtn.classList.remove('is-active')))
}

navBtn.addEventListener('click', showMobileNav)
