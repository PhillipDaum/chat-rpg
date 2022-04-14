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

//Main RPG Variables
var currentRoom = "start";
var commands = ["go", "pickup", "inventory", "talk"];
var inventory = ["sword", "shield"];



function showHelp() {
    let helpMenu = document.createElement('div');
        helpMenu.innerHTML = "Here are the possible commands";
        helpMenu.className = "text-info p-2 fs-3 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(helpMenu);
        
    for (var i = 0; i < commands.length; i++) {
        let commandsMenu = document.createElement('div');
        commandsMenu.innerHTML = commands[i];
        commandsMenu.className = "text-info fs-3 ms-3 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(commandsMenu);
    }
}


//changes room or conversation
function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir];
        let reply = rooms[currentRoom].description;
        let rightWay = document.createElement('div');
        rightWay.innerHTML = reply;
        rightWay.className = "text-info p-2 fs-3 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(rightWay);
       
    } else {
        let wrongWay = document.createElement('div');
        wrongWay.innerHTML = "dead end";
        wrongWay.className = "text-info p-2 fs-3 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(wrongWay);
        }
}


//displays inventory
function showInventory() {
    let inventoryMenu = document.createElement('div');
        inventoryMenu.innerHTML = "this is what you have:";
        inventoryMenu.className = "text-info p-2 fs-3 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(inventoryMenu);
    
    for (var i = 0; i < inventory.length; i++) {
        let inventoryList = document.createElement('div');
        inventoryList.innerHTML = inventory[i];
        inventoryList.className = "text-info fs-3 ms-3 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(inventoryList);
    }
}


