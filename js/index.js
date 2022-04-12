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
  
    //matches user input with response
    if (includes(text)) { 
        //first searches for links by keyword       
        key = includes(text);
        console.log(key);
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

    //uptates HTML DOM 
    let parBot = document.createElement('div')  
    parBot.innerHTML = finalResult;
    parBot.className = "text-info p-5 fs-3 font-monospace lh-sm";
    document.getElementById("chatloggy").appendChild(parBot);

    //removes text after they hit enter
    document.getElementById("input").value = "";

    //keeps input in view
    document.getElementById('username').scrollIntoView();

    //deletes welcome message
    document.getElementById('change').textContent = "";
} 

//messy function to do keywords
function includes(a){
        if (a.includes("linkedin")) {
            let reply = "linkedin";
            return reply;
        }
        if (a.includes("resume")) {
            let reply = "resume";
            return reply;
        }  
        if (a.includes("git")) {
            let reply = "git";
            return reply;
        }  
        if (a.includes("github")) {
            let reply = "github";
            return reply;
        }  
        if (a.includes("dev")) {
            let reply = "dev";
            return reply;
        }
}

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
    ["who created you", "who made you", "were you created"],
    //goes to my LinkedIn
    ["linkedin", "resume"],
    //goes to my Github
    ["github", "programming", "developer", "dev", "coding", "git"]
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
    ["The one true God, JavaScript"],
    //goes to my LinkedIn
    ["<p>Would you like to see Phil's LinkedIn? </p> <a class='btn btn-info ms-5' target='_blank' href='https://www.linkedin.com/in/daumphil/'> <i class='fa fs-1 p-2 fa-linkedin'></i></a>"],
    //goes to my GitHub
    ["<p>Would you like to see Phil's GitHub? </p> <a class='btn btn-info ms-5' target='_blank' href='https://github.com/PhillipDaum'> <i class='fa fs-1 p-2 fa-github'></i></a>"]

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
    ["one hen", "two ducks", "three squaking geese", "four corpulent porpuses"]
]


//various welcome messages to welcome user
const welcome = [
    "type something below",
    "enter query or something",
    "write something and hit enter"
]


//names for user
const userName = [
    "you: ",
    "end user: ",
    "earthing: ",
    "human: "
]


