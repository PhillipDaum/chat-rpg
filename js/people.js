 //Nested arrays of an object
 var person = {
    firstName: "Phil",
    lastName: "Daum",
    age: "enough",
    stuffs: [
        { name: "paintings", "art": ["landscapes", "abstracts", "other"] },
    ]
}


// displays a little about me in the console
for (let i in person.stuffs) {
    console.log("****" + person.stuffs[i].name + "****");
    for (let j in person.stuffs[i].art) {
        console.log(person.stuffs[i].art[j]);
    }
}