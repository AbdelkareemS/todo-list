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
        title: 'wake up'
      },
      {
        id: 2,
        title: 'breakfast'
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
    console.log('clearList');
  }

  deleteItem = (id) => {
    console.log(`Delete Specific Item ${id}`);
  }

  handleEdit = (id) => {
    console.log(`handleEdit ${id}`);
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
