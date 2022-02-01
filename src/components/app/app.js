import React, { Component } from "react";
import AppHeader from "../app-header/index";
import FilterPanel from "../filter-panel/index";
import SearchPanel from "../search-panel/index";
import ToDoList from "../todo-list/index";
import BtnAddItem from "../btn-add-item";
import "./app.css";

export default class App extends Component {
  maxID = 100;
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "drink cofe", important: false, id: 1, done: false },
        { label: "fix notebook", important: false, id: 2, done: false },
        { label: "buy milk", important: false, id: 3, done: false },
      ],
      term: "", //character o word
      filter: "", //all,active,done - recived from filter-panel
    };
  }

  onDeliteHandler = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  onAddHandler = (text) => {
    const newElement = {
      label: text,
      important: false,
      id: this.maxID++,
      done: false,
    };

    this.setState(({ data }) => {
      return {
        data: [...data, newElement],
      };
    });
  };

  onSearchHandler = (searchValue) => {
    this.setState({ term: searchValue });
  };

  onFilterHandler = (dataFilter) => {
    this.setState({ filter: dataFilter });
    this.filterElements(this.state.data, dataFilter);
  };

  filterElements(data, filter) {
    let result = [];

    switch (filter) {
      case "active":
        result = data.filter((el) => {
          return el.done === false;
        });
        break;
      case "all":
        result = data;
        break;
      case "done":
        result = data.filter((el) => {
          return el.done === true;
        });
        break;
      default:
        result = data;
        break;
    }
    return result;
  }

  searchElements(data, term) {
    if (term === "") {
      return data;
    } else {
      const result = data.filter((el) => {
        return el.label.indexOf(term) > -1;
      });
      return result;
    }
  }

  onImportantHeandler = (id) => {
    this.setState(({ data }) => {
      return { data: this.toggleProperty(data, id, "important") };
    });
  };

  onDoneHeandler = (id) => {
    this.setState(({ data }) => {
      return { data: this.toggleProperty(data, id, "done") };
    });
  };

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((elem) => {
      return elem.id === id;
    });
    const oldObj = arr[index];
    const newObj = { ...oldObj, [propName]: !oldObj[propName] };
    const firstPart = arr.slice(0, index);
    const secondPart = arr.slice(index + 1);
    const newArr = [...firstPart, newObj, ...secondPart];
    return newArr;
  }

  render() {
    const { data, term, filter } = this.state;
    const toDoCount = this.state.data.filter((el) => {
      return el.done === false;
    }).length;

    const doneCount = this.state.data.length - toDoCount;
    const list = this.filterElements(this.searchElements(data, term), filter);

    return (
      <div className="main-app-wrap">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="flex-row-wrap">
          <SearchPanel onSearch={this.onSearchHandler} />
          <FilterPanel filter={filter} onFilter={this.onFilterHandler} />
        </div>
        <ToDoList
          data={list}
          onDelite={this.onDeliteHandler}
          onImportant={this.onImportantHeandler}
          onDone={this.onDoneHeandler}
        />
        <BtnAddItem onAdd={this.onAddHandler} />
      </div>
    );
  }
}
