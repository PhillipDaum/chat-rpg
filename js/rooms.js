//these are rooms, they could be like conversations
//its and 8x8 grid starting at 06, turns left at 0, 
//extends hall to 8, 16, 24, 32, 40, 48. 52
//next hall is 52 to 63 
var rooms = {
    room: [
        { name: "corner", "description": ["you can turn left here if you want"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: null, "description": ["you can't do that"] },
        { name: "corner", "description": ["you can turn left here if you want"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: "hall", "description": ["it's a hall of art, look aroud"] },
        { name: "hall", "description": ["dead end"] },
    ]
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