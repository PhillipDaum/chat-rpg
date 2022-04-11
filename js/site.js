
document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
        chatBot();
    }
})
    
//made function from others I couldnt get to work right
function chatBot() {
    //puts up user text  
    let user = document.getElementById("input").value;

    let parUser = document.createElement('p');  
        parUser.textContent = user;   

    //remove all characters except word characters, space, and digits    
    let text = user.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
        text = text
          .replace(/ a /g, " ")   // replaces 'tell me a story' to 'tell me story'
          .replace(/i feel /g, "")
          .replace(/whats/g, "what is") // replaces "whats" to "what is"
          .replace(/please /g, "")
          .replace(/ please/g, "")
          .replace(/r u/g, "are you"); //replaces "r u" to "are you"

    if (compare(userTexts, botReplies, text)) { 
        // search for exact match in `userTexts`
        finalResult = compare(userTexts, botReplies, text);
        } else {
        // if everything else fails, bot produces a random alternative reply
        finalResult = alternative[Math.floor(Math.random() * alternative.length)];
        }

    //WHat BOT says   
    let admin = finalResult;
  
    let parAdmin = document.createElement('p');
        parAdmin.textContent = admin;
        parAdmin.className = "font-monospace";

    document.getElementById("chatloggy").appendChild(parUser);
    document.getElementById("chatloggy").appendChild(parAdmin);
    //removes text after they hit enter
    document.getElementById("input").value = "";

}


function compare(userTexts, botReplies, text) { 
    let reply;
    for (let x = 0; x < userTexts.length; x++) {
        for (let y = 0; y < botReplies.length; y++){
          if (userTexts[x][y] == text) {
            let replies = botReplies[x];
            let reply = replies[Math.floor(Math.random() * replies.length)];
          }
        }
      }
      return reply;
}


//their convo arrays
const userTexts = [
    //0 
    ["hi", "hey", "hello", "good morning", "good afternoon", "good day"],
    //1
    ["how are you", "how is life", "how are things", "how are you doing", 
    "are you doing good", "are you fine", "how is your day going", "how is your day", 
    "what's up", "whats up", "you good"],
    //2
    ["what are you doing", "what is going on", "what is up", "how is your day", 
    "what's up", "whats up", "you good"],
    //3
    ["how old are you", "are you old"],
    //4
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    //5
    ["who created you", "who made you", "were you created"]
    ]

const botReplies = [
    //0
    ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
    //1
    [
        "Fine... and you?",
        "Pretty well, and you?",
        "Fantastic, and you?"
    ],
    //2
    [
        "Nothing much",
        "About to go to sleep",
        "Can you guess?",
        "I don't know actually"
    ],
    //3
    ["I am infinite"],
    //4
    ["I am just a bot", "I am a bot. What are you?"],
    //5
    ["The one true God, JavaScript"]
    ]

//Their alternative/error texts n stuffs
const alternative = [
    "Same",
    "Go on...",
    "Bro...",
    "Try again",
    "I'm listening...",
    "I don't understand :/"
    ]
