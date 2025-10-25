export class Leader {
        static crearElementos(titleElement){

        const contenedor = document.createElement("div");
        const overlay = document.createElement("div");
        const span = [];
        const title = document.createElement("h3");
        const loader = document.createElement("div");

        title.textContent = titleElement;
       
        for(let i = 0; i <= 3; i++){
            let element = document.createElement("span");
            span[i] = element;
            span[i].id = 'span'+ i;
            loader.appendChild(span[i]);
        }
    
        overlay.classList.add("overlay");
        loader.classList.add("loader");
        contenedor.classList.add("contenedorLoader");

        contenedor.appendChild(title);
        contenedor.appendChild(loader);
        overlay.appendChild(contenedor);
        return overlay;
         }

       static show(duracion = 2000, message = "Cargando", callBack) {

            const contenido = this.crearElementos("Cargando");
            const contenidoHijo = contenido.children[0];
            const titleHijo = contenidoHijo.children[0];
            document.body.appendChild(contenido);
            
            setTimeout(() => {
              titleHijo.textContent = message;
            }, duracion);

             setTimeout(() => {

             if(typeof callBack === "function"){
                callBack();
              }

              titleHijo.textContent = message;
              this.hidden(contenido);

            }, duracion+2000);        
        }

        static hidden(contenido){

            if(contenido && contenido.parentNode){
                contenido.parentNode.removeChild(contenido);
            }

        }
    }
