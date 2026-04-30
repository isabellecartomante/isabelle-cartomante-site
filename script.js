// SMOOTH SCROLL PARA LINKS INTERNOS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ANIMAÇÃO DE REVEAL AO SCROLL
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar observador em elementos com classes específicas
document.querySelectorAll('.service-card, .step, .list-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
});

// CONTADOR DE CLIQUES NO BOTÃO (ANALYTICS)
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function(e) {
        // Aqui você pode adicionar tracking do Google Analytics ou similar
        console.log('Botão clicado:', this.textContent);
    });
});

// VALIDAÇÃO BÁSICA DO WHATSAPP
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Você pode adicionar validação adicional aqui se necessário
        console.log('Redirecionando para WhatsApp...');
    });
});

// EFEITO DE HOVER NOS CARDS DE SERVIÇO
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// MENU RESPONSIVO (preparação para versão com menu mobile)
// Pode ser expandido conforme necessário

console.log('Site Isabelle Cartomante carregado com sucesso!');
