
//Main RPG Variables
var commands = {
    rpg: [
        { name: "help", "description": ["displays this"] },
        { name: "go", "operators": ["forward", "left", "right", "back"] },
        { name: "inventory", "description": ["displeays your inventory"] },
        { name: "look", "description": ["look around a room or at something in the room"] }
    ]
}

//Displays Help menu
function showHelp() {
    let helpMenu = document.createElement('div');
      //genereates random admin message
        helpMenu.textContent = admin[Math.floor(Math.random() * admin.length)];
        helpMenu.className = "text-info p-2 fs-3 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(helpMenu);
        console.log("pee");
    for (var i = 0; i < commands.rpg.length; i++) {
        let commandsMenu = document.createElement('div');
        commandsMenu.innerHTML = commands.rpg[i].name;
        commandsMenu.className = "text-info fs-3 ms-5 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(commandsMenu);
    }
}


var items = {
    social: [
        { name: "linkedin", "description": ["forwardback"] },
        { name: "github", "description": ["forwardback"] },
        { name: "youtube", "description": ["forwardback"] },
    ]
}

var keys = {
    social: [
        //standard keys
        { name: "gold", "description": ["forwardback"] },
        { name: "silver", "description": ["forwardback"] },
        //secret keys
        { name: "brown", "description": ["the weird"] },
        { name: "red", "description": ["rickroll"] },
        { name: "black", "description": ["the special key"] },
    ]
}

//displays inventory
function showInventory() {
    let inventoryMenu = document.createElement('div');
        inventoryMenu.innerHTML = "this is what you have:";
        inventoryMenu.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(inventoryMenu);
    
    for (var i = 0; i;) {
        let inventoryList = document.createElement('div');
        inventoryList.innerHTML = inventory;
        inventoryList.className = "text-info fs-3 ms-3 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(inventoryList);
    }
}


//changes room from rooms.js
// with command go
// and operators forward, left, right, back
function changeRoom(dir) {
        switch (dir) {
            case "forward":
                let way1 = document.createElement('div');
                way1.innerHTML = rooms.room[0].description;
                way1.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way1);
                break;
            case "left":
                let way2 = document.createElement('div');
                way2.innerHTML = rooms.room[1].description;
                way2.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way2);
                break;
            case "right":
                let way3 = document.createElement('div');
                way3.innerHTML = rooms.room[2].description;
                way3.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way3);
                break;
            case "back":
                let way4 = document.createElement('div');
                way4.innerHTML = rooms.room[3].description;
                way4.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way4);
                break;
            default:
                let way0 = document.createElement('div');
                way0.innerHTML = "try writing 'go' and then a direction 'forward' 'left' 'right' or 'back'";
                way0.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way0);
                break;
        }
    
}

