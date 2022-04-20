// import React, { useState } from "react";
// import React, { useState, useEffect } from "react";

// import { Header } from "./Header";
// import { List } from "./List";
// import { Button } from "./Button";
// import { Title } from "./Title";

/*
v1

export const App = () => (
  <div>
    <p>JavaScriptRemoteLT5 | React Framework</p>
    <Header pvz="Mano prop: pvz" pvz2="Mano prop: pvz2" />
    <List />
    <Button />
  </div>
);
*/

/*
v2

export class App extends React.Component {
  state = {
    count: 1,
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    // this.state = { count: 1 };
  }

  handleClick() {
    // console.log("handle 123");
    // this.setState({ count: 2 });
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <Header pvz="Mano prop: pvz" pvz2="Mano prop: pvz2" />
        <List />
        <Button onClick={this.handleClick} />
        <p>{this.state.count}</p>
      </div>
    );
  }
}
*/

/*
Vlado kodas

import React, { useState, useEffect } from "react";

import { Title } from "./Title";
import { List } from "./List";

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => setUsers(users));
  }, []);

  return (
    <div>
      <Title title="React list" />
      <List items={users} />
    </div>
  );
};


import React from "react";

export const List = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
*/

/*
export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => setUsers(users));
  }, []);

  return (
    <div>
      <Title title="React list" />
      <List items={users} />
    </div>
  );
};
*/

/*
2022-04-09 Vlado pasikartojimas

import React, { useState } from "react";

import { Text } from "./Text";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count => {
      return count + 1;
    });
  };

  return (
    <div>
      <Text text="count" />
      <span>{count}</span>
      <button onClick={handleClick}>increment</button>
    </div>
  );
};

// export class App extends React.Component {
//   state = {
//     count: 0,
//   };

//   handleClick = () => {
//     this.setState(state => {
//       return { count: state.count + 1 };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Text text="count" />
//         <span>{this.state.count}</span>
//         <button onClick={this.handleClick}>increment</button>
//       </div>
//     );
//   }
// }



import ReactDOM from "react-dom";
import React from "react";

import { App } from "./components/App";

ReactDOM.render(<App />, document.querySelector("#react-app"));


*/

/*
mano kodas

// import React, { useState } from "react";
import React, { useState, useEffect } from "react";

import { Header } from "./Header";
// import { List } from "./List";
import { Button } from "./Button";
// import { Title } from "./Title";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count => count + 1);

  // https://reactjs.org/docs/components-and-props.html#rendering-a-component
  function Welcome(props) {
    return <p>Hello, {props.name}</p>;
  }
  const element = <Welcome name="Albertas" />;

  return (
    <div>
      <Header
        propsPvz=" | propsPvz"
        style={{ color: "orangered", marginBottom: "16px", fontSize: "18px" }}
      />
      <Button onClick={handleClick} />
      <p>{count}</p>

      <hr />

      <div>{element}</div>
      <Welcome name="Jonas" />
      <Welcome name="Tadas" />
    </div>
  );
};
*/

/*

uzduotis, sukurti theme, kuri butu perduodama contextu.

1. sukurkite komponentu kurie turetu ihardcodintus stilius, keleta tekstu, buttona ir pan
2 sukurkite contexta kuris turetu tema ir jos keitimo funkcija
3 apimkite komponentus, kurie galetu pasiekti context reiksmes, context provideriu nurodydami jammpradine tema
4 panaudokite context reiksmes kur norite
5 padarykite kad ten kur provideris context butu galima jo value keisti priklausomai nuo state,, taip paduodant vis kita theme reiksme


*/

import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Container } from "./Container";
import { Button } from "./Button";
import { ThemeContext, styleColor } from "../theme";

export const App = () => {
  const [theme, setTheme] = useState(styleColor.green);

  const handleColor = () => {
    // console.log("handleColor button click");
    setTheme(theme =>
      theme === styleColor.green ? styleColor.red : styleColor.green,
    );
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Container />
      <Button onClick={handleColor} />
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#react-app"));
