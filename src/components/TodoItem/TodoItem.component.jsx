import React from 'react';
import {
  BsExclamationTriangleFill,
  BsFillClockFill,
  BsTrashFill,
  BsCheckCircle,
} from 'react-icons/bs';

import './TodoItem.styles.scss';

const TodoItem = (props) => {
  const { todo } = props;
  return (
    <div className="todo-item">
      <div className="flex-container">
        <div className="todo-title">{todo.title}</div>
        <div className="todo-status-container">
          <div className="todo-completed-toggle">
            <BsCheckCircle className="checkmark-icon" />
          </div>
          <div className="todo-delete">
            <BsTrashFill className="trash-icon" />
          </div>
        </div>

        {todo.urgent ? (
          <div className="urgent">
            <BsExclamationTriangleFill className="urgent-icon" />
          </div>
        ) : null}
      </div>
      <div className="timestamp">
        {todo.created.toLocaleString()}
        <BsFillClockFill className="timestamp-clock" />
      </div>
    </div>
  );
};

export default TodoItem;
