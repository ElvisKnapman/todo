import React, { useContext, useState } from 'react';

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

  const [deleted, setDeleted] = useState(false);

  return (
    // when the animation ends for removing this element, dispatch the delete
    <div
      className={`todo-item ${deleted ? 'deleted' : ''}`}
      onAnimationEnd={() => {
        dispatch({ type: ACTION_TYPES.DELETE_TODO, payload: todo.id });
      }}>
      {todo.completed ? (
        <div className="completed-banner">Completed!</div>
      ) : null}
      <div className="flex-container">
        <div
          className={`todo-title ${todo.completed ? 'title-completed' : ''}`}>
          {todo.title}
        </div>
        <div className="todo-status-container">
          <div className="todo-status-icon">
            <BsCheckCircle
              className="checkmark-icon"
              title="Toggle todo completed status"
              onAnimationEnd={() =>
                dispatch({
                  type: ACTION_TYPES.TOGGLE_COMPLETE,
                  payload: todo.id,
                })
              }
              onClick={() =>
                dispatch({
                  type: ACTION_TYPES.TOGGLE_COMPLETE,
                  payload: todo.id,
                })
              }
            />
          </div>
          <div className="todo-status-icon">
            <BsTrashFill
              className="trash-icon"
              title="Delete this todo"
              onClick={() => {
                setDeleted(true);
              }}
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
