import React, { useContext } from "react";

import { Text } from "./Text";
import { Button } from "./Button";
import { ThemeContext } from "../theme";

export const Container = props => {
  const theme = useContext(ThemeContext);
  // console.log(useContext(ThemeContext));

  // const handleColor = () => {
  //   console.log("handleColor button click");
  // };

  return (
    <div style={theme}>
      Container Component
      <Text moreText={"text"} />
      <Text moreText={"more text"} />
      <Text moreText={"some more text"} />
      {/* <Button onClick={handleColor} /> */}
    </div>
  );
};
