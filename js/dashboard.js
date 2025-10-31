if(nameUser){
    
    const username = localStorage.getItem("username");
    nameUser.textContent = username;
    const nameWelcome = document.querySelector("#nameWelcome");
    nameWelcome.textContent =username;

    
}
const btnEliminate = document.querySelectorAll("#eliminate");
btnEliminate.forEach(btn => {
    btn.addEventListener("click", () =>{      
        btn.parentElement.parentElement.remove();
    });

});


const container = document.querySelector('.boxReunion');
const content = document.querySelector('.contentReunion');
const scrollBar = document.querySelector('.scrollBox');

const scrollBarHeight = container.clientHeight / content.scrollHeight * container.clientHeight;
scrollBar.style.height = scrollBarHeight + 'px';

let isDragging = false;
let startY, startTop;

scrollBar.addEventListener('mousedown', e => {
  isDragging = true;
  startY = e.clientY;
  startTop = scrollBar.offsetTop;
  document.body.style.userSelect = 'none';
});

document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const delta = e.clientY - startY;
  let newTop = startTop + delta;

  newTop = Math.max(0, Math.min(newTop, container.clientHeight - scrollBarHeight));
  scrollBar.style.top = newTop + 'px';

  const scrollPercent = newTop / (container.clientHeight - scrollBarHeight);
  content.style.top = -scrollPercent * (content.scrollHeight - container.clientHeight) + 'px';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.userSelect = 'auto';
});


const btnsGraficos = document.querySelectorAll(".btnGrafico");
const grafico = document.querySelector("#grafico");

btnsGraficos.forEach(btn => {
   btn.addEventListener("click", (e) => { 

            btnsGraficos.forEach(btnActive => {
                btnActive.classList.remove("active");
                grafico.classList.remove("asistencia");
                grafico.classList.remove("participante");
            });

            e.target.classList.add("active");

          if(e.target.id === 'btnGraficosPart'){
              grafico.classList.add("participante");

          }
          if (e.target.id === 'btnGraficosAsis'){
    
                grafico.classList.add("asistencia");
           }
          
      });      
});
  
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];


const contenedor = document.querySelector(".eje-y");
let mesActivo = "Enero";
function newListMonths(activo, meses){
    
        let newArray = [

              {nombre: activo, activo: true} 

        ];

        for (let index = 0; index < meses.length; index++) {
            if(meses[index] === activo) continue;
            newArray.push({nombre: meses[index], activo: false});
           
        }

        return newArray;
  }

function reescribirMeses(array){
 
  contenedor.innerHTML = '';
  array.forEach(mes => {

          const span = document.createElement('span');
          span.textContent = mes.nombre;

          if(mes.activo){
              span.classList.add('element-activo');
          }
          span.addEventListener("click", () => {
                mesActivo = mes.nombre;
                const newArray = newListMonths(mesActivo, meses);
                reescribirMeses(newArray);
          });

          contenedor.appendChild(span);
          
  });
    
}

reescribirMeses(newListMonths(mesActivo, meses));