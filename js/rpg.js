//messy function to do keywords
function includes(a){

    //Keywords
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
var commands = ["go", "help", "inventory"];
var inventory = ["linkedIn", "GitHub", "Youtube", "golden-ticket"];


//works
function showHelp() {

    let helpMenu = document.createElement('div');
      //genereates random admin message
        helpMenu.textContent = admin[Math.floor(Math.random() * admin.length)];
        helpMenu.className = "text-info p-2 fs-3 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(helpMenu);
        
    for (var i = 0; i < commands.length; i++) {
        let commandsMenu = document.createElement('div');
        commandsMenu.innerHTML = commands[i];
        commandsMenu.className = "text-info fs-3 ms-5 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(commandsMenu);
    }
}


// dis[lays a little about me in the console
for (let i in person.stuffs) {
    console.log("****" + person.stuffs[i].name + "****");
    for (let j in person.stuffs[i].art) {
        console.log(person.stuffs[i].art[j]);
    }
}




//changes room or conversation
// with command go
function changeRoom(dir) {
        switch (dir) {
            case "start":
                let way1 = document.createElement('div');
                way1.innerHTML = rooms.room[0].description;
                way1.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way1);
                break;
            case "middle":
                let way2 = document.createElement('div');
                way2.innerHTML = rooms.room[1].description;
                way2.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way2);
                break;
            case "end":
                let way3 = document.createElement('div');
                way3.innerHTML = rooms.room[2].description;
                way3.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way3);
                break;
            default:
                let way0 = document.createElement('div');
                way0.innerHTML = "try writing 'go' and then a direction 'start' 'middle' or 'end'";
                way0.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way0);
                break;
        }
    
}



//works
//displays inventory
function showInventory() {
    let inventoryMenu = document.createElement('div');
        inventoryMenu.innerHTML = "this is what you have:";
        inventoryMenu.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(inventoryMenu);
    
    for (var i = 0; i < inventory.length; i++) {
        let inventoryList = document.createElement('div');
        inventoryList.innerHTML = inventory[i];
        inventoryList.className = "text-info fs-3 ms-3 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(inventoryList);
    }
}


