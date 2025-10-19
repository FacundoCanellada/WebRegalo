// Array de frases de poemas
const frases = [
    "Eres la luz que ilumina mis días más oscuros.",
    "En tus ojos encuentro el universo completo.",
    "Cada momento contigo es un regalo del destino.",
    "Tu sonrisa es la melodía favorita de mi corazón.",
    "Contigo el tiempo se detiene y la vida cobra sentido.",
    "Eres el sueño que nunca quiero despertar.",
    "Tu amor es la poesía que mi alma siempre buscó.",
    "En tus brazos encontré mi hogar."
];

// Colores de pétalos (rosa a rojo)
const petalColors = [
    { base: '#ff69b4', shadow: '#ff1493' },  // Rosa brillante
    { base: '#ff1493', shadow: '#c71585' },  // Rosa profundo
    { base: '#ff6b9d', shadow: '#ff1493' },  // Rosa medio
    { base: '#ff82ab', shadow: '#ff69b4' },  // Rosa claro
    { base: '#ff1493', shadow: '#c71585' },  // Rosa profundo
    { base: '#ff69b4', shadow: '#ff1493' },  // Rosa brillante
    { base: '#ff82ab', shadow: '#ff6b9d' },  // Rosa claro
    { base: '#c71585', shadow: '#8b0a50' }   // Rosa oscuro
];

let petalsRemaining = 8;
let currentModalOpen = null;

// Crear pétalos de la rosa
function crearPetalos() {
    const flower = document.getElementById('rose-flower');
    const numPetals = 8;
    const angleStep = 360 / numPetals;
    
    // Mezclar frases
    const shuffledFrases = [...frases].sort(() => Math.random() - 0.5);
    
    // Primero crear la rosa base (que se revela)
    const roseBase = document.createElement('div');
    roseBase.className = 'rose-base';
    roseBase.innerHTML = `
        <div class="rose-inner">
            <div class="rose-petal-layer rose-layer-1"></div>
            <div class="rose-petal-layer rose-layer-2"></div>
            <div class="rose-petal-layer rose-layer-3"></div>
        </div>
    `;
    flower.appendChild(roseBase);
    
    // Luego crear los pétalos que caen
    for (let i = 0; i < numPetals; i++) {
        const angle = angleStep * i;
        const radian = (angle * Math.PI) / 180;
        
        const radius = 50;
        const x = 80 + radius * Math.cos(radian);
        const y = 80 + radius * Math.sin(radian);
        
        const petal = document.createElement('div');
        petal.className = 'petal petal-clickable';
        petal.style.left = x - 30 + 'px';
        petal.style.top = y - 40 + 'px';
        petal.style.transform = `rotate(${angle - 90}deg)`;
        petal.dataset.index = i;
        petal.dataset.message = shuffledFrases[i];
        
        // Pétalo simple y elegante
        petal.innerHTML = `
            <svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad${i}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:${petalColors[i].base}" />
                        <stop offset="100%" style="stop-color:${petalColors[i].shadow}" />
                    </linearGradient>
                </defs>
                <ellipse cx="30" cy="40" rx="26" ry="36" 
                         fill="url(#grad${i})" 
                         opacity="0.95"/>
            </svg>
        `;
        
        petal.addEventListener('click', () => mostrarMensaje(petal));
        
        // Animación de aparición
        petal.style.opacity = '0';
        petal.style.animation = `petal-appear 0.6s ease-out ${i * 0.1}s forwards`;
        
        flower.appendChild(petal);
    }
    
    // Añadir animación de aparición
    if (!document.getElementById('petal-appear-anim')) {
        const style = document.createElement('style');
        style.id = 'petal-appear-anim';
        style.textContent = `
            @keyframes petal-appear {
                from {
                    opacity: 0;
                    transform: scale(0);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Mostrar mensaje del pétalo
function mostrarMensaje(petal) {
    if (petal.classList.contains('falling')) return;
    
    const message = petal.dataset.message;
    
    // Crear partículas al hacer clic
    crearParticulasClick(petal);
    
    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'message-modal';
    modal.innerHTML = `
        <div class="message-card">
            <div class="message-emoji">🌹</div>
            <p class="message-text">"${message}"</p>
            <button class="message-button">Cerrar</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    currentModalOpen = modal;
    
    // Evento de cerrar
    const closeBtn = modal.querySelector('.message-button');
    closeBtn.addEventListener('click', () => {
        modal.style.animation = 'modal-fade-out 0.3s ease-out';
        setTimeout(() => {
            modal.remove();
            currentModalOpen = null;
            caerPetalo(petal);
        }, 300);
    });
    
    // Cerrar al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBtn.click();
        }
    });
    
    // Añadir animación de salida
    if (!document.getElementById('modal-fade-out-anim')) {
        const style = document.createElement('style');
        style.id = 'modal-fade-out-anim';
        style.textContent = `
            @keyframes modal-fade-out {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Crear partículas al hacer clic en un pétalo
function crearParticulasClick(petal) {
    const rect = petal.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Colores sutiles de rosa
    const colores = [
        'rgba(255, 182, 193, 0.8)',  // rosa claro
        'rgba(255, 105, 180, 0.8)',  // rosa medio
        'rgba(219, 112, 147, 0.8)',  // rosa palido
        'rgba(255, 192, 203, 0.8)',  // rosa pastel
    ];
    
    // Crear 15 partículas sutiles
    for (let i = 0; i < 15; i++) {
        const particula = document.createElement('div');
        particula.className = 'click-particle';
        
        // Color aleatorio
        particula.style.background = colores[Math.floor(Math.random() * colores.length)];
        
        // Posición inicial (centro del pétalo)
        particula.style.left = centerX + 'px';
        particula.style.top = centerY + 'px';
        
        // Dirección aleatoria
        const angulo = (Math.PI * 2 * i) / 15;
        const distancia = 40 + Math.random() * 40;
        const tx = Math.cos(angulo) * distancia;
        const ty = Math.sin(angulo) * distancia;
        
        particula.style.setProperty('--tx', tx + 'px');
        particula.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(particula);
        
        // Eliminar después de la animación
        setTimeout(() => {
            particula.remove();
        }, 800);
    }
}

// Hacer caer el pétalo
function caerPetalo(petal) {
    petal.style.animation = 'none';
    void petal.offsetHeight;
    petal.classList.add('falling');
    petalsRemaining--;
    
    const counter = document.getElementById('petals-count');
    if (counter) {
        counter.textContent = petalsRemaining;
    }
    
    if (petalsRemaining === 0) {
        setTimeout(() => {
            mostrarMensajeFinal();
        }, 2000);
    }
}

// Mostrar mensaje final
function mostrarMensajeFinal() {
    const modal = document.createElement('div');
    modal.className = 'final-modal';
    modal.innerHTML = `
        <div class="final-card">
            <div class="final-emoji">🎉</div>
            <h2 class="final-title">¡Has descubierto todos los mensajes!</h2>
            <p class="final-message">
                Cada pétalo llevaba un pedacito de mi corazón.<br>
                Que este día sea tan especial como tú lo eres para mí.
            </p>
            <div class="final-emoji">💖</div>
            <p class="final-message" style="font-size: 1.3rem; margin-top: 1rem;">
                ¡Feliz Cumpleaños!
            </p>
            <button class="reload-button">Volver a empezar 🔄</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Crear confeti
    crearConfeti();
    
    // Evento del botón
    const reloadBtn = modal.querySelector('.reload-button');
    reloadBtn.addEventListener('click', () => {
        location.reload();
    });
}

// Crear efecto de confeti
function crearConfeti() {
    const colors = ['#ff69b4', '#ff1493', '#c71585', '#8b5cf6', '#a855f7'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = Math.random() * 8 + 4 + 'px';
        confetti.style.height = Math.random() * 8 + 4 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-20px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.zIndex = '99999';
        confetti.style.pointerEvents = 'none';
        confetti.style.opacity = '0.9';
        
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;
        const rotation = Math.random() * 720 - 360;
        const drift = Math.random() * 200 - 100;
        
        confetti.style.animation = `confetti-fall-${i} ${duration}s ease-in ${delay}s forwards`;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes confetti-fall-${i} {
                to {
                    transform: translateY(${window.innerHeight + 50}px) rotate(${rotation}deg) translateX(${drift}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
            style.remove();
        }, (duration + delay) * 1000 + 100);
    }
}

// Crear partículas de fondo
function crearParticulas() {
    const container = document.getElementById('particles');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.bottom = '-10px';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 15 + 15) + 's';
        container.appendChild(particle);
    }
}

// Manejar la carta de entrada
function abrirCarta() {
    const entranceCard = document.getElementById('entrance-card');
    const entrancePage = document.getElementById('entrance-page');
    const mainPage = document.getElementById('main-page');
    
    entranceCard.classList.add('opening');
    
    setTimeout(() => {
        entrancePage.style.opacity = '0';
        entrancePage.style.transition = 'opacity 0.5s ease-out';
    }, 1000);
    
    setTimeout(() => {
        entrancePage.style.display = 'none';
        mainPage.style.display = 'flex';
        mainPage.style.opacity = '0';
        
        setTimeout(() => {
            mainPage.style.transition = 'opacity 0.8s ease-out';
            mainPage.style.opacity = '1';
        }, 50);
    }, 1500);
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    // Evento de la carta de entrada
    const entranceCard = document.getElementById('entrance-card');
    if (entranceCard) {
        entranceCard.addEventListener('click', abrirCarta);
    }
    
    crearPetalos();
    crearParticulas();
});