import React, { useReducer } from 'react';

import TodoInfoBar from './components/TodoInfoBar/TodoInfoBar.component.jsx';
import TodoItems from './components/TodoItems/TodoItems.component.jsx';

import './App.css';

const initialState = {
  uid: 1,
  todos: [],
};

const reducer = (state, action) => {
  console.log('reducer reached: here is the action', action);
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        // increment unique id by 1
        uid: state.uid + 1,
        todos: [...state.todos, { id: state.uid, ...action.payload }],
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('reducer state', state);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInfoBar dispatch={dispatch} />
      <TodoItems todos={state.todos} />
    </div>
  );
}

export default App;
