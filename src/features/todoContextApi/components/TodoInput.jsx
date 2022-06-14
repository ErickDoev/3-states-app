import { useState } from 'react'
import { useContext } from 'react'
import { addNewTodo } from '../actions/todoActions'
import { TodoContext } from '../context/TodoContext'

export const TodoInput = () => {
  const { dispatch } = useContext(TodoContext)

  const [inputValue, setInputValue] = useState('')

  const handleChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewTodo(inputValue))
  }

  return (
    <div className="todo-input-content">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="todo-input"
          placeholder="Buscar..."
        />
        <div className="d-flex justify-content-center align-items-center h-100">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </form>
    </div>
  )
}
