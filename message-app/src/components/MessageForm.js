import React, { useState } from "react";

const MessageForm = (props) => {
  const [message, setMessage] = useState("");

  const handleMessage = (e) => {
    e.preventDefault();
    props.submitMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleMessage}>
      <label htmlFor="message">New Message</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <input type="submit" value="Send Message" />
    </form>
  );
};

export default MessageForm;



function addTwo(a,b) {

  return a +b
  
}

const four = addTwo; 

console.log(four(4,100))