import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

import logo from "../../pages/merlion.png";

function Chat() {
  useEffect(() => {
    addResponseMessage("Welcome to a singlish-fied chat!");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    var singlishPostfix = ["lahh", "leh", "siannnn"];
    var singlishPrefix = ["eh", "walao"];
    var randomSinglish =
      singlishPrefix[Math.floor(Math.random() * singlishPrefix.length)] +
      " " +
      newMessage +
      " " +
      singlishPostfix[Math.floor(Math.random() * singlishPostfix.length)];
    addResponseMessage(randomSinglish);
    //     console.log(addResponseMessage(randomSinglish));
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title="Singlishfy your messages!"
        subtitle="simply click the SG button"
      />
    </div>
  );
}

export default Chat;
