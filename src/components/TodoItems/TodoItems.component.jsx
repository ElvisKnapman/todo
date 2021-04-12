import React from 'react';

import TodoItem from '../TodoItem/TodoItem.component';

import './TodoItems.styles.scss';

const TodoItems = (props) => {
  const { todos } = props;
  console.log('todo items (in todos component):', todos);
  return (
    <div className="todo-items">
      {/* if there are todos, display them... otherwise display message saying there are no todos to display */}
      {todos.length ? (
        todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })
      ) : (
        <p className="no-todos-message">You have no todos to display.</p>
      )}
    </div>
  );
};

export default TodoItems;
