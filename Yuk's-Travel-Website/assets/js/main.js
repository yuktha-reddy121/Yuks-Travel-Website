/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')

/*=============== MENU SHOW ===============*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink= document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu= document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader=() =>{
    const header =document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY>=50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=() =>{
    const scrollUp=document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute('id');
            const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        });
    }

    window.addEventListener('scroll', scrollActive);
    scrollActive();
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    //reset: true //Animations Repeat
})
sr.reveal('.home__data, .explore__data, .explore__user, .footer__container')
sr.reveal('.home__card', {delay: 600, distance: '100px', interval: 100})
sr.reveal('.about__data, .join__image', {origin:'right'})
sr.reveal('.about__image, .join__data', {origin:'left'})
sr.reveal('.popular__card', {interval: 200})