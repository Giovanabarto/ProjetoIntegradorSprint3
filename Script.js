// ==========================
// CARROSSEL (CORRIGIDO)
// ==========================

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;
let autoplay = null;

// Atualiza a exibição do slide
function mostrarSlide() {
    // Como cada slide ocupa 25% do .slider (que mede 400%), mover -25% por índice desloca exatamente 1 slide inteiro
    const porcentagem = index * (100 / slides.length);
    slider.style.transform = `translateX(-${porcentagem}%)`;

    // Atualiza as bolinhas ativas
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) {
        dots[index].classList.add("active");
    }
}

function proximoSlide() {
    index = (index + 1) % slides.length;
    mostrarSlide();
}

function slideAnterior() {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide();
}

// Botões
if (next) next.addEventListener("click", () => {
    proximoSlide();
    reiniciarAutoplay();
});

if (prev) prev.addEventListener("click", () => {
    slideAnterior();
    reiniciarAutoplay();
});

// Clique nas bolinhas
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        mostrarSlide();
        reiniciarAutoplay();
    });
});

// Controle de tempo de transição
function iniciarAutoplay() {
    pararAutoplay();
    autoplay = setInterval(proximoSlide, 3000);
}

function pararAutoplay() {
    if (autoplay) clearInterval(autoplay);
}

function reiniciarAutoplay() {
    pararAutoplay();
    iniciarAutoplay();
}

// Eventos de mouse para pausar
if (slider) {
    slider.addEventListener("mouseenter", pararAutoplay);
    slider.addEventListener("mouseleave", iniciarAutoplay);
}

// Inicialização
iniciarAutoplay();