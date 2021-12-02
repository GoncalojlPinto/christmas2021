const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SWIPERJS

let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

// HEADER

function headerScroll(){
    const header = document.getElementById('header');
    if (this.scrollY >= 25){
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', headerScroll);


// Scrolls

const sections = document.querySelectorAll('section[id]')

function scrollActive(){

    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive)

// scroll to the top

function scrollUp(){
    const scroll = document.getElementById('scrollup');
    if (this.scrollY >= 460){
        scroll.classList.add('show-scroll');
    }else{
        scroll.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

// scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '1500',
    delay: '200'
});

sr.reveal('.home-swiper');
sr.reveal('.acessories__data, .present__content, .footer__content', {interval: 100});
sr.reveal('.about__data', {origin: 'left'});
sr.reveal('.about__img', {origin: 'right'});