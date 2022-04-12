
//Welcome messages
function welcomeTo() {
    let welcome = "Type Something Below";

    let wMessage = document.createElement('div');  
        wMessage.textContent = welcome;
        wMessage.className = "col col-8 ms-5 mb-2 fs-2 font-monospace lh-sm";

    document.getElementById("chatloggy").appendChild(wMessage);
}

//enter key starts shit
document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
        chatBot();
    }
})


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

    //uptates HTML DOM 
    let parUser = document.createElement('div');  
    parUser.textContent = user;
    parUser.className = "col p-5 fs-2 lh-sm"
    document.getElementById("chatloggy").appendChild(parUser);
  
    //matches user input with response
    if (compare(userTexts, botReplies, text)) { 
        // search for exact match in `userTexts`
        finalResult = compare(userTexts, botReplies, text);
        console.log(`${oneHen}`); 
     } else {
      // if everything else fails, bot produces a random alternative reply
      finalResult = alternative[Math.floor(Math.random() * alternative.length)];
     }

    let parBot = document.createElement('div')  
    parBot.textContent = finalResult; //reply don't work
    console.log(`${oneHen}`); 
    parBot.className = "col p-5 fs-2 font-monospace lh-sm";
    document.getElementById("chatloggy").appendChild(parBot);

    //removes text after they hit enter
    document.getElementById("input").value = "";
} 



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


//a game to debug that later can be a feature
    const oneHen = [
        //0 
        ["one hen"],
        //1
        ["one hen", "two ducks"],
        //2
        ["one hen", "two ducks", "three squaking geese"],
        //3
        ["one hen", "two ducks", "three squaking geese", "four corpulent porpuses"],
        ]