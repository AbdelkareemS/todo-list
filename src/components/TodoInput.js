import React, { Component } from 'react';

class TodoInput extends Component {
    render() {

        const { item, handleChange, handleSubmit, editItem } = this.props;

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input className="form-control text-capitalize" type="text" placeholder="add todo item" value={item} onChange={handleChange} />
                    </div>
                    <button disabled={item ? false : true} className={editItem ? "btn btn-block btn-success mt-3 text-uppercase" : "btn btn-block btn-primary mt-3 text-uppercase"} type="submit">{editItem ? 'Edit Todo' : 'add todo'}</button>
                </form>
            </div>
        );
    }
}

export default TodoInput;