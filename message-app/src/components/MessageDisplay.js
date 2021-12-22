import React from "react";

const MessageDisplay = (props) => {
  return (
    <div>
      {props.messages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default MessageDisplay;
