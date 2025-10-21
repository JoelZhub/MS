const cards = document.querySelectorAll('.card-test');

const groups = document.querySelectorAll(".group-img")

function cheackCards(){

    const bottom = window.innerHeight * 0.85;

    cards.forEach(card =>{

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < bottom ){
            card.classList.add("show");
        }else{
            card.classList.remove("show");
        }

    });

}

window.addEventListener("scroll", cheackCards);
window.addEventListener("load", cheackCards);

const cards_Servicio = document.querySelectorAll(".servicio-card");

cards_Servicio.forEach(cardS => {


    let cardContieneClass =  cardS.classList.contains("first-card");
    let cardContieneId = cardS.id === "card1";

    cardS.addEventListener("mouseenter", ()=>{
           
            if(!cardContieneClass && !cardContieneId){
                 cardS.classList.add("first-card");
            }
            
        });

        if(!cardContieneId){
            cardS.addEventListener("mouseleave", ()=>{
                cardS.classList.remove("first-card");
            });
        }
});


let contadorIndice = 0;

function showSelection(index){
    groups.forEach((group, indiceActual) => {
        group.style.display = indiceActual === index ? 'flex' : 'none'
    });
}

function changeSelection(dirrecion){

    if(dirrecion === "next"){
        contadorIndice++;
        if(contadorIndice >= groups.length) contadorIndice = 0;
    }else if(dirrecion === "prev"){
        contadorIndice--;
        if(contadorIndice < 0) contadorIndice = groups.length - 1;
    }
    showSelection(contadorIndice);

}

showSelection(contadorIndice);

document.querySelector("#arrow-right").addEventListener("click", ()=> changeSelection('next'));
document.querySelector("#arrow-left").addEventListener("click", ()=> changeSelection('prev'));


const btnCookiesAceptar = document.querySelector(".btn-first");

const cookies = document.querySelector(".cookies");

const contenedorConfiguracion = document.querySelector(".contenedor-first");

const btnConfigurarCookies = document.querySelector(".btn-second");

const overlay = document.querySelector("#overlay");

const closeWindowsConfigurarCookies = document.querySelector("#closeWindows");

btnCookiesAceptar.addEventListener("click", ()=>{

    cookies.style.display ="none";

});

btnConfigurarCookies.addEventListener("click", () => {

    contenedorConfiguracion.style.display = "block";
    overlay.style.display = "block";

    closeWindowsConfigurarCookies.addEventListener("click", () => {
      contenedorConfiguracion.style.display = "none";
     overlay.style.display = "none";

});

});

