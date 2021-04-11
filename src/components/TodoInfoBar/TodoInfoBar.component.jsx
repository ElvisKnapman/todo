import React, { useState } from 'react';

import './TodoInfoBar.styles.scss';

const TodoInfoBar = (props) => {
  const { setTodos } = props;

  const [todoText, setTodoText] = useState('');

  const clearTodoField = () => {
    setTodoText('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // do not add todo if there is no state
    if (todoText.trim().length < 1) {
      return;
    }

    // add new todo object to the front of the list
    setTodos((prevState) => [
      {
        title: todoText,
        urgent: false,
        completed: false,
        created: new Date(Date.now()),
      },
      ...prevState,
    ]);
    // clear input field
    clearTodoField();
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
        </form>
      </div>
    </div>
  );
};

export default TodoInfoBar;
