import {Leader} from '../js/loader.js';
document.addEventListener("DOMContentLoaded", () =>{

const nameUser = document.querySelector("#nameUser");   


if(nameUser){
    const username = localStorage.getItem("username");
    nameUser.textContent = username;
}


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

function validarNombre(nombre){

    const caracter = [...nombre].some(c => /[^a-zA-Z]/.test(c));

    if(caracter || nombre === "" || nombre.length < 2) return false;
    return true;
}

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
    {input: apellido,  validator: validarNombre, msg: mgsApellidoPersonal, errorMsg: "Ingrese un apellido valido"},
    {input: email, validator: validarEmail, msg: mgsEmailPersonal, errorMsg: "Ingrese un email personal valido"},
    {input: telefono, validator: validarTelefono, msg: mgsTelefonoPersonal, errorMsg: "Ingrese un telefono valido (10 digitos sin guiones)"},
    {input: nombreEmpresa, validator: validarNombre, msg: mgsNombreEmpresa, errorMsg: "Ingrese un nombre empresarial valido"},
    {input:emailEmpresa, validator: validarEmail, msg: mgsEmailEmpresa, errorMsg: "Ingrese un email empresarial valido"},
    {input: rnc, validator: validarRNC, msg: mgsRNC, errorMsg: "Ingrese un RNC valido (9 digitos sin guiones)"}
];

//validar entrada de inputs 


campos.forEach(campo => {

    campo.input.addEventListener("input", () => {

         campo.input.classList.remove("error");
         campo.msg.textContent = "";
        if(!campo.validator(campo.input.value)){
            campo.input.classList.add("error");
            campo.msg.textContent = campo.errorMsg;
        }
    });
  

});


saveBtn.addEventListener("click", (e) => {

    e.preventDefault();
    let formValido = true;

    campos.forEach(campo => {

        campo.input.classList.remove("error");
        campo.msg.textContent = "";

        if(!campo.input.value || !campo.validator(campo.input.value)){
            campo.input.classList.add("error");
            campo.msg.textContent = campo.errorMsg;
            formValido = false;
        }

    });

    if(formValido){
            Leader.show(2000, "Datos guardados correctamente", () => {
                window.location.href = 'dahsboardHome.html';
            });
            
    }
   

});

cancelarBtn.addEventListener("click", () => {

     window.location.href = "dahsboardHome.html";


});
    
});

