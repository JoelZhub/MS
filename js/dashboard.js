
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

btnsGraficos.forEach(btn => {

     if(btn.classList.contains('active')){
                  btn.classList.remove('active');
        }
        btn.addEventListener("click", () => {
            
        
            
           

        });


});