//MAIN RPG FUNCTION
//with command go
//and operators forward, left, right, back
var current = 0;

function changeRoom(dir) {
    switch (dir) {
        case "start":
            let way0 = document.createElement('div');
            way0.innerHTML = rooms[0].description;
            way0.className = "rpg col-sm text-info p-2 fs-3 mb-2 font-monospace lh-sm";
            document.getElementById("chatloggy").appendChild(way0);
            current = 0;
            break;

        case "north":
            let way1 = document.createElement('div');
            let goingnorth = rooms[current].north;
            if (Number.isInteger(goingnorth)) {
                way1.innerHTML = rooms[goingnorth].description;
                way1.className = "rpg text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way1);
                current = goingnorth;
            } else {
                way1.innerHTML = rooms[current].north;
                way1.className = "rpg text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way1);    
            }
            break;

        case "west":
            let way2 = document.createElement('div');
            let goingwest = rooms[current].west;
            if (Number.isInteger(goingwest)) {
                way2.innerHTML = rooms[goingwest].description;
                way2.className = "rpg text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way2);
                current = goingwest;
            } else {
                way2.innerHTML = rooms[current].west;
                way2.className = "rpg text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way2);    
            }
            break;

        case "east":
            let way3 = document.createElement('div');
            let goingeast = rooms[current].east;
            if (Number.isInteger(goingeast)) {
                way3.innerHTML = rooms[goingeast].description;
                way3.className = "rpg text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way3);
                current = goingeast;
            } else {
                way3.innerHTML = rooms[current].east;
                way3.className = "rpg text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way3);    
            }
            break;

        case "south":
            let way4 = document.createElement('div');
            let goingsouth = rooms[current].south;
            if (Number.isInteger(goingsouth)) {
                way4.innerHTML = rooms[goingsouth].description;
                way4.className = "rpg text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way4);
                current = goingsouth;
            } else {
                way4.innerHTML = rooms[current].south;
                way4.className = "rpg text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(way4);    
            }
            break;
        default:
            let wayWrong = document.createElement('div');
            wayWrong.innerHTML = "try writing 'go' and then a direction 'forward' 'left' 'right' or 'start'";
            wayWrong.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
            document.getElementById("chatloggy").appendChild(wayWrong);
            break;
    }
}

// rooms are constructed in a 3x3 square, user and their direction entering is represented by "^" in room 0
// the directions are like cardinal directions
//      8 7 6
//      5 4 3
//      2 1 ^
var rooms = [
        {   name: "intro",
            east:"You feel a wall. You can't see it though",
            west:1,
            north:3,
            south:"Your south is against a wall",
            description: "you are staring at a dark screen on a device"},
        {   name: "foyer",
            east:0,
            west:2,
            north:4,
            south:"Your south is against a wall",
            description: "looks like the foyer in fancy motel"}, 
        {   name: "white room",
            east:2,
            west:"A beast white wall prevents you from moving.",
            north:5,
            south:"Your south is against a wall",
            description: "This room is totally blank, weird"},
        {   name: "kitchen",
            east:"A long wall of... I hope those are kitchen utensils",
            west:4,
            north:6,
            south:0,
            description: "Maybe, its a kitchen.... maybe..."},
        {   name: "bedroom",
            east:3,
            west:5,
            north:7,
            south:1,
            description: "Well, there are beds, most of them are made..."},
        {   name: "creepy room",
            east:4,
            west:"this wall is too moist",
            north:8,
            south:2,
            description: "It's really dark. There is a tiny flickering light in the corner. It's over a small puddle."},
        {   name: "outside-inside room",
            east:"This wall looks like the side of a mountain.",
            west:7,
            north:"a rock wall, cool",
            south:3,
            description: "It's like you are outside, but you are definitly inside. The carpet is literal grass. The ceiling looks like the sky. Fresh air breezes past your nose."},
        {   name: "70s room",
            east:6,
            west:8,
            north:"A shag carpet wall.",
            south:4,
            description: "Shag carpet, everywhere"},
        {   name: "wet room",
            east:7,
            west:"A brick wall",
            north:"You see a big glass window, behind it is an old flickering sign that says 'good job'",
            south:5,
            description: "Your shoes are now wet. There are like 2 inches of standing water in this room."},
]
