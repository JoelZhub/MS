

document.addEventListener("DOMContentLoaded", () =>{

const saveBtn = document.querySelector("#saveBtn");

const cancelarBtn = document.querySelector("#cancelarBtn");

//

const nombre = document.querySelector("#nombre");

const apellido = document.querySelector("#apellido");

const email = document.querySelector("#email");

const telefono =document.querySelector("#telefono");

const nombreEmpresa = document.querySelector("#nombreEmpresa");

const rnc = document.querySelector("#rnc");

const emailEmpresa = document.querySelector("#emailEmpresa");

//
const mgsEmailEmpresa = document.querySelector("#messageEmailEmpresa");

const mgsRNC = document.querySelector("#messageRNC");

const mgsEmailPersonal = document.querySelector("#messageEmailPersonal")

const mgsNombrePersonal = document.querySelector("#messageNombrePersonal");

const mgsApellidoPersonal = document.querySelector("#messageApellidoPersonal");

const mgsTelefonoPersonal = document.querySelector("#messageTelefonoPersonal");

const mgsNombreEmpresa = document.querySelector("#messageNombreEmpresa");



//valodar Emails 
email.addEventListener("input", () => {

     if(!validarEmail(email.value)){

        email.classList.add("error");
        mgsEmailPersonal.textContent = "Ingrese un email personal valido";

    }else{
            email.classList.remove("error");
            mgsEmailPersonal.textContent = ""
    }


});

emailEmpresa.addEventListener("input", () => {

     if(!validarEmail(emailEmpresa.value)){

        emailEmpresa.classList.add("error");
        mgsEmailEmpresa.textContent = "Ingrese un email empresarial valido";

    }else{
            emailEmpresa.classList.remove("error");
            mgsEmailEmpresa.textContent = ""
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

    if(local.startsWith('.') || dominio.endsWith('.')) return false;

    return true;
}
// validar campos de textContent

nombre.addEventListener("input", () => {

    if(!validarNombre(nombre.value)){

        nombre.classList.add("error");
        mgsNombrePersonal.textContent = "Ingrese un nombre personal valido";
    }else{
        nombre.classList.remove("error");
        mgsNombrePersonal.textContent = "";
    }


});

nombreEmpresa.addEventListener("input", () => {

    if(!validarNombre(nombreEmpresa.value)){

        nombreEmpresa.classList.add("error");
        mgsNombreEmpresa.textContent = "Ingrese un nombre empresarial valido";
    }else{
        nombreEmpresa.classList.remove("error");
        mgsNombreEmpresa.textContent = "";
    }


});

apellido.addEventListener("input", () => {

    if(!validarNombre(apellido.value)){

        apellido.classList.add("error");
        mgsApellidoPersonal.textContent = "Ingrese un appelido valido";
    }else{
        apellido.classList.remove("error");
        mgsApellidoPersonal.textContent = "";
    }


});
function validarNombre(nombre){

    const caracter = [...nombre].some(c => /[^a-zA-Z]/.test(c));

    if(caracter || nombre === "") return false;
    return true;
}
//validar campos numericos

telefono.addEventListener("input", () => {

    if(!validarTelefono(telefono.value)) {
         telefono.classList.add("error");
        mgsTelefonoPersonal.textContent = "Ingrese un telefono valido";
    }else{
        telefono.classList.remove("error");
        mgsTelefonoPersonal.textContent = "";
    }

});

rnc.addEventListener("input", () => {

    if(!validarRNC(rnc.value)){
         rnc.classList.add("error");
        mgsRNC.textContent = "Ingrese un RNC valido";
    }else{
         rnc.classList.remove("error");
            mgsRNC.textContent = "";
    }


});

function validarTelefono(telefono){
    if(telefono.length > 10 || telefono.length < 10 || isNaN(telefono)) return false;
    return true;
}

function validarRNC(rnc){
    if(rnc.length > 9  || rnc.length < 9 || isNaN(rnc)) return false;
    return true;
}

let campos = [


    {input: nombre, validator: validarNombre, msg: mgsNombrePersonal, errorMsg: "Ingrese un nombre personal valido"},
    {input: apellido,  validator: validarApellido, msg: mgsApellidoPersonal, errorMsg: "Ingrese un apellido valido"},
    {input: email, validator: validarEmail, msg: mgsEmailPersonal, errorMsg: "Ingrese un email personal valido"},
    {input: telefono, validator: validarTelefono, msg: mgsTelefonoPersonal, errorMsg: "Ingrese un telefono valido"},
    {input: nombreEmpresa, validator: validarNombre, msg: mgsNombreEmpresa, }

];

saveBtn.addEventListener("click", () => {


    if(nombre.value && apellido.value && email.value 
        && telefono.value && nombreEmpresa.value && rnc.value && email.value){



    }
    else{

        if(!validarNombre(nombre.value)){
             nombre.classList.add("error");
             mgsNombrePersonal.textContent = "Ingrese un nombre personal valido";
            }
        else if(!validarEmail(email.value)){
                
                email.classList.add("error");
                mgsEmailPersonal.textContent = "Ingrese un email personal valido";
         }
          else if(!validarNombre(apellido.value)){
             apellido.classList.add("error");
            mgsApellidoPersonal.textContent = "Ingrese un appelido valido";
        }
          else if(!validarTelefono(telefono.value)){
            telefono.classList.add("error");
            mgsTelefonoPersonal.textContent = "Ingrese un telefono valido";
        }
        else if(!validarNombre(nombreEmpresa.value)){
            nombreEmpresa.classList.add("error");
            mgsNombreEmpresa.textContent = "Ingrese un nombre empresarial valido";
        }
       
       else  if(!validarRNC(rnc.value)){
              rnc.classList.add("error");
                mgsRNC.textContent = "Ingrese un RNC valido";
        }
        else if(!validarEmail(emailEmpresa.value)){
             emailEmpresa.classList.add("error");
             mgsEmailEmpresa.textContent = "Ingrese un email empresarial valido";
        }
    }

});

cancelarBtn.addEventListener("click", () => {

     window.location.href = "dahsboardHome.html";


});
    
});

