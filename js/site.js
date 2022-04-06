//my chatbot function

function adminChatBot() {

  //from chatbot
  SDK.applicationId = "5308744934602165052";
  var sdk = new SDKConnection();
  var web = new WebChatbotListener();
  web.connection = sdk;
  web.instance = '42609462';
  web.instanceName = 'admin';
  web.nativeVoice = true;
  web.nativeVoiceName = "";
  web.lang = "en";
  SDK.lang = "en";
  web.greet();
  document.getElementById('user input').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
      web.sendMessage();
      return false;
    }
  });
}


