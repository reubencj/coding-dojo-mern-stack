import React from "react";

const Hello = (props) => {
  const getInput = (text, color = "black", backgroundColor = "none") => {
    const textStyle = {
      backgroundColor,
      color,
    };

    return (
      <h1 style={textStyle}>
        {" "}
        {isNaN(text) ? "The word is " : "The number is "}
        {text}{" "}
      </h1>
    );
  };

  return <h1>{getInput(props.text, props.color, props.backgroundColor)} </h1>;
};

export default Hello;
