import { useContext } from 'react'
import { openModal } from '../../actions/todoActions'
import { TodoContext } from '../../context/TodoContext'

export const AddNewNote = () => {
  const { dispatch } = useContext(TodoContext)

  const setActiveModal = () => {
    dispatch(openModal())
  }

  return (
    <div className="modal-button" onClick={setActiveModal}>
      <i className="fa-solid fa-plus fa-2x"></i>
    </div>
  )
}
