const cards = document.querySelectorAll('.card-test');

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
