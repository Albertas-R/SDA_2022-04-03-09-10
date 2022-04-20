import React from "react";

export const Button = props => {
  // console.log(props);

  // return <button onClick={props.onClick}>Click me</button>;
  return <button {...props}>Change Theme Color</button>;
};
