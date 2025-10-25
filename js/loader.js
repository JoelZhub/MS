document.addEventListener("DOMContentLoaded", () => {
class Leader {

        static crearElementos(){

        const contenedor = document.createElement("div");
        const span = [];
        const title = document.createElement("h3");
        const loader = document.createElement("div");

        title.textContent = "Cargando";
        contenedor.appendChild(title);
        
    
        for(let i = 0; i <= 3; i++){
            let element = document.createElement("span");
            span[i] = element;
            span[i].id = 'span'+ i;
            loader.appendChild(span[i]);
        }
    
        loader.classList.add("loader");
        contenedor.classList.add("contenedorLoader");
        contenedor.appendChild(loader);
        return contenedor;
    }

       static show() {
            
            document.body.appendChild(this.crearElementos());
        }

        static hidden(){


        }


    }

  
    Leader.show();



});