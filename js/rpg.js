
//Main RPG Variables
var commands = {
    rpg: [
        { name: "help", "description": ["displays this"] },
        { name: "go", "operators": ["north", "south", "east", "west"] },
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
        default:
            break;
    }
}

