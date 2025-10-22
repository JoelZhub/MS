    const btn = document.querySelector('.btn-ingreso');
    const email = document.querySelector('#correo')
    const password = document.querySelector('#password');
    const message = document.querySelector('#message-error');
    const email_icon = document.querySelector("#email-icon");
    const password_icon = document.querySelector("#eye-icon");
    const password_contenedor = document.querySelector("#password_contenedor");



email.addEventListener("focus", () =>{
        email_icon.classList.remove("ocultar");
    });

  
password.addEventListener("focus", ()=> {

            password_icon.classList.remove("ocultar");
             let click = true;
            password_icon.addEventListener("click", () =>{
            
            if(click){
                password_icon.setAttribute("class", "btn-eye-password  bi bi-eye-slash");
                password.type = "text";
                click = false;
                
            }else{
                  password_icon.setAttribute("class", "btn-eye-password  bi bi-eye");
                  password.type = "password";
                  click=true;
            }
            
        });        
});

email.addEventListener("input", () =>{

    if(!validarEmail(email.value)){

        email.classList.add("error-input");
         message.textContent = "Ingrese un email invalido";
    }else{
        email.classList.remove("error-input")
         message.textContent = "";
    }


});

btn.addEventListener("click", () => {

     const emailV =  validarEmail(email.value);
    const passwordV = password.value >= 6;

    if(emailV && password.value !== "" && password.value.length >= 6){
        email.value = "";
        password.value = "";
        window.location.href = "dahsboardHome.html";

    }else{
        if(!emailV){
            email.classList.remove("error-input")
        }
        if(!passwordV ){
            password.classList.add("error-input");
        }
        
         message.textContent = "Password o email incorrectos";
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