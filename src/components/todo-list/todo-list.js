import React from "react";
import ToDoListItem from "../todo-list-item/index";
import "./todo-list.css";

const ToDoList = ({ data, onDelite, onImportant, onDone }) => {
  const elements = data.map((elem) => {
    return (
      <li key={elem.id}>
        <ToDoListItem
          label={elem.label}
          important={elem.important}
          done={elem.done}
          onDelite={() => {
            onDelite(elem.id);
          }}
          onImportant={() => {
            onImportant(elem.id);
          }}
          onDone={() => {
            onDone(elem.id);
          }}
        />
      </li>
    );
  });
  return <ul className="list-group">{elements}</ul>;
};

export default ToDoList;
