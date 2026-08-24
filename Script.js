// ==========================
// CARROSSEL
// ==========================

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

// Atualiza o slide
function mostrarSlide() {

    slider.style.transform = `translateX(-${index * 100}vw)`;
    slider.style.transition = "0.8s ease";

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

}

// Próximo slide
function proximoSlide() {

    index++;

    if(index >= slides.length){
        index = 0;
    }

    mostrarSlide();

}

// Slide anterior
function slideAnterior() {

    index--;

    if(index < 0){
        index = slides.length - 1;
    }

    mostrarSlide();

}

// Botões
next.addEventListener("click", proximoSlide);
prev.addEventListener("click", slideAnterior);

// Clique nas bolinhas
dots.forEach((dot, i)=>{

    dot.addEventListener("click", ()=>{

        index = i;
        mostrarSlide();

    });

});

// Troca automática
let autoplay = setInterval(proximoSlide, 5000);

// Pausa quando o mouse entra
slider.addEventListener("mouseenter", ()=>{

    clearInterval(autoplay);

});

// Continua quando o mouse sai
slider.addEventListener("mouseleave", ()=>{

    autoplay = setInterval(proximoSlide, 5000);

});