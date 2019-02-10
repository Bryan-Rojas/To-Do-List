import React, { Component } from 'react'
import PropTypes from 'prop-types';
//https://www.youtube.com/watch?v=sBws8MSXN7A&t=1387s 51:18

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.todo.completed ? 'red' : 'white',
            padding: '1em',
            borderBottom: '1px #cccccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                { ' '+ id + ') ' + title}
            </p>
        </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
