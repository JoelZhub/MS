    document.addEventListener("DOMContentLoaded", () => {
    //btns
    const btnContinuar = document.querySelector("#btnContinuar");
    const btnRegistrarse = document.querySelector("#btnContinuar");
    const btnRegresar = document.querySelector("#regresar");

    //inputs
    const email = document.querySelector('#correo')
    const password = document.querySelector('#password');
    const phone = document.querySelector("#phone");
    const empresa = document.querySelector("#empresa");
    const rnc = document.querySelector("#rnc");

    //messahge
    const message = document.querySelector('#message-error');

    //iconos
    const email_icon = document.querySelector("#email-icon");
    const password_icon = document.querySelector("#eye-icon");
    const phone_icon = document.querySelector("#phone-icon");
    const empresa_icon = document.querySelector("#empresa-icon");
    const rnc_icon = document.querySelector("#rnc-icon");

    //forms

    const bloqueFirst = document.querySelector("#bloqueFirst");
    const bloqueSecond = document.querySelector("#bloqueSecond");

// aplicar animacion de muestra de iconos


empresa.addEventListener("focus", () => {

empresa_icon.classList.remove("ocultar");

});


rnc.addEventListener("focus", () => {

    rnc_icon.classList.remove("ocultar");

});



email.addEventListener("focus", () =>{
        email_icon.classList.remove("ocultar");
    });

phone.addEventListener("focus", () => {

        phone_icon.classList.remove("ocultar");

    });

password.addEventListener("focus", ()=> {

            password_icon.classList.remove("ocultar");
            let click = true;
            password_icon.addEventListener("click", () =>{
            
            if(click){
                password_icon.setAttribute("class", "btn-eye-password mostrar  bi bi-eye-slash");
                password.type = "text";
                click = false;
                
            }else{
                  password_icon.setAttribute("class", "btn-eye-password mostrar  bi bi-eye");
                  password.type = "password";
                  click=true;
            }
            
        });        
});

// mostrar segundo bloque del formulario -> validar campos

empresa.addEventListener("input", () => {

   empresa.classList.remove("error-input");
   message.textContent = "";

});

rnc.addEventListener("input", () =>{
    if(rnc.value.length < 9){
        rnc.classList.add("error-input");
        message.textContent = "Error ingrese un RNC valido";
    }else{
     rnc.classList.remove("error-input");
     message.textContent = "";

    }
    
    
});

rnc.addEventListener("keydown", (e) => {
    const teclas = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if(teclas.includes(e.key)) return;
    if(!/^\d$/.test(e.key)){
        e.preventDefault();
    }

});


btnContinuar.addEventListener("click", () => {

    if(validarNombreEmpresa(empresa.value) && rnc.value.length === 9){

        const googleElement = document.querySelectorAll(".google-element");
        const btnsContinueRegister = document.querySelector(".registro-btns");

        bloqueFirst.classList.add("ocultarBloque");
        bloqueSecond.classList.remove("ocultarBloque");
      
        btnsContinueRegister.classList.remove("ocultar-btn");

        btnContinuar.classList.add("ocultar-btn")

        googleElement.forEach(element => {
                element.classList.add("ocultar-btn");
        });
        
       
    }else{

        if(!validarNombreEmpresa(empresa.value)){
            empresa.classList.add("error-input");
        }
        if(rnc.value.length < 9 || rnc.value.length > 9){
            rnc.classList.add("error-input");
        }

        message.textContent = "Nombre o RNC invalidos";   

    }

});

function validarNombreEmpresa(nombreEmpresa){
    if(!isNaN(nombreEmpresa) || nombreEmpresa === null) return false;
    if(nombreEmpresa === "") return false;
    return true;
}

function validarRncEmpresa(rnc){

    if(rnc.length > 12 || !isNaN(rnc) || rnc.contains("-")) return false;
    return true;
}   


//validar campos antes del registro  -> redireccionar al dah

const regresar = document.querySelector("#regresar");

const registrarse = document.querySelector("#registrarse");

regresar.addEventListener("click", () => {

        const googleElement = document.querySelectorAll(".google-element");
        const btnsContinueRegister = document.querySelector(".registro-btns");

        bloqueFirst.classList.remove("ocultarBloque");
        bloqueSecond.classList.add("ocultarBloque");

        btnsContinueRegister.classList.add("ocultar-btn");
        
        btnContinuar.classList.remove("ocultar-btn")

        googleElement.forEach(element => {
                element.classList.remove("ocultar-btn");
        });
        


});

email.addEventListener("input", () =>{

    if(!validarEmail(email.value)){

        email.classList.add("error-input");
         message.textContent = "Ingrese un email valido";
    }else{
        email.classList.remove("error-input")
         message.textContent = "";
    }


});

function validarEmail(email){

    email = email.trim().toLowerCase();

    const partesEmail = email.split('@');

    if(partesEmail.length !== 2) return false;

    const local = partesEmail[0];
    const dominio = partesEmail[1];

    if(!local || !dominio) return false;

    if(local > 64 || dominio > 255) return false;

    if(local.includes('..')) return false;

    if(local.startsWith('.') || local.endsWith('.')) return false;

    return true;
}

phone.addEventListener("input", () => {

    if(!validarPhone(phone.value)){
        phone.classList.add("error-input");
        message.textContent = "Ingrese un teléfono valido (sin guiones) ";

    }else{
        phone.classList.remove("error-input");
        message.textContent = "";
    }


});

function validarPhone(phone){

    const numero = Number(phone);
    if(!numero || phone.length > 10 || phone.length < 10) return false;
    return true;

}

password.addEventListener("input", () => {

    if(!passwordValido(password.value)){

        password.classList.add("error-input");
        message.textContent = "Ingrese una password valida (6 digitos minimo)";
    }else{
         password.classList.remove("error-input");
        message.textContent = "";
    }

});

function passwordValido(password){

    if(password.length < 6) return false;
    return true;
}   

registrarse.addEventListener("click", () => {

  

    if(validarEmail(email.value) && validarPhone(phone.value) && passwordValido(password.value)){

        window.location.href = "dahshboardHome.html";


    }


});


});