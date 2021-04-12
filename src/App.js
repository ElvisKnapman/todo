import React, { useReducer } from 'react';

import TodoInfoBar from './components/TodoInfoBar/TodoInfoBar.component.jsx';
import TodoItems from './components/TodoItems/TodoItems.component.jsx';

import { StateContext } from './StateContext';

import { ACTION_TYPES } from './actionTypes/actionTypes';

import './App.css';

/* REDUCER */
const initialState = {
  uid: 1,
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return {
        ...state,
        // increment unique id by 1
        uid: state.uid + 1,
        todos: [...state.todos, { id: state.uid, ...action.payload }],
      };

    case ACTION_TYPES.TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          // if todo is the todo that was clicked on, mark as complete
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          // otherwise just return the todo
          return todo;
        }),
      };

    case ACTION_TYPES.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

/* END REDUCER */

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <StateContext.Provider value={{ dispatch }}>
        <TodoInfoBar />
        <TodoItems todos={state.todos} />
      </StateContext.Provider>
    </div>
  );
}

export default App;
