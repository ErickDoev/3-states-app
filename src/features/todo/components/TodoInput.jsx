import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../actions/todoActions'

export const TodoInput = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const handleChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue) return
    dispatch(addNewTodo(inputValue))
    setInputValue('')
  }

  return (
    <div className='todo-input-content'>
      <form 
        onSubmit={handleSubmit}
        className='todo-form'>
        <input
          className='todo-input'
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a new todo"
        />
        <button
          className='btn btn-primary' 
          type="submit">Agregar</button>
      </form>
    </div>
  )
}
