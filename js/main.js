    const btn = document.querySelector('.btn-ingreso');
    const email = document.querySelector('#correo')
    const password = document.querySelector('#password');
    const message = document.querySelector('#message-error');
    const email_icon = document.querySelector("#email-icon");
    const password_icon = document.querySelector("#eye-icon");


    email.addEventListener("input", () =>{

        if(email.value != ""){
            email_icon.style.display = "inline";
                
        }else{
            email_icon.style.display = "none";
        }   
    });

    password.addEventListener("input", () => {
        
        if(password.value != ""){
        password_icon.style.display = "inline";
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
        }else{
            password_icon.style.display = "none";     
        }
    });


 // btn.addEventListener("click",  () =>{    
    //     if(email.value.trim() === ""){

    //         message.textContent = "Ingrese un email valido";
    //         email.classList.add("error-input");
    //         email.style.borderBottom = "1px solid red";   
    //     }
    // });
