import React from "react";

export const Header = props => {
  // console.log(props);

  return (
    <header style={props.style}>
      <strong>React App | JavaScriptRemoteLT5</strong>
      {props.propsPvz}
    </header>
  );
};
