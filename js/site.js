//ALLOW enter key to do stuff while user is in textbox
//https://www.pluralsight.com/guides/how-to-enter-key-event-handler-on-a-react-bootstrap-input-component
import React, { Component } from "react";
import { InputGroup, FormControl, Input } from "react-bootstrap";

class SimpleKeyEvent extends Component {
  constructor() {
    super();
    this.state = {
      name: "React-bootstrap key enter event"
    };
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp(event) {
    if (event.charCode === 13) {
      this.setState({ inputValue: event.target.value });
    }
  }

  render() {
    const { inputValue } = this.state;

    return (
      <div>
        <InputGroup>
          <FormControl placeholder="First name" onKeyPress={this.onKeyUp} />
        </InputGroup>
        <hr />
        <span>Input value is : {inputValue}</span>
      </div>
    );
  }
}

export default SimpleKeyEvent;


//can write onKeyUp(enter) to make stuff go
onKeyUp(event) {
    if (event.key === "enter") {
      this.setState({ inputValue: event.target.value });
    }
}


//my chatbot function

function adminChatBot() {


    //take string text from user entry
    document.getElementById("user input");
     //i think it should know that it is textarea
    //print it above
    print(innerText);
   
    //ping same text to chatbot entry
    //copy chatbot responce
    //print chatbot responce in monotype

}

