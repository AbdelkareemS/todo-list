import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    state = {}
    render() {
        const { items, clearList, deleteItem, handleEdit } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Todo List</h3>
                {
                    items.map(item => { return (<TodoItem key={item.id} title={item.title} deleteItem={() => deleteItem(item.id)} handleEdit={() => handleEdit(item.id)}></TodoItem>) })
                }
                <button className="btn btn-danger btn-block text-uppercase mt-5" type="button" onClick={clearList}>Clear List</button>
            </ul>
        );
    }
}

export default TodoList;