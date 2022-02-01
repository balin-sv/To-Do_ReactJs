import React from "react";
import "./filter-panel.css";

const FilterPanel = ({ onFilter, filter }) => {
  const filters = [{ name: "all" }, { name: "active" }, { name: "done" }];

  const btns = filters.map((el) => {
    const isActive = filter === el.name;
    const otherClasses = isActive ? " btn-info" : " btn-outline-section";
    return (
      <button
        type="button"
        className={`btn${otherClasses}`}
        key={el.name}
        onClick={() => {
          onFilter(el.name);
        }}
      >
        {el.name}
      </button>
    );
  });

  return (
    <div className="btn-group" role="group">
      {btns}
    </div>
  );
};
export default FilterPanel;
