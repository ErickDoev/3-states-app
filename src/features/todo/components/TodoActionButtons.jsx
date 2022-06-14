import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteAllTodos,
  setAllToogleTodo,
  deleteActivedTodos,
} from '../actions/todoActions'

export const TodoActionButtons = () => {
  const dispatch = useDispatch()
  const todosLenght = useSelector(({ todos }) => todos.length)

  const [toogle, setToogle] = useState(true)

  const handleToogleTodos = () => {
    dispatch(setAllToogleTodo(toogle))
    setToogle(!toogle)
  }

  const handleDeleteAllTodos = () => {
    dispatch(deleteAllTodos())
  }

  const handleDeleteActivedTodos = () => {
    dispatch(deleteActivedTodos())
  }
  return (
   <div className='d-flex justify-content-center m-4 w-100'>
      <div className="btn-group">
        <button
          type='button'
          className="btn btn-danger"
          onClick={handleDeleteAllTodos}
          disabled={todosLenght === 0 ? true : false}
        >
          Borrar todos
        </button>
        <button
          type='button'
          className="btn btn-danger"
          onClick={handleDeleteActivedTodos}
          disabled={todosLenght === 0 ? true : false}
        >
          Borrar seleccionados
        </button>
        <button
          type='button'
          className="btn btn-danger"
          onClick={handleToogleTodos}
          disabled={todosLenght === 0 ? true : false}
        >
          {toogle ? 'Seleccionar todos' : 'Deseleccionar todos'}
        </button>
      </div>
   </div>
  )
}
