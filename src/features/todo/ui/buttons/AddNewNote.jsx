import { useDispatch } from 'react-redux'
import { openModal } from '../../actions/todoActions'

export const AddNewNote = () => {
  
  const dispatch = useDispatch()

  const setActiveModal = () => {
    dispatch(openModal());
  }

  return (
    <div className="modal-button" onClick={setActiveModal}>
      <i className="fa-solid fa-plus fa-2x"></i>
    </div>
  )
}
