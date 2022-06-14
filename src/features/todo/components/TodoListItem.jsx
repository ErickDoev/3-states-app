import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  deleteTodo,
  setActiveTodo,
  updateTodo,
} from '../actions/todoActions'

export const TodoListItem = ({ id, todo, active }) => {
  const [inputValue, setInputValue] = useState({
    todo,
  })

  const dispatch = useDispatch()
  const handleChange = (e) => {
    console.log(e.target.value)
    setInputValue({ todo: e.target.value })
  }

  const handleDelete = () => {
    dispatch(deleteTodo(id))
  }

  const handleBlur = () => {
    dispatch(updateTodo(id, inputValue))
  }

  const handleChangeChecbox = () => {
    dispatch(setActiveTodo(id))
  }

  return (
    <li className='todo-list-item'>
     <input
        type="checkbox"
        checked={active}
        name="active"
        onChange={handleChangeChecbox}
        className='list-box'
      />
      <input
        type="text"
        value={inputValue.todo}
        onChange={handleChange}
        onBlur={handleBlur}
        className='list-input '
      />
      <button 
        className='btn btn-warning'
        onClick={handleDelete}>Borrar</button> 

    </li>
  )
}

