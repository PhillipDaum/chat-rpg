

//my chatbot 

// makes enter key work
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
      userText();
    }
})


//need to send text to bot and delete


function userText() {

    let user = document.getElementById("user-input").
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
