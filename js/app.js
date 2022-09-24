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