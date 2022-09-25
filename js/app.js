// MENU MOBILE
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }
}
showMenu('bx', 'menu-mobile');


// REMOVE MENU WHEN CLICK
const navLink = document.querySelectorAll('.menu-mobile-link');

const linkAction = () => {
    const navMenu = document.getElementById('menu-mobile');
    const navBx = document.getElementById('bx');
    navMenu.classList.toggle('active-menu-mobile');
    navBx.classList.toggle('active-bx')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// EMAILJS
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
const contactUser = document.getElementById('contact-user');
const contactEmail = document.getElementById('contact-mail');
const contactText = document.getElementById('contact-text');

const sendEmail = (e) => {
    e.preventDefault();

    if((contactUser.value === '') || (contactEmail.value === '') || (contactText.value === '')){
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');

        contactMessage.textContent = 'Voce deve preencher todos os campos!';

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    }else{
        emailjs.sendForm('service_cmnbwae','template_snq2xrk','#contact-form','PAYsleztmUxDf1o3r').then(()=>{
            contactMessage.classList.remove('color-red');
            contactMessage.classList.add('color-green');
            contactMessage.textContent = 'Sua mensagem foi enviada com sucesso!';

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 3000) 
        }, (error) => {
            alert('OPS, algo deu errado...', error );
        })

        contactUser.value = '';
        contactEmail.value = '';
        contactText.value = '';
    }
}

contactForm.addEventListener('submit', sendEmail);


// GSAP ANIMATION
document.addEventListener('DOMContentLoaded', () => {
    let tl = new TimelineMax();

    tl.fromTo('.bg', 1 ,
    {height: '100%'},
    {height: '0%', delay: 5, ease: Expo.easeInOut})

    .fromTo('.logo', 0.7 ,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.navbar-desktop-left', 0.7 ,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.navbar-desktop-right', 0.7 ,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.gsap-item1', 0.7 ,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.gsap-item2', 0.7 ,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
})