import React, { useContext, useEffect } from 'react';

import { StateContext } from '../../StateContext';

import {
  BsExclamationTriangleFill,
  BsFillClockFill,
  BsTrashFill,
  BsCheckCircle,
} from 'react-icons/bs';

import { ACTION_TYPES } from '../../actionTypes/actionTypes';

import './TodoItem.styles.scss';

const TodoItem = (props) => {
  const { dispatch } = useContext(StateContext);
  const { todo } = props;

  useEffect(() => {
    console.log('new todo component mounted');
  }, []);
  return (
    <div className="todo-item">
      <div className="flex-container">
        <div className="todo-title">{todo.title}</div>
        <div className="todo-status-container">
          <div className="todo-status-icon">
            <BsCheckCircle
              className="checkmark-icon"
              onClick={() => console.log('clicked to toggle complete')}
            />
          </div>
          <div className="todo-status-icon">
            <BsTrashFill
              className="trash-icon"
              onClick={() =>
                dispatch({ type: ACTION_TYPES.DELETE_TODO, payload: todo.id })
              }
            />
          </div>
        </div>

        {todo.urgent ? (
          <div className="urgent" title="Urgent">
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
