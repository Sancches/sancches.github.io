document.addEventListener('DOMContentLoaded', () => {

    // --- Typewriter Effect ---
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
    ];

    const sloganElement = document.getElementById('slogan-text');
    if (sloganElement) {
        const randomSlogan = slogans[Math.floor(Math.random() * slogans.length)];
        let i = 0;
        const speed = 35;

        function typeWriter() {
            if (i < randomSlogan.length) {
                sloganElement.textContent += randomSlogan.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }

    const cursorGlow = document.querySelector('.cursor-glow');

    document.addEventListener('mousemove', (e) => {
        // We use requestAnimationFrame for maximum performance
        window.requestAnimationFrame(() => {
            cursorGlow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        });
    });

    const interactables = document.querySelectorAll('a, button, .project-card');

    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorGlow.style.opacity = "0.6";
            cursorGlow.style.width = "280px";
            cursorGlow.style.height = "280px";
        });
        el.addEventListener('mouseleave', () => {
            cursorGlow.style.opacity = "0.4";
            cursorGlow.style.width = "200px";
            cursorGlow.style.height = "200px";
        });
    });

    // --- Mobile Menu Toggle & Glossy Fix ---
    const menuToggle = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar'); // Select navbar

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');

        // This line hides the navbar background when menu is open
        navbar.classList.toggle('menu-open');

        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navbar.classList.remove('menu-open'); // Reset navbar
            document.body.style.overflow = 'auto';
        });
    });

    // --- Navbar Scroll Effect (CSS Class Toggle) ---
    // We removed the manual style settings here to let CSS handle the Glossy effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
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