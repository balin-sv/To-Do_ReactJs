import React, { Component } from "react";
import "./btn-add-item.css";

export default class BtnAddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form className="btn-add d-flex" onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          className="form-control"
          placeholder="type what you nead to do"
          onChange={this.onChangeHandler}
          value={this.state.value}
        ></input>
        <button type="submit" className="btn btn-outline-secondary">
          Add Item
        </button>
      </form>
    );
  }
}
