// HEADER ROLAGEM DO SCROLL

window.addEventListener("scroll", () => {
    const logo = document.querySelector(".manu-logo");
    const menu = document.querySelector(".header");
    const img = document.querySelector(".imagem-logo");
    menu.classList.toggle("rolagem", window.scrollY > 0)
    logo.classList.toggle("rolagem", window.scrollY > 0)
})

//FILTRO DE IMAGENS 

const btns = document.querySelectorAll(".btn")

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btns.forEach((btn) => {
            btn.classList.remove("selecionado");
        })
        btn.classList.add("selecionado");
        cardSelecionado(btn)
    })
});

function cardSelecionado(btn) {
    const cards = document.querySelectorAll(".trabalho-card");
    cards.forEach((card) => {
        card.style.display = "none";
        const cardData = card.getAttribute("data-filtro");
        if (cardData == btn.value) {
            card.style.display = "block";
        }
        if ("todos" == btn.value) {
            card.style.display = "block";
        }

    })

}
