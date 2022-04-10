
//my chatbot function
function userText() {

    let user = document.getElementById("chat").
    value;

    let parUser = document.createElement('p');  
        parUser.textContent = user;   
    
    //INSTERT BOT's TEXT HERE    
    let admin = "";
  
    let parAdmin = document.createElement('p');
        parAdmin.textContent = "admin will talk here";
        parAdmin.className = "font-monospace";

    document.getElementById("chatloggy").appendChild(parUser);

    document.getElementById("chatloggy").appendChild(parAdmin);
}
