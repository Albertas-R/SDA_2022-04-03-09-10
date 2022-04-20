import React from "react";

/*
export const List = () => {
  return (
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
      <li>List item 4</li>
      <li>List item 5</li>
    </ul>
  );
};
*/

export const List = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
