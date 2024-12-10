const state = {
    currentLang: localStorage.getItem('language') || 'es',
    isDarkTheme: localStorage.getItem('theme') === 'dark' || true
};


const translations = {
    en: {
        
        about: 'About me',
        hi: 'Hi!',
        aboutText: "I'm a Junior Fullstack developer passionate about learning and growing in web development. I work with technologies like HTML, CSS, JavaScript,  to create dynamic and functional applications. I'm ready to face new challenges and add value to your team.",
        webDesigner: 'Full Stack',
        backEnd: 'Back END',
        projects: 'My Last Projects',
        projectTitle1: 'Project 1',
        projectDesc1: 'Project 1 description',
        projectTitle2: 'Project 2',
        projectDesc2: 'Project 2 description',
        contact: "Let's talk business",
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact'
        
    },
    es: {
        
        about: 'Sobre mí',
        hi: '¡Hola!',
        aboutText: 'Hola, soy un desarrollador Fullstack Junior con pasión por aprender y crecer en el desarrollo web. Manejo tecnologías como HTML, CSS, JavaScript,  para crear aplicaciones dinámicas y funcionales. Estoy listo para enfrentar nuevos desafíos y aportar valor a tu equipo.',
        webDesigner: 'Desarrollador web',
        backEnd: 'Back END',
        projects: 'Mis Últimos Proyectos',
        projectTitle1: 'Proyecto 1',
        projectDesc1: 'Descripción del proyecto 1',
        projectTitle2: 'Proyecto 2',
        projectDesc2: 'Descripción del proyecto 2',
        contact: 'Hablemos de negocios',
        name: 'Nombre',
        email: 'Correo',
        message: 'Mensaje',
        send: 'Enviar Mensaje', 
        about: 'Sobre mí',
        projects: 'Proyectos',
        contact: 'Contacto'
        
    }
};


const projects = [
    {
        title: "Proyecto 1",
        description: "Descripción del proyecto 1",
        image: "assets/project1.jpg",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Proyecto 2",
        description: "Descripción del proyecto 2",
        image: "assets/project2.jpg",
        technologies: ["React", "Node.js"]
    }
];            



function toggleLanguage() {
    state.currentLang = state.currentLang === 'es' ? 'en' : 'es';
    updateContent();
    
    
    const flagImage = document.getElementById('flagImage');
    if (state.currentLang === 'en') {
        
        flagImage.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNDgwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNiZDNkNDQiIGQ9Ik0wIDBoNjQwdjQ4MEgweiIvPjxwYXRoIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIzNyIgZD0iTTAgNTUuM2g2NDBNMCAxMjloNjQwTTAgMjAzaDY0ME0wIDI3N2g2NDBNMCAzNTFoNjQwTTAgNDI1aDY0MCIvPjxwYXRoIGZpbGw9IiMxOTJmNWQiIGQ9Ik0wIDBoMzY0Ljh2MjU4LjVIMHoiLz48L2c+PC9zdmc+";
    } else {
        
        flagImage.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNDgwIj48cGF0aCBmaWxsPSIjYzYwYjFlIiBkPSJNMCAwaDY0MHY0ODBIMHoiLz48cGF0aCBmaWxsPSIjZmZjNDAwIiBkPSJNMCAxMjBoNjQwdjI0MEgweiIvPjwvc3ZnPg==" 
    
    localStorage.setItem('language', state.currentLang);
}
}
function toggleTheme() {
    state.isDarkTheme = !state.isDarkTheme;
    document.documentElement.setAttribute('data-theme', state.isDarkTheme ? 'dark' : 'light');
    document.querySelector('.theme-switch').innerHTML = state.isDarkTheme ? '🌙' : '☀️';
    localStorage.setItem('theme', state.isDarkTheme ? 'dark' : 'light');
}


function toggleMenu() {
    const sideNav = document.querySelector('.side-nav');
    sideNav.classList.toggle('active');
}


function updateContent() {
    
    document.querySelector('#about h2').textContent = translations[state.currentLang].about;
    document.querySelector('.profile-content h2').textContent = translations[state.currentLang].hi;
    document.querySelector('.about-text').textContent = translations[state.currentLang].aboutText;
    document.querySelector('.title-section h1').textContent = translations[state.currentLang].webDesigner;

    
    document.querySelector('.section-title').textContent = translations[state.currentLang].projects;
    const projectCards = document.querySelectorAll('.project-card');
    projectCards[0].querySelector('h3').textContent = translations[state.currentLang].projectTitle1;
    projectCards[0].querySelector('p').textContent = translations[state.currentLang].projectDesc1;
    projectCards[1].querySelector('h3').textContent = translations[state.currentLang].projectTitle2;
    projectCards[1].querySelector('p').textContent = translations[state.currentLang].projectDesc2;

    
    document.querySelector('#contact h2').textContent = translations[state.currentLang].contact;
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    inputs[0].placeholder = translations[state.currentLang].name;
    inputs[1].placeholder = translations[state.currentLang].email;
    inputs[2].placeholder = translations[state.currentLang].message;
    document.querySelector('.submit-btn').textContent = translations[state.currentLang].send;
}


function handleNavigation() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });
}


function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}


document.addEventListener('DOMContentLoaded', () => {
    
    updateContent();
    handleNavigation();

    
    document.documentElement.setAttribute('data-theme', state.isDarkTheme ? 'dark' : 'light');
    document.querySelector('.theme-switch').innerHTML = state.isDarkTheme ? '🌙' : '☀️';  
        
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            this.classList.add('sending');
            
    
            setTimeout(() => {
                this.classList.remove('sending');
                this.classList.add('sent');
                
                setTimeout(() => {
                    this.reset();
                    this.classList.remove('sent');
                }, 2000);
            }, 1500);
        });
    }
});


window.addEventListener('scroll', () => {
    
    if (window.innerWidth <= 480) {
        document.querySelector('.side-nav').classList.remove('active');
    }
    

    const elements = document.querySelectorAll('.animate-fade');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});



function animateSection(sectionId) {
    const section = document.getElementById(sectionId);
    

    section.classList.remove('fade-in-up', 'slide-in-right', 'fade-in-scale');
    

    void section.offsetWidth;
    

    switch(sectionId) {
        case 'about':
            section.classList.add('fade-in-up');
            break;
        case 'projects':
            section.classList.add('slide-in-right');
            break;
        case 'contact':
            section.classList.add('fade-in-scale');
            break;
    }
}


document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        

        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        

        if (window.innerWidth <= 480) {
            document.querySelector('.side-nav').classList.remove('active');
        }


        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });


        animateSection(targetId);
        

        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});


const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSection(entry.target.id);
            sectionObserver.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.2
});


document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});


document.addEventListener('DOMContentLoaded', () => {

    const hash = window.location.hash.slice(1) || 'about';
    animateSection(hash);
});

function typeWriter(element, text, i = 0) {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(element, text, i), 100); 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.querySelector('.typewriter');
    greeting.textContent = ''; 
    typeWriter(greeting, 'Leonardo Canepa');
});


emailjs.init("1X8eKv_cQHGmU10pg");

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('.submit-btn');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    
    const templateParams = {
        from_name: document.getElementById('name').value,
        message: document.getElementById('message').value,
        reply_to: document.getElementById('email').value,
        to_name: "Leo"
    };

    
    console.log('Enviando:', templateParams); 

    emailjs.send('service_p2nwakt', 'template_bhraf3e', templateParams)
        .then(() => {
            btn.textContent = 'Message Sent!';
            document.getElementById('contactForm').reset();
            setTimeout(() => {
                btn.textContent = 'Send Message';
                btn.disabled = false;
            }, 3000);
        })
        .catch((error) => {
            console.error('Error:', error);
            btn.textContent = 'Error! Try Again';
            btn.disabled = false;
        });
});


document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        const header = document.querySelector('header');

        
        if(targetId === 'about') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
        
            const headerOffset = header.offsetHeight;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        
        if (window.innerWidth <= 480) {
            document.querySelector('.side-nav').classList.remove('active');
        }

        
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('header').offsetHeight;


    if (scrollPosition < header) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#about') {
                item.classList.add('active');
            }
        });
        return;
    }


    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - header;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === '#' + section.id) {
                    item.classList.add('active');
                }
            });
        }
    });
});
