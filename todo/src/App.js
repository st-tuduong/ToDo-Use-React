import { useState } from 'react';
import './App.css';
import Form from './component/formTodo';
import Header from './component/Header';
import List from './component/listTodo';

const App = () => {
  const storageTodo = JSON.parse(localStorage.getItem('todos'));
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(storageTodo || []);
  return (
    <div className = 'container'>
      <div className='todo'>
      <Header />
      <Form 
        input = {input}
        setInput = {setInput}
        todos = {todos}
        setTodos = {setTodos}
      />
      <List 
        todos = {todos}
        setTodos = {setTodos}
      />
      </div>
    </div>
  );
}

export default App;