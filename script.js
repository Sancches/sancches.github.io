document.addEventListener('DOMContentLoaded', () => {
    
    const slogans = [
        "Desenvolvedor, Designer & Entusiasta de Tecnologia.",
        "Transformando café em código e design de impacto.",
        "Construindo o futuro digital, um pixel de cada vez.",
        "Soluções criativas para problemas complexos.",
        "Focado em performance e experiência do usuário.",
        "Design limpo, código eficiente e ideias modernas.",
        "Arquitetando o futuro digital através da tecnologia.",
        "Construindo soluções do conceito ao código.",
        "Unindo design estratégico e engenharia de software.",
        "Transformando ideias complexas em sistemas funcionais.",
        "Soluções tecnológicas que impulsionam negócios.",
        "Você encontrou um easter-egg!"
        
    ];

    const sloganElement = document.getElementById('slogan-text');
    const randomSlogan = slogans[Math.floor(Math.random() * slogans.length)];

    let i = 0;
    const speed = 50; // Velocidade da digitação

    function typeWriter() {
        if (i < randomSlogan.length) {
            // Adiciona a letra atual ao texto existente
            sloganElement.textContent += randomSlogan.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    // Inicia a função
    typeWriter();


    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        if(navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // --- Navbar Background Change ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 1)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            navbar.style.padding = '20px 0';
        }
    });

    // --- Scroll Animations ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});