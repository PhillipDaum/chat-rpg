
//Main RPG Variables
var commands = {
    rpg: [
        { name: "help", "description": ["displays this"] },
        { name: "go", "operators": ["forward", "left", "right", "back"] },
        { name: "inventory", "description": ["displeays your inventory"] },
        { name: "look", "description": ["look around a room or at something in the room"] },
        { name: "grab", "description": ["pickup a thing and add it to your inventory"] },

    ]
}

//Displays Help menu
function showHelp() {
    let helpMenu = document.createElement('div');
      //genereates random admin message
        helpMenu.textContent = admin[Math.floor(Math.random() * admin.length)];
        helpMenu.className = "text-info p-2 fs-3 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(helpMenu);

    //shows possible commands
    for (var i = 0; i < commands.rpg.length; i++) {
        let commandsMenu = document.createElement('div');
        commandsMenu.innerHTML = commands.rpg[i].name;
        commandsMenu.className = "col-2 text-info fs-3 ms-5 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(commandsMenu);
    }
}



var items = {
    coins: [
        { name: "linkedin", "description": ["linkedin coin"] },
        { name: "github", "description": ["github coin"] },
        { name: "youtube", "description": ["youtube coin"] },
    ],

    keys: [
        //standard keys
        { name: "gold", "description": ["gold key"] },
        { name: "silver", "description": ["silver key"] },
        //secret keys
        { name: "brown", "description": ["the weird"] },
        { name: "red", "description": ["rickroll"] },
        { name: "black", "description": ["the special key"] },
    ]
}

var inventory = {
    coins: [
    ],

    keys: [
    ]
}

function grab(b) {
    // when player picks up an item
    inventory.push(b);  
    console.log('whacked the ' + b);
}


//displays inventory
function showInventory() {
    //displays inventory message
    let inventoryMenu = document.createElement('div');
        inventoryMenu.innerHTML = "this is what you have:";
        inventoryMenu.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(inventoryMenu);

    //displays inventory list
    //change - items to inventory
    //coins
    for (var i = 0; i < items.coins.length; i++) {
        let coinsList = document.createElement('div');
        coinsList.innerHTML = items.coins[i].name;
        coinsList.className = "col-2 text-info fs-3 ms-5 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(coinsList);
    }
    //keys
    for (var i = 0; i < items.keys.length; i++) {
        let keysList = document.createElement('div');
        keysList.innerHTML = items.keys[i].name;
        keysList.className = "col-2 text-info fs-3 ms-5 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(keysList);
    }
}




