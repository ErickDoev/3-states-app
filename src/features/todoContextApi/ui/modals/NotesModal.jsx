import { useContext, useState } from 'react'
import Modal from 'react-modal'
import { useForm } from '../../../shared/hooks/useForm'
import { addNewNote, openModal } from '../../actions/todoActions'
import { TodoContext } from '../../context/TodoContext'

Modal.setAppElement('#root')

const customStylesModal = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    padding: '0px',
  },
}

const customStylesConfirmModal = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
  },
}

export const NotesModal = () => {
  const { dispatch, state } = useContext(TodoContext)
  const {ui} = state;
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false)

  const [formValues, handleInputChange] = useForm({
    title:'',
    note:''
  });
  const {title, note} = formValues;

  const closeModal = () => {
    dispatch(openModal())
  }

  const closeConfirmModal = (action) => {
    setIsOpenConfirmModal(false)
    if(!title || !note) return;
    if (action === 'confirm') {
      dispatch(addNewNote(formValues));
      dispatch(openModal())
      return
    }
    console.log('cancel');
    
  }

  const openConfirmModal = () => {
    setIsOpenConfirmModal(true)
  }
  

  return (
    <>
      <Modal
        isOpen={ui.isActiveModal}
        //shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        style={customStylesModal}
        contentLabel="My modal exaple"
        overlayClassName="modal-fondo"
        //onAfterClose={addNewNote}
      >
        <div className="card">
          <div className="card-header modal-text-end">
            <i
              className="fa-solid fa-pen-to-square mr-4"
              onClick={openConfirmModal}
            ></i>
            <i 
              className="fa-solid fa-xmark"
              onClick={closeModal}></i>
          </div>
          <div className="card-body p-0">
            <form className="modal-form">
              <input
                name='title'
                value={title}
                onChange={handleInputChange}
                className="modal-input modal-input-title"
                type="text"
                placeholder="Escriba algún título.."
              />
              <textarea
                className="modal-input modal-scroll"
                placeholder="Escriba alguna nota..."
                name="note"
                value={note}
                onChange={handleInputChange}
                cols="30"
                rows="10"
              ></textarea>
            </form>
          </div>
          <div className="card-footer text-muted">{new Date().getTime()}</div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpenConfirmModal}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        style={customStylesConfirmModal}
        contentLabel="My modal exaple"
      >
        <div className="card modal-borderless">
          <div className="card-body">
            <p className="card-text">¿Desea guardar los cambios?</p>
          </div>
          <div className="card-footer2">
            <div className="d-flex w-100 justify-content-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  closeConfirmModal('confirm')
                }}
              >
                Aceptar
              </button>
              <button
                className="btn btn-warning"
                onClick={() => {
                  closeConfirmModal('cancel')
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
