import React from 'react';

import TodoItem from '../TodoItem/TodoItem.component';

import './TodoItems.styles.scss';

const TodoItems = (props) => {
  const { todos } = props;
  console.log('todo items:', todos);
  return (
    <div className="todo-items">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoItems;
