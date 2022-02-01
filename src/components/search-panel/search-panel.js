import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={this.onChangeHandler}
          type="text"
          placeholder="type to search"
        ></input>
      </div>
    );
  }
}
