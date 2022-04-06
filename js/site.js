//my chatbot function


//Prints USER INPUT
function userText() {

    let user = document.getElementById("chat").
    value;

    let div = document.createElement('p');  
    //creating element

    div.textContent = user;     
    //adding text on the element
    document.body.appendChild(div);

}

//Creates Chat log