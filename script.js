/* =========================================================
   JAVASCRIPT DO SITE
   Mantido simples para facilitar futuras alterações.
   ========================================================= */

// ================================
// MENU MOBILE
// ================================
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

// Fecha o menu depois que o usuário clica em um link.
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});


// ================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ================================
// Os elementos com a classe .reveal aparecem
// suavemente quando entram na tela.

const elements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );
    elements.forEach(element => observer.observe(element));
} else {
    // Compatibilidade: exibe o conteúdo sem animação em navegadores antigos.
    elements.forEach(element => element.classList.add("visible"));
}


// ================================
// ANO AUTOMÁTICO NO RODAPÉ
// ================================
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();
