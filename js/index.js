 //Welcome messages
function welcomeTo() {
    let wMessage = document.createElement('h2');  
        wMessage.textContent = welcome[Math.floor(Math.random() * welcome.length)];
        wMessage.className = "text-info font-monospace";
        wMessage.id = "change";

    //uptates HTML DOM
    document.getElementById("chatloggy").appendChild(wMessage);

    //genereates random user avatar
    document.getElementById('username').textContent = userName[Math.floor(Math.random() * userName.length)];

    //user input text area is ready to by typed in
    document.getElementById('input').focus();
}


//enter key works
document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
        chatBot();
    }
})


//comparing function for matching user input with response
function compare(a, b, c) { 
    for (let x = 0; x < a.length; x++) {
        for (let y = 0; y < b.length; y++){
          if (a[x][y] == c) {
            let replies = b[x];
            let reply = replies[Math.floor(Math.random() * replies.length)];
            return reply;
          }
        }
    }
}


//this runs the game from user input
//why is it at bottom - load last?
function playerInput(j) {
    var command = j.split(" ")[0];
    switch (command) {
        case "go":
            var dir = j.split(" ")[1];
            changeRoom(dir);
            break;
        case "help":
            showHelp();
            break;
        case "inventory":
            showInventory();
            break;
        default:
            break;
    }
}


// main chat function
function chatBot() {
    let user = document.getElementById("input").value;
    //remove all characters except word characters, space, and digits    
    let text = user.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
         text = text
         .replace(/ a /g, " ")   // replaces 'tell me a story' to 'tell me story'
         .replace(/i feel /g, "")
         .replace(/whats/g, "what is") // replaces "whats" to "what is"
         .replace(/please /g, "")
         .replace(/ please/g, "")
         .replace(/r u/g, "are you"); //replaces "r u" to "are you"


    //makes username print also when DOM updates
    let avatar = document.getElementById("username").textContent;
    let finalUser = avatar + user;

    //uptates HTML DOM with user input and username
    let parUser = document.createElement('h2');  
    parUser.textContent = finalUser;
    parUser.className = "text-success"
    document.getElementById("chatloggy").appendChild(parUser);
  
    //removes text after they hit enter
    document.getElementById("input").value = "";

    //keeps input in view needs to work on mobile too
    document.getElementById('username').scrollIntoView(true);

    //deletes welcome message
    document.getElementById('change').textContent = "";

    //First is it part of the rpg?
    //that updates its own HTML DOM
    if (playerInput(text)) {
        //next searches for links by keyword 
        } else { 
            if (includes(text)) {   
                key = includes(text);
                finalResult = compare(userTexts, botReplies, key);
            } else {   
                if (compare(userTexts, botReplies, text)) { 
                    // search for exact match in `userTexts`
                    finalResult = compare(userTexts, botReplies, text);
                } else {
                    // if everything else fails, bot produces a random alternative reply
                    finalResult = alternative[Math.floor(Math.random() * alternative.length)];
                    }
            }
    
    
    }
    
    //uptates HTML DOM 
    let parBot = document.createElement('div')  
    parBot.innerHTML = finalResult;
    parBot.className = "text-info p-5 fs-3 font-monospace lh-sm";
    document.getElementById("chatloggy").appendChild(parBot);

} 
