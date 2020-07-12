import React, { Component } from 'react';
import uuid from 'uuid/dist/v1';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "new todo",
      }
    ],
    id: uuid(),
    item: '',
    editItem: false,
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false,
    })
  }

  clearList = () => {
    this.setState({
      items: [],
    })
  }

  deleteItem = (id) => {
    const todos = this.state.items;
    const deletedTodo = todos.filter(todo => todo.id !== id);
    this.setState({
      items: deletedTodo,
    })
  }

  handleEdit = (id) => {
    const filterdItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filterdItems,
      id: id,
      item: selectedItem.title,
      editItem: true
    });

  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-8 mx-auto mt-5">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
              <TodoList items={this.state.items} clearList={this.clearList} deleteItem={this.deleteItem} handleEdit={this.handleEdit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
