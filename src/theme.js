import React from "react";

// export const styleColor = {
//   color: "green",
// };

export const styleColor = {
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },
};

// export const ThemeContext = React.createContext(styleColor);
export const ThemeContext = React.createContext(styleColor.green);
