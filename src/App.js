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
  console.log('reducer reached: here is the action', action);
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return {
        ...state,
        // increment unique id by 1
        uid: state.uid + 1,
        todos: [...state.todos, { id: state.uid, ...action.payload }],
      };

    case ACTION_TYPES.DELETE_TODO:
      console.log('the dispatch was triggered to delete the todo');
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

  console.log('reducer state', state);

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
