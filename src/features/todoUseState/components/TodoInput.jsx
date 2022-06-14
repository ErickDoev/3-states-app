import { useState } from "react"
import { TodoList } from "./TodoList"

export const TodoInput = ({todos, setTodos}) => {
  
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({target}) => {
    setInputValue(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      uid: (new Date().getTime()).toString(),
      todo: inputValue,
      active: false
    }
    setTodos(state => ({
      todos: [...state.todos,newTodo]
    }));
    setInputValue('');
  }

  return (
    <>
      <div className="todo-input-content">
          <form 
            onSubmit={handleSubmit}
            className="todo-form">
            <input 
              type="text"
              placeholder="Add new todo"
              className="todo-input"
              name="inputValue"
              value={inputValue}
              onChange={handleChange}/>
            <button className="btn btn-primary">Agregar</button>
          </form>
      </div>
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  )
}
