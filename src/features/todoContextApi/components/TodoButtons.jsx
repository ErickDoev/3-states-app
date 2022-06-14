import { useState } from 'react'
import { useContext } from 'react'
import Modal from 'react-modal'
import {
  deleteActivedTodos,
  deleteAllTodos,
  setAllToogleTodo,
} from '../actions/todoActions'
import { TodoContext } from '../context/TodoContext'

export const TodoButtons = () => {
  const { dispatch } = useContext(TodoContext)
  const [toogle, setToogle] = useState(true)

  const handleDeleteAllTodos = () => {
    dispatch(deleteAllTodos())
  }

  const deleteActiveTodos = () => {
    dispatch(deleteActivedTodos())
  }

  const toogleTodos = () => {
    dispatch(setAllToogleTodo(toogle))
    setToogle(!toogle)
  }

  return (
    <div className="d-flex justify-content-center w-100 input-prueba">
      <div className="btn-group">
        <button onClick={handleDeleteAllTodos} className="btn btn-danger">
          Borrar todos
        </button>
        <button onClick={deleteActiveTodos} className="btn btn-danger">
          Borrar seleccionados
        </button>
        <button onClick={toogleTodos} className="btn btn-danger">
          Seleccionar todos
        </button>
      </div>
    </div>
  )
}
