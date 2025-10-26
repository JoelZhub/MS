if(nameUser){
    const username = localStorage.getItem("username");
    nameUser.textContent = username;
}

const saveBtn = document.querySelector("#saveBtn");
const cancelarBtn = document.querySelector("#cancelarBtn");

//
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const posicion = document.querySelector("#psicion");
const rol = document.querySelector("#rol");
const departamento = document.querySelector("#departamento");
const email = document.querySelector("#email");
const telefono =document.querySelector("#telefono");


//
const mgsPosicon = document.querySelector("#messagePosicionTrabajo");
const mgsRol = document.querySelector("#messageRol");
const mgsNombrePersonal = document.querySelector("#messageNombrePersonal");
const mgsApellidoPersonal = document.querySelector("#messageApellidoPersonal");
const mgsDepartamento = document.querySelector("#messageDepartamento");
const mgsEmailPersonal = document.querySelector("#messageEmailPersonal")
const mgsTelefonoPersonal = document.querySelector("#messageTelefonoPersonal");

const campos  = [

    {
        input: nombre, 
        validator: validarTexto, 
        msg: mgsNombrePersonal, 
        errorMsg: "Ingrese un nombre valido" },
    {
        input: apellido, 
        validator: validarTexto, 
        msg: mgsApellidoPersonal, 
        errorMsg: "Ingrese un apellido valido"},
    {
        input: rol,
        validator: validarTexto, 
        msg: mgsRol,
        errorMsg: "Ingrese un rol valido"
    },
    {
        input: departamento, 
        validator: validarTexto,
        msg: mgsDepartamento,
        errorMsg: "Ingrese un departamento valido"

    },
    {
        input: posicion,
        validator: validarTexto,
        msg: mgsPosicon,
        errorMsg: "Ingrese una posicion valida"
    },
    {

        input: email,
        validator: validarEmail,
        msg: mgsEmailPersonal,
        errorMsg: "Ingrese un email valido"

    },
    {
        input: telefono,
        validator: validarTelefono,
        msg: mgsTelefonoPersonal,
        errorMsg: "Ingrese un telefono valido (10 digitos sin guiones)"
    }

];

campos.forEach(campo => {

    campo.input.addEventListener("input", () => {

         campo.input.classList.remove("error-input");
         campo.msg.textContent = "";
        if(!campo.validator(campo.input.value)){
            campo.input.classList.add("error-input");
            campo.msg.textContent = campo.errorMsg;
        }
    });
  

});


function validarTexto(text){

    const caracter = [...text].some(c => /[^a-zA-Z]/.test(c));
    if(caracter || text === "" || text.length < 2) return false;
    return true;
}

function validarTelefono(telefono){
    if(telefono.length > 10 || telefono.length < 10 || isNaN(telefono)) return false;
    return true;
}

function validarEmail(email){

    email = email.trim().toLowerCase();
    const separar = email.split("@");
    if(separar.length !== 2 ) return false;

    const lado  = separar[0];
    const dominio = separar[1];

    if(!lado || !dominio) return false;
    if(lado.startsWith(".") || dominio.endsWith(".")) return false;
    if(lado.length > 64 || dominio.length > 255 ) return false;
    if(lado.includes('..' || lado.includes(','))) return false;
    if(dominio.includes('..') || dominio.includes(',')) return false;

    return true;

}


saveBtn.addEventListener("click", (e) => {


    let formValido = true;
    e.preventDefault();
        campos.forEach(campo => {
            campo.input.classList.remove("error-input");
            campo.msg.textContent = "";

            if(!campo.input.value || !campo.validator(campo.input.value)){

                campo.input.classList.add("error-input");
                campo.msg.textContent = campo.errorMsg;
                formValido = false;
            }

        });


    if(formValido){

        //
    }

} );

cancelarBtn.addEventListener("click", () => {

    window.location.href =  "dahsboardHome.html";

});