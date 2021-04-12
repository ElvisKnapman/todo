import React, { useState, useContext } from 'react';

import { StateContext } from '../../StateContext';

import { ACTION_TYPES } from '../../actionTypes/actionTypes';

import './TodoInfoBar.styles.scss';
import { BsFolderPlus } from 'react-icons/bs';

const TodoInfoBar = (props) => {
  console.log('props in the info bar', props);

  const { dispatch } = useContext(StateContext);

  const [todoText, setTodoText] = useState('');
  const [todoUrgent, setTodoUrgent] = useState(false);

  console.log('is the todo urgent', todoUrgent);

  const resetForm = () => {
    setTodoText('');
    setTodoUrgent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // do not add todo if there is no state
    if (todoText.trim().length < 1) {
      return;
    }

    // add new todo object to the front of the list
    dispatch({
      type: ACTION_TYPES.ADD_TODO,
      payload: {
        title: todoText,
        urgent: todoUrgent,
        completed: false,
        created: new Date(Date.now()),
      },
    });
    console.log('new todo dispatched');
    // clear input field and reset urgent checkbox
    resetForm();
  };
  console.log('todo state text:', todoText);
  return (
    <div>
      <div className="todo-info-bar">
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="todo-title">this would be the label</label> */}
          <input
            className="todo-input-field"
            type="text"
            name="todo-title"
            id="todo-title"
            onChange={(e) => setTodoText(e.target.value)}
            value={todoText}
            placeholder="What do you need to do?"
          />
          <div className="add-todo-group">
            <button className="add-todo-btn">Add Todo</button>
            <div className="urgent-checkbox-group">
              <label
                htmlFor="urgent-checkbox"
                className="urgent-checkbox-label">
                Mark as Urgent?
              </label>
              <input
                type="checkbox"
                id="urgent-checkbox"
                onChange={() => setTodoUrgent((prevState) => !prevState)}
                checked={todoUrgent}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoInfoBar;
