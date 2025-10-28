
if(nameUser){
    
    const username = localStorage.getItem("username");
    nameUser.textContent = username;
    const nameWelcome = document.querySelector("#nameWelcome");
    nameWelcome.textContent =username;

    
}
