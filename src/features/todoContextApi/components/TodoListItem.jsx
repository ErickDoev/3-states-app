import { useContext, useState } from 'react'
import { useForm } from '../../shared/hooks/useForm'
import { deleteTodo, setActiveModalNote, setActiveTodo, updateNote } from '../actions/todoActions'
import { TodoContext } from '../context/TodoContext'
import { openModal } from "../actions/todoActions";

export const TodoListItem = ({ uid, active, title: titleProp, note: noteProp, date }) => {
  const { dispatch, state } = useContext(TodoContext)
  const [values, handleInputChange, reset] = useForm({
    title:titleProp,
    note:noteProp,
  })
  const {title, note} = values;

  const handleChangeChecbox = (uid) => {
    dispatch(setActiveTodo(uid))
  }

  const handleBlur = () => {
    dispatch(updateNote(uid, values))
    console.log(values);
  }

  const handleDelete = () => {
    //dispatch(deleteTodo(uid))
  }

  const handleOpenModal = () => {
    dispatch(openModal())
    dispatch(setActiveModalNote({uid, active, title, note, date}))
  }

  return (
    <div className="notes-item-container">
      <div className="notes-item-header mb-2">
        <div>
          <div className="notes-icon notes-icon-r">
            <i className="fa-solid fa-print"></i>
          </div>
          <div className="notes-icon">
            <i className="fa-solid fa-cloud-arrow-down"></i>
          </div>
        </div>
        <div>
          <div className='notes-icon notes-icon-r'>
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
          <div className="notes-icon notes-icon-l" onClick={handleDelete}>
            <i className="fa-solid fa-eraser"></i>
          </div>
        </div>
      </div>
      <div className="notes-item-content">
        <input
          onChange={() => {
            handleChangeChecbox(uid)
          }}
          type="checkbox"
          checked={active}
        />
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
      <div className="notes-item-footer">
        <p className="text-muted mt-3">{date}</p>
      </div>
    </div>
  )
}
