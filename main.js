    const btn = document.querySelector('.btn-ingreso');
    const email = document.querySelector('#correo')
    const password = document.querySelector('#password');
    const message = document.querySelector('#message-error');


    btn.addEventListener("click",  () =>{    
        if(email.value.trim() === ""){

            message.textContent = "Ingrese un email valido";
            email.classList.add("error-input");
            email.style.borderBottom = "1px solid red";   
        }
    });