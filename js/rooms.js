//these are rooms, they could be like conversations

var roomStart = {
    description: "You are on a device somewhere staring into a black screen with words on it",
    directions: [
            {"this": [roomMiddle]},
            {"that": [roomEnd]},
        ]
    };

var roomMiddle = {
    description: "This place seems nice. There is one computer here pretending to be a person",
    directions: [
            {"this": [roomStart]},
            {"that": [roomEnd]},
        ]
    };

var roomEnd = {
    description: "You are at the end of the line for now...",
    directions: [
            {"this": [roomMiddle]},
            {"that": [roomStart]},
        ]
    };
    