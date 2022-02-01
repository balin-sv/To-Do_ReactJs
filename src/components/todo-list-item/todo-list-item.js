import React, { Component } from "react";
import "./todo-list-item.css";

export default class ToDoListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, onDelite, onImportant, onDone, important, done } =
      this.props; //desctructurisacion de objeto
    let classNames = "span-style";

    if (important) {
      classNames += " important";
    }

    if (done) {
      classNames += " done";
    }

    return (
      <div className={classNames}>
        <span
          onClick={onDone}
          // onClick={this.onLabelClick}
        >
          {label}
        </span>
        <div className="btn-wrap">
          <button
            // onClick={this.onImportantClick}
            onClick={onImportant}
            type="button"
            className="btn btn-outline-success btn-sm "
          >
            <i className="fa fa-exclamation"></i>
          </button>
          <button
            onClick={onDelite}
            type="button"
            className="btn btn-outline-danger btn-sm"
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}
