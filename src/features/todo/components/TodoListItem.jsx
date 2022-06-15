import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  deleteTodo,
  setActiveTodo,
  updateTodo,
} from '../actions/todoActions'

export const TodoListItem = ({ id, title, note, fulldate, active }) => {
  const [inputValue, setInputValue] = useState({
    title,
    note
  })

  const dispatch = useDispatch()
  const handleInputChange = (e) => {
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
    <div className='notes-item-container'>
      <div className='notes-item-header mb-2'>
        <div></div>
        <div>
          <div className="notes-icon notes-icon-l" onClick={handleDelete}>
            <i className="fa-solid fa-eraser"></i>
          </div>
        </div>
      </div>
      <div className='notes-item-content'>
      <input
          type="text"
          value={title}
          name="title"
          onChange={handleInputChange}
          className="modal-input modal-input-title"
          onBlur={handleBlur}
        />
        <textarea
          className="modal-input modal-scroll"
          value={note}
          name="note"
          onChange={handleInputChange}
          onBlur={handleBlur}
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  )
}

