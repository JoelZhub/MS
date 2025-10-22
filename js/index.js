const btnCookiesAceptar = document.querySelectorAll(".btn-first");

const cookies = document.querySelector(".cookies");

const contenedorConfiguracion = document.querySelector(".contenedor-first");

const btnConfigurarCookies = document.querySelector(".btn-second");

const overlay = document.querySelector("#overlay");

const closeWindowsConfigurarCookies = document.querySelector("#closeWindows");

const btnRechazar = document.querySelector(".btn-rechazar");

const cambioCaret = document.querySelector("#caret");

const cambioCaretText = document.querySelector("#removeText");

const optimizar = document.querySelector(".btn-optimizar");

const message = document.querySelector(".message-form");

const empresa = document.querySelector("#empresa")

const email = document.querySelector("#email");

const spanBtnCookies = document.querySelector(".slider-input");

const label = document.querySelector("#label");

let containtClass = true;

const cards = document.querySelectorAll('.card-test');

const groups = document.querySelectorAll(".group-img")

const iniciar = document.querySelector(".btn-inicio")

const registro = document.querySelector(".btn-registrarse");


iniciar.addEventListener("click", () => {
 
    window.location.href = "SignIn.html";


});
register.addEventListener("click", () => {
 
    window.location.href = "register.html";


});



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


btnCookiesAceptar.forEach(aceptar =>{

aceptar.addEventListener("click", ()=>{

         cookies.style.display ="none";

});

});

btnConfigurarCookies.addEventListener("click", () => {

    contenedorConfiguracion.style.display = "block";
    overlay.style.display = "block";

    closeWindowsConfigurarCookies.addEventListener("click", () => {
    contenedorConfiguracion.style.display = "none";
     overlay.style.display = "none";


});

});

btnRechazar.addEventListener("click", () => {
        cookies.style.display = "none";
 });

cambioCaret.addEventListener("click", () => {

   
    if(containtClass){
        cambioCaretText.style.display = "none";
        cambioCaret.setAttribute("class","bi bi-caret-up-fill");
        containtClass = false;
    }
    else{
         cambioCaretText.style.display = "block";
         cambioCaret.setAttribute("class","bi bi-caret-down-fill");
         containtClass = true;

    }

});

spanBtnCookies.addEventListener("click", () => {

    const contiene = label.classList.contains("colorLabel");
    const contien2 = spanBtnCookies.classList.contains("slider-efecto");

    if(contiene && contien2){
        label.classList.remove("colorLabel");
        spanBtnCookies.classList.remove("slider-efecto");
    }else{
        label.classList.add("colorLabel");
         spanBtnCookies.classList.add("slider-efecto");
    }

});

optimizar.addEventListener("click", (event) => { 
        event.preventDefault();
        const emailValor = email.value;
        if((empresa.value !== ""  && emailValor !== "") && (emailValor.includes("@")  && emailValor.includes(".")) ){
                message.textContent = "¡Gracias! Tu correo ha sido registrado y pronto recibirás consejos para optimizar tus reuniones.";
                message.classList.add("show");
                setTimeout(() => {
                     message.classList.remove("show");

                },2500 );
        }else{

                message.textContent = "Ingrese un correo y nombre validos.";
                message.classList.add("show");
                setTimeout(() => {
                     message.classList.remove("show");

                },2500 );
            
        }

});
