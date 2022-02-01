import React from "react";
import "./app-header.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="flex-row-wrap">
      <h1 className="app-header__title">ToDo List</h1>
      <h2 className="app-header__subtitle">
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
