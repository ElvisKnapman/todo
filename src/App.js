import React, { useState, useReducer } from 'react';

import TodoInfoBar from './components/TodoInfoBar/TodoInfoBar.component.jsx';
import TodoItems from './components/TodoItems/TodoItems.component.jsx';

import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'some todo',
      urgent: false,
      completed: false,
      created: new Date(Date.now()),
    },
    {
      id: 2,
      title: 'another todo',
      urgent: false,
      completed: true,
      created: new Date(Date.now()),
    },
    {
      id: 3,
      title: 'yet another todo',
      urgent: true,
      completed: false,
      created: new Date(Date.now()),
    },
  ]);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInfoBar setTodos={setTodos} />
      <TodoItems todos={todos} />
    </div>
  );
}

export default App;
